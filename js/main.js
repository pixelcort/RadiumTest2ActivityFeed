App.ready = function main() {
	App.initialize();

	App.crossfilter = crossfilter(window.TEST_FEED);

	// Kind Dimension
	App.dimension_kind = App.crossfilter.dimension(function(d){return d.kind;});
	var kinds = [];
	App.dimension_kind.group().top(Infinity).forEach(function(kind) { // top infinity sorts by the count of that type
		kinds.pushObject(App.Kind.create({
			kind: kind.key
		}));
	});
	App.getPath('router.kindsController').set('content', kinds);

	// Timestamp Dimension
	App.dimension_timestamp = App.crossfilter.dimension(function(d){return d.timestamp;});
	App.group_timestamp_by_day = App.dimension_timestamp.group(function(timestamp) {
		return timestamp.slice(0,10)
	});
	var days = [];
	App.group_timestamp_by_day.all().forEach(function(day) {
		days.pushObject(App.Day.create({
			day: day.key
		}));
	});
	App.getPath('router.daysController').set('content',days);

	// Tag Dimension
	App.dimension_tag = App.crossfilter.dimension(function(d){return d.tag;});
	App.dimension_group_tags = App.dimension_tag.group();

	// Generate Groups
	var daysController = App.getPath('router.daysController');
	var kindsController = App.getPath('router.kindsController');
	for (var i=0,l=daysController.get('length');i<l;i++) {
		var day = daysController.objectAt(i);
		// console.log(day.get('day'));

		App.dimension_timestamp.filter([day.get('day'), day.get('day')+'U']); // U comes after the letter T, which is used in the timestamp string
		for (var i2=0,l2=kindsController.get('length');i2<l2;i2++) {
			var kind = kindsController.objectAt(i2);

			App.dimension_kind.filter(kind.get('kind'));

			var tags = App.dimension_group_tags;

			var relevantTags = tags.all().filter(function(tag){return tag.value;}); // this is a filter on an array
			for (var i3=0,l3=relevantTags.length;i3<l3;i3++) {
				var tag = relevantTags[i3];

				App.dimension_tag.filter(tag.key);
				var activities = App.dimension_tag.top(Infinity);
				activities = activities.map(function(rawActivity) {
					return App.Activity.create({
						kind: kind,
						data: rawActivity
					});
				})
				if (activities.length <= 5 && tag.key === 'scheduled_for') { // Group activities of more than 5 of the same in the datebook section
					day.get('datebookGroups').pushObjects(activities);
				} else {
					var group = App.Group.create({
						tag: tag.key,
						kind: kind,
						_activities: activities
					});

					if (tag.key === 'scheduled_for') {
						day.get('datebookGroups').pushObject(group);
					} else {
						day.get('historicalGroups').pushObject(group);
					}
				}
			}

		}
	}
	App.dimension_tag.filterAll(); // Undo from the loop
	App.dimension_kind.filterAll(); // Undo from the loop
	App.dimension_timestamp.filterAll(); // Undo from the loop
};

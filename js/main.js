App.ready = function main() {
	App.initialize();

	App.crossfilter = crossfilter(window.TEST_FEED);

	App.dimension_kind = App.crossfilter.dimension(function(d){return d.kind;});
	var kinds = [];
	App.dimension_kind.group().top(Infinity).forEach(function(kind) { // top infinity sorts by the count of that type
		kinds.pushObject(App.Kind.create({
			kind: kind.key.split('_').map(function(p){return Em.String.classify(p);}).join(' ').replace('Sms','SMS')
		}));
	});
	App.getPath('router.kindsController').set('content', kinds);

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

};

App.ready = function main() {
	App.initialize();

	for (var i=0,l=window.TEST_FEED.length;i<l;i++) {
		var entry = window.TEST_FEED[i];
		entry.timestamp_ms = Date.parse(entry.timestamp);
	}

	App.crossfilter = crossfilter(window.TEST_FEED);

	App.dimension_kind = App.crossfilter.dimension(function(d){return d.kind;});
	var kinds = [];
	App.dimension_kind.group().top(Infinity).forEach(function(kind) { // top infinity sorts by the count of that type
		kinds.pushObject(App.Kind.create({
			kind: kind.key.split('_').map(function(p){return Em.String.classify(p);}).join(' ').replace('Sms','SMS')
		}));
	});
	App.getPath('router.kindsController').set('content', kinds);

	App.dimension_timestamp_ms = App.crossfilter.dimension(function(d){return d.timestamp_ms;});
	App.group_timestamp_ms_by_day = App.dimension_timestamp_ms.group(function(timestamp_ms) {
		var date = new Date();
		date.setTime(timestamp_ms);

		var year = date.getFullYear()+'';
		var month = date.getMonth()+1+'';
		if (month.length==1) month = '0'+month;
		var date = date.getDate()+'';
		if (date.length==1) date = '0'+date;
		return year+'-'+month+'-'+date;
	});
	var days = [];
	App.group_timestamp_ms_by_day.all().forEach(function(day) {
		days.pushObject(App.Day.create({
			day: day.key
		}));
	});
	App.getPath('router.daysController').set('content',days);

};

App.DayView = Em.View.extend({
	selectedKindBinding: 'App.router.kindsController.selection',

	filteredDatebookGroups: function() {
		var selectedKind = this.get('selectedKind');

		if (!selectedKind) return this.getPath('context.datebookGroups');
		debugger;
		return this.getPath('context.datebookGroups').filter(function(g){return g.get('kind') === selectedKind;});
	}.property('context.datebookGroups', 'selectedKind'),
	filteredHistoricalGroups: function() {
		var selectedKind = this.get('selectedKind');

		if (!selectedKind) return this.getPath('context.historicalGroups');
		return this.getPath('context.historicalGroups').filter(function(g){return g.get('kind') === selectedKind;});
	}.property('context.historicalGroups', 'selectedKind'),

	shouldShow: function() {
		return this.getPath('filteredDatebookGroups.length') || this.getPath('filteredHistoricalGroups.length');
	}.property('filteredDatebookGroups.length', 'filteredHistoricalGroups.length'),

	templateName: 'day'
});
App.Day = Em.Object.extend({
	_datebookGroups: null,
	datebookGroups: function(k,v) {
		if (v!==undefined) {
			this._datebookGroups = v;
		}
		if (!this._datebookGroups) this._datebookGroups = [];
		return this._datebookGroups;
	}.property(),
	_historicalGroups: null,
	historicalGroups: function(k,v) {
		if (v!==undefined) {
			this._historicalGroups = v;
		}
		if (!this._historicalGroups) this._historicalGroups = [];
		return this._historicalGroups;
	}.property(),
	day: null // String
});
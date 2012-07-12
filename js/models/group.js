App.Group = Em.Object.extend({
	tag: null, // String
	kind: null, // App.Kind
	_activities: null,
	activities: function(k,v) { // Array of App.Activity
		if (v!==undefined) {
			this._activities=v;
		}
		if (!this._activities) this._activities = [];
		return this._activities;
	}.property()
});
App.GROUP_EXPANDABLE = 2; // Changing this currently would require refactoring how these are rendered in the template

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
	}.property(),

	isExpandable: function() {
		return this.get('tag') === 'scheduled_for' && this.getPath('activities.length') >= App.GROUP_EXPANDABLE;
	}.property('tag','activities.length'),

	formattedTitle: function() {
		var tag = this.get('tag'), kind = this.get('kind'), activities = this.get('activities');
		var count = activities.get('length');

		if (tag === 'scheduled_for') {
			if (count < App.GROUP_EXPANDABLE) {
				var activity = activities[0];
				return activity.get('formattedTitle');
			} else {
				return "%@1 %@2".loc(count, (count===1)?kind.get('formattedKind'):kind.get('formattedKindPlural'));
			}
		} else {
			return "%@1 %@2 %@3".loc(count, (count===1)?kind.get('formattedKind'):kind.get('formattedKindPlural'), tag.split('_').join(' '));
		}
	}.property('tag','kind','activities')
});
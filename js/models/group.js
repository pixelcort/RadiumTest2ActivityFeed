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
				switch (kind.get('kind')) {
					case 'campaign': return "Complete \"%@1\"Campaign".loc(activity.reference.campaign.name);
					case 'call_list':
						var length = activity.reference.call_list.users.length;
						return (length===1)?"Call 1 User".loc():"Call %@1 Users".loc(length);
					case 'todo': return "Complete TODO: %@1".loc(activity.reference.todo.description);
					case 'deal': return "Close the \"%@1\" Deal".loc(activity.reference.deal.name);
					case 'meeting': return "Attend Meeting about %@1".loc(activity.reference.meeting.topic);
					default:
						Em.warn("Unknown Kind: %@1".fmt(kind.get('kind')));
						return "Unknown";
					}
			} else {
				return "Expandable: %@1 %@2".loc(count, (count===1)?kind.get('formattedKind'):kind.get('formattedKindPlural'));
			}
		} else {
			return "%@1 %@2 %@3".loc(count, (count===1)?kind.get('formattedKind'):kind.get('formattedKindPlural'), tag.split('_').join(' '));
		}
	}.property('tag','kind','activities')
});
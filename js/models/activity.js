App.Activity = Em.Object.extend({
	kind: null, // App.Kind
	formattedTitle: function() {
		var activity = this.get('data');
		switch (this.getPath('kind.kind')) {
			case 'campaign': return "Complete \"%@1\"Campaign".loc(activity.reference.campaign.name);
			case 'call_list':
				var length = activity.reference.call_list.users.length;
				return (length===1)?"Call 1 User".loc():"Call %@1 Users".loc(length);
			case 'todo': return "Complete TODO: %@1".loc(activity.reference.todo.description);
			case 'deal': return "Close the \"%@1\" Deal".loc(activity.reference.deal.name);
			case 'meeting': return "Attend Meeting about %@1".loc(activity.reference.meeting.topic);
			default:
				debugger;
				Em.warn("Unknown Kind: %@1".fmt(this.get('kind')));
				return "Unknown";
			}
	}.property('data','kind'),
	data: null // Object
});
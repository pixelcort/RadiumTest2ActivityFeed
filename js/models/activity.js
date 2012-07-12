App.Activity = Em.Object.extend({
	kind: null, // App.Kind
	icon: function() {
		switch (this.getPath('kind.kind')) {
			case 'campaign': return 'icon-flag';
			case 'call_list': return 'icon-th-list';
			case 'todo': return 'icon-ok';
			case 'deal': return 'icon-tag';
			case 'meeting': return 'icon-flag';
			default:
				Em.warn("Unknown Kind: %@1".fmt(this.get('kind')));
				return 'icon-question-sign';
		}
	}.property('kind'),
	formattedTitle: function() {
		var activity = this.get('data');
		switch (this.getPath('kind.kind')) {
			case 'campaign': return "Complete \"%@1\"Campaign".loc(activity.reference.campaign.name);
			case 'call_list':
				var length = activity.reference.call_list.users.length;
				return (length===1)?"Call 1 User".loc():"Call %@1 Users".loc(length);
			case 'todo': return "Complete the \"%@1\" todo".loc(activity.reference.todo.description);
			case 'deal': return "Close the \"%@1\" deal".loc(activity.reference.deal.name);
			case 'meeting': return "Attend meeting about %@1".loc(activity.reference.meeting.topic);
			default:
				Em.warn("Unknown Kind: %@1".fmt(this.get('kind')));
				return "Unknown";
			}
	}.property('data','kind'),
	data: null // Object
});
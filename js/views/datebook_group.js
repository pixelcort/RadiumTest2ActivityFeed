App.DatebookGroupView = Em.View.extend({

	isExpanded: false,
	click: function() {
		this.set('isExpanded', !this.get('isExpanded'));
	},

	templateName: 'group'
});

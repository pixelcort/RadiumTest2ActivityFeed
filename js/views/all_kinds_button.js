App.AllKindsButtonView = App.KindButtonView.extend({
	click: function() {
		App.getPath('router.kindsController').set('selection', null);
	},
	template: Em.Handlebars.compile("All".loc())
});

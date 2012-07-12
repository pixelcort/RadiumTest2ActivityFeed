App.KindButtonView = Bootstrap.Button.extend({
	click: function(event) {
		var kind = this.get('content');
		App.getPath('router.kindsController').set('selection', kind);
	},
  tagName: 'a',
  template: Em.Handlebars.compile('{{view.content.formattedKindPluralTitleized}}')
});
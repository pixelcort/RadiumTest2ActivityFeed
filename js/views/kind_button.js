App.KindButtonView = Bootstrap.Button.extend({
  tagName: 'a',
  template: Em.Handlebars.compile('{{view.content.formattedKindPluralTitleized}}')
});
App.Kind = Em.Object.extend({
	formattedKind: function() {
		var kind = this.get('kind');
		return kind.split('_').join(' ').replace('sms','SMS');
	}.property('kind'),
	formattedKindPlural: function() {
		if (this.get('formattedKind') === 'SMS') return 'SMS messages';
		return this.get('formattedKind')+'s';
	}.property('formattedKind'),
	formattedKindPluralTitleized: function() {
		return this.get('formattedKindPlural').split(' ').map(function(p){return Em.String.classify(p);}).join(' ');
	}.property('formattedKindPlural'),
	kind: null // String
	
});

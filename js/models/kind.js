App.Kind = Em.Object.extend({
	formattedKind: function() {
		var kind = this.get('kind');
		return kind.split('_').map(function(p){return Em.String.classify(p);}).join(' ').replace('Sms','SMS');
	}.property('kind'),
	kind: null // String
	
});

var App = Em.Application.create();

App.Router = Em.Router.extend({ // initialize will instantiate singleton for us
    root: Ember.Route.extend({})
});

App.GROUP_EXPANDABLE = 5;

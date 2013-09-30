var IndexRoute = Ember.Route.extend({
  redirect: function() {
    var ref = this.controllerFor('application').get('ref');
    this.transitionTo(ref.path);
  }
});

export default IndexRoute;

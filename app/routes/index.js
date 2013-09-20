var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/ujforditas/01/002');
  }
});

export default IndexRoute;

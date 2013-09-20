var IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('chapter', 'ujforditas_19023');
  }
});

export default IndexRoute;

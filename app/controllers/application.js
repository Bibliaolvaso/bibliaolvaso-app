var ApplicationController = Ember.Controller.extend({
  ref: Reference.resolve('ujforditas', '1Móz 1'),

  abbr: function(key, value, oldValue) {
    return this.get('ref').abbr;
  }.property('ref'),

  actions: {
    query: function(value) {
      var ref = this.get('ref'),
          newRef = Reference.resolve(ref.bible, value);

      if (newRef) {
        if (newRef.path !== ref.path) {
          this.transitionToRoute(newRef.path);
        }
      } else {
        // reset to original abbr
        this.notifyPropertyChange('ref');
      }
    }
  }
});

export default ApplicationController;

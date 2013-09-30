var ApplicationController = Ember.Controller.extend({
  ref: Reference.resolve('ujforditas', '1Móz 1'),

  abbr: function() {
    return this.get('ref').abbr;
  }.property('ref'),

  previousChapterPath: function() {
    var prev = this.get('ref').previousChapter();
    return prev && prev.path;
  }.property('ref'),

  noPreviousChapter: function() {
    return !this.get('previousChapterPath');
  }.property('previousChapterPath'),

  nextChapterPath: function() {
    var next = this.get('ref').nextChapter();
    return next && next.path;
  }.property('ref'),

  noNextChapter: function() {
    return !this.get('nextChapterPath');
  }.property('nextChapterPath'),

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
    },

    previousChapter: function() {
      var path = this.get('previousChapterPath');
      if (path) this.transitionToRoute(path);
    },

    nextChapter: function() {
      var path = this.get('nextChapterPath');
      if (path) this.transitionToRoute(path);
    }
  }
});

export default ApplicationController;

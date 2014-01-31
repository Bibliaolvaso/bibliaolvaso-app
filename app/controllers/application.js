var ApplicationController = Ember.Controller.extend({
  translations: [
    { id: 'ujforditas', title: 'Új fordítás', copyright: "Az 1975-ben megjelent, 1990-ben revideált új fordítású Biblia szövege. Felhasználása a Magyar Bibliatársulat engedélyével." },
    { id: 'karoli', title: 'Károli', copyright: "Károli Gáspár 1590-ben megjelent fordításának 1908-ban revideált változata." }
  ],
  ref: Reference.resolve('ujforditas', '1Móz 1'),

  translation: '',
  abbr: '',

  translationChanged: function() {
    this.send('query', this.get('abbr'));
  }.observes('translation'),

  translationCopyright: function() {
    var trId = this.get('translation'),
        translations = this.get('translations');
    for (var i = 0, _l = translations.length; i < _l; i++) {
      var translation = translations[i];
      if (translation.id === trId) {
        return translation.copyright;
      }
    }
  }.property('translation'),

  refChanged: function() {
    var ref = this.get('ref');
    this.set('translation', ref.bible);
    this.set('abbr', ref.abbr);
  }.observes('ref'),

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

  currentYear: new Date().getFullYear(),

  actions: {
    query: function(value) {
      var ref = this.get('ref'),
          translation = this.get('translation'),
          newRef = Reference.resolve(translation, value);

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

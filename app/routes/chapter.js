var ChapterRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    var params = transition.params,
        translation = params.translation, book = params.book, chapter = params.chapter,
        abbr = book + ' ' + chapter,
        path = '/' + [translation, book, chapter].join('/'),
        ref = Reference.resolve(translation, abbr);

    if (ref) {
      if (ref.path !== path) {
        transition.abort();
        this.transitionTo(ref.path);
      } else {
        this.controllerFor('application').set('ref', ref);
      }
    } else {
      throw new Error("Chapter not found: " + path);
    }
  },

  model: function(params) {
    var ref = this.controllerFor('application').get('ref');
    return this.store.find('chapter', ref.chapter_id);
  },

  serialize: function(model) {
    var ref = Reference.resolve(model.get('translation_id'), model.get('abbr'));
    return {
      translation: ref.bible,
      book: ref.book.slugs[0],
      chapter: ref.chapter
    };
  }

});

export default ChapterRoute;

var ChapterRoute = Ember.Route.extend({

  beforeModel: function(transition) {
    var params = transition.params,
        bible = params.bible, book = params.book, chapter = params.chapter,
        abbr = book + ' ' + chapter,
        path = '/' + [bible, book, chapter].join('/'),
        ref = Reference.resolve(bible, abbr);

    if (ref) {
      if (ref.path !== path) {
        transition.abort();
        this.transitionTo(ref.path);
      }
    } else {
      throw new Error("Chapter not found: " + path);
    }
  },

  model: function(params) {
    var ref = Reference.resolve(params.bible, params.book + ' ' + params.chapter);
    return this.store.find('chapter', ref.chapter_id);
  },

  serialize: function(model) {
    var ref = Reference.resolve(model.get('bible'), model.get('abbr'));
    return {
      bible: ref.bible,
      book: ref.book.slugs[0],
      chapter: ref.chapter
    };
  }

});

export default ChapterRoute;

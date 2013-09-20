var ChapterRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('chapter', params.bible + '_' + params.book + params.chapter);
  }
});

export default ChapterRoute;

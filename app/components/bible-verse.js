var BibleVerseComponent = Ember.Component.extend({
  classNames: ['verse'],

  isTitleInMiddle: function() {
    return this.get('text').indexOf('<title>') != -1;
  }.property('text'),

  textBeforeTitle: function() {
    return this.get('text').split('<title>')[0];
  }.property('text'),

  textAfterTitle: function() {
    return this.get('text').split('<title>')[1];
  }.property('text')
});

export default BibleVerseComponent;

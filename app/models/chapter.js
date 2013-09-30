var attr = DS.attr;

var Chapter = DS.Model.extend({
  translation_id: attr('string'),
  book_title: attr('string'),
  n: attr('number'),
  abbr: attr('string'),
  verses: attr()
});

export default Chapter;

var router = Ember.Router.map(function(){
  this.route('chapter', { path: '/:bible/:book/:chapter' });
});

export default router;

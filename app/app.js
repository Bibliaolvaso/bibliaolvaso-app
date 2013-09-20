import Resolver from 'resolver';
import router from 'bibliaolvaso/router';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'bibliaolvaso',
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

export default App;

import Resolver from 'resolver';
import routerMap from 'bibliaolvaso/router';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_TRANSITIONS: true,
  modulePrefix: 'bibliaolvaso',
  Resolver: Resolver
});

App.Router.map(routerMap);

App.Router.reopen({
  location: 'history'
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

export default App;

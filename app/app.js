import Resolver from 'resolver';
import routerMap from 'bibliaolvaso/router';

var App = Ember.Application.create({
  //LOG_STACKTRACE_ON_DEPRECATION: true,
  //LOG_BINDINGS:                  true,
  LOG_TRANSITIONS:               true,
  //LOG_TRANSITIONS_INTERNAL:      false,
  LOG_VIEW_LOOKUPS:              true,
  LOG_ACTIVE_GENERATION:         true,
  modulePrefix:                  'bibliaolvaso',
  Resolver:                      Resolver
});

App.Router.map(routerMap);

App.Router.reopen({
  location: 'history'
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: typeof DIST === 'undefined' ? 'http://' + location.hostname.replace('bibliaolvaso', 'bibliaolvaso-api') : 'http://api.bibliaolvaso.hu'
});

export default App;

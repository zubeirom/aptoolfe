'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'aptoolfe',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-google-maps'] = {
    key: 'AIzaSyAwH4Tq9WrHY3LtgO9rElgg4MI9i8Tmhao'
  }


  if (environment === 'development') {
    ENV.host = 'http://localhost:3000'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'http://localhost:3000/api/token',
      routeAfterAuthentication: 'applications'
    };
  }

  if (environment === 'test') {
    ENV.host = 'https://api-aptool.herokuapp.com'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'https://api-aptool.herokuapp.com/api/token',
      routeAfterAuthentication: 'applications'
    };
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};

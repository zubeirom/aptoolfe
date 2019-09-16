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
    },

    LI_CLIENT_ID: process.env.LI_CLIENT_ID,
    LI_CLIENT_SECRET: process.env.LI_CLIENT_SECRET
  };

  ENV['ember-google-maps'] = {
    key: process.env.G_MAPS_API_KEY
  }

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': '\'self\' http://localhost:4200'
    }
    ENV.host = 'https://aptoolapi.herokuapp.com'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'https://aptoolapi.herokuapp.com/api/token',
      routeAfterAuthentication: 'applications'
    };
  }

  if (environment === 'test') {
    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': '\'self\' https://aptoolapi.herokuapp.com'
    }
    ENV.host = 'https://aptoolapi.herokuapp.com'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'https://aptoolapi.herokuapp.com/api/token',
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
    ENV.contentSecurityPolicy = {
      // ... other stuff here
      'connect-src': '\'self\' https://aptoolapi.herokuapp.com'
    }
    ENV.host = 'https://aptoolapi.herokuapp.com'
    ENV['ember-simple-auth'] = {
      serverTokenEndpoint: 'https://aptoolapi.herokuapp.com/api/token',
      routeAfterAuthentication: 'applications'
    };
    // here you can enable a production-specific feature
  }

  return ENV;
};

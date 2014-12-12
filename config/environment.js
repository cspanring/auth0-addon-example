/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'auth0-addon-example',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'ember-cli-auth0-lock': {
      cid: 'nu8KrtMcxWg9Ohh38TyUbn7lYmJkOwA8',
      domain: 'cspanring.auth0.com'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'font-src': "'self' data: fonts.gstatic.com cdn.auth0.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'script-src': "'self' 'unsafe-eval' *.auth0.com",
      'img-src': '*.gravatar.com *.wp.com *.githubusercontent.com',
      'connect-src': "'self' *.auth0.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-auth0-lock'].logoutUrl = 'http://localhost:4200/logout';

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-auth0-lock'].logoutUrl = 'http://ember-cli-auth0-lock.divshot.io/logout';
  }

  return ENV;
};

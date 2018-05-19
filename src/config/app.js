import {PLATFORM} from 'aurelia-pal';

export default {
  app: {
    title      : 'My SpoonX application',
    environment: 'development',
  },

  /* @see http://aurelia-api.spoonx.org/configuration.html */
  'aurelia-api': {
    endpoints: [
      {
        name    : 'api',                    // The name by which you reference this endpoint
        endpoint: 'http://127.0.0.1:1337/', // The URL for this endpoint (defaults to current url)
        // config  : {},                       // Use config for defaults (like headers).
        default : true                      // Set this to the default endpoint (defaults to false)
      },
      {
        name    : 'auth',                   // The name by which you reference this endpoint
        endpoint: 'http://127.0.0.1:1337/', // The URL for this endpoint (defaults to current url)
        // config  : {},                       // Use config for defaults (like headers).
      }
    ],
  },

  /* i18n */
  defaultLocale: {
    language: 'en',   // Used for translations from i18n.
    locale  : 'en-US' // Used by validator. e.g. nl-NL
  },

  /* @see https://github.com/SpoonX/aurelia-notification */
  'aurelia-notification': {
    notifications: {
      success: 'humane-jackedup-success',
      error  : 'humane-jackedup-error',
      info   : 'humane-jackedup-info'
    }
  },

  /* @see https://github.com/spoonx/aurelia-view-manager */
  'aurelia-view-manager': {
    'spoonx/datatable': {
      location: PLATFORM.moduleName('customViews/datatable.html')
    },
    'spoonx/form': {
      map: {
        checkboxes: PLATFORM.moduleName('customViews/checkbox.html')
      }
    }
  },

  /* @see http://aurelia-charts.spoonx.org/configuration.html */
  'aurelia-charts': {
    defaults: {
      library: 'C3'
    }
  }
};

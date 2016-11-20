/**
 * This file gets copied into place on bundle.
 * This will become local.js in production.
 *
 * NOTE: Make sure this file is altered as needed.
 */
export default {
  app: {
    // The environment we're running in.
    environment: '{{environment}}', // Automatically set based on deploy context.
  },
  'aurelia-api': {
    endpoints: [
      {
        name    : 'api',        // The name by which you reference this endpoint
        endpoint: '{{apiUrl}}', // The URL for this endpoint (defaults to current url)
        default : true          // Set this to the default endpoint (defaults to false)
      },
      {
        name    : 'auth',       // The name by which you reference this endpoint
        endpoint: '{{apiUrl}}', // The URL for this endpoint (defaults to current url)
      }
    ]
  }
};

// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include c3.css
      'c3', [
        '/c3.min.css'
      ]
    ], [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      // include bluebird polyfills
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};

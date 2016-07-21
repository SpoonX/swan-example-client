module.exports = {
  "bundles": {
    "scripts/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject":   true,
        "minify":   true,
        "depCache": true,
        "rev":      false
      }
    },
   "scripts/vendor": {
      "includes": [
        "aurelia-orm/**/*.html!text",
        "aurelia-datatable/**/*.html!text",
        "aurelia-form/**/*.html!text",
        "aurelia-pager/**/*.html!text",
        "humane-js/themes/jackedup.css!text",
        "aurelia-api",
        "aurelia-authentication",
        "aurelia-datatable",
        "[aurelia-datatable/**/*.js]",
        "aurelia-dependency-injection",
        "aurelia-fetch-client",
        "aurelia-form",
        "[aurelia-form/**/*.js]",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-polyfills",
        "aurelia-history-browser",
        "aurelia-i18n",
        "aurelia-logging-console",
        "aurelia-notification",
        "aurelia-orm",
        "aurelia-pager",
        "[aurelia-pager/**/*.js]",
        "aurelia-pal",
        "aurelia-pal-browser",
        "aurelia-polyfills",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-validation",
        "aurelia-loader",
        "aurelia-loader-default",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "jquery",
        "i18next-xhr-backend"
      ],
      "options":  {
        "inject":   true,
        "minify":   true,
        "depCache": false,
        "rev":      false
      }
    }
  }
};

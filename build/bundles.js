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
        "aurelia-api",
        "aurelia-authentication",
        "[aurelia-authentication/**/*.js]",
        "aurelia-datatable",
        "[aurelia-datatable/**/*.js]",
        "aurelia-datatable/**/*.html!text",
        "aurelia-dependency-injection",
        "aurelia-fetch-client",
        "aurelia-filter",
        "[aurelia-filter/**/*.js]",
        "aurelia-form",
        "[aurelia-form/**/*.js]",
        "aurelia-form/**/*.html!text",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-polyfills",
        "aurelia-history-browser",
        "aurelia-i18n",
        "aurelia-loader",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-notification",
        "aurelia-orm",
        "[aurelia-orm/**/*.js]",
        "aurelia-orm/**/*.html!text",
        "aurelia-pager",
        "[aurelia-pager/**/*.js]",
        "aurelia-pager/**/*.html!text",
        "aurelia-pal",
        "aurelia-pal-browser",
        "aurelia-polyfills",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-validation",
        "aurelia-view-manager",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "humane-js/themes/jackedup.css!text",
        "i18next-xhr-backend",
        "homefront",
        "get-prop",
        "jquery",
        "moment",
        "text"
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

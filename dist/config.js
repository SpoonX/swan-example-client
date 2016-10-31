System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "scripts/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-api": "npm:aurelia-api@3.0.0",
    "aurelia-authentication": "npm:aurelia-authentication@3.0.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.9",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-datatable": "npm:aurelia-datatable@0.1.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-filter": "npm:aurelia-filter@1.0.1",
    "aurelia-form": "npm:aurelia-form@0.3.0",
    "aurelia-form-renderer-bootstrap": "npm:aurelia-form-renderer-bootstrap@0.0.2",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-i18n": "npm:aurelia-i18n@1.1.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-notification": "npm:aurelia-notification@1.0.0",
    "aurelia-orm": "npm:aurelia-orm@3.0.0",
    "aurelia-pager": "npm:aurelia-pager@0.1.0",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-templating": "npm:aurelia-templating@1.1.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "aurelia-validation": "npm:aurelia-validation@0.13.1",
    "aurelia-view-manager": "npm:aurelia-view-manager@0.1.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "extend": "npm:extend@3.0.0",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "get-prop": "npm:get-prop@0.0.10",
    "homefront": "npm:homefront@1.2.3",
    "humane-js": "npm:humane-js@3.2.2",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@0.6.0",
    "jquery": "npm:jquery@2.2.4",
    "moment": "npm:moment@2.15.1",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-api@3.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "extend": "npm:extend@3.0.0"
    },
    "npm:aurelia-authentication@3.0.0": {
      "aurelia-api": "npm:aurelia-api@3.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "extend": "npm:extend@3.0.0",
      "jwt-decode": "npm:jwt-decode@2.1.0"
    },
    "npm:aurelia-binding@1.0.9": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-datatable@0.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-orm": "npm:aurelia-orm@3.0.0",
      "aurelia-pager": "npm:aurelia-pager@0.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.0",
      "homefront": "npm:homefront@1.2.3",
      "typer": "npm:typer@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.1.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-filter@1.0.1": {
      "aurelia-form": "npm:aurelia-form@0.3.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.0",
      "extend": "npm:extend@3.0.0"
    },
    "npm:aurelia-form@0.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-validatejs": "npm:aurelia-validatejs@0.7.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.0",
      "extend": "npm:extend@3.0.0"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-i18n@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "i18next": "npm:i18next@3.4.3",
      "intl": "npm:intl@1.2.5"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-metadata@1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-notification@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-i18n": "npm:aurelia-i18n@1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "extend": "npm:extend@3.0.0",
      "humane-js": "npm:humane-js@3.2.2"
    },
    "npm:aurelia-orm@3.0.0": {
      "aurelia-api": "npm:aurelia-api@3.0.0",
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-validation": "npm:aurelia-validation@0.13.1",
      "get-prop": "npm:get-prop@0.0.10",
      "typer": "npm:typer@1.1.0"
    },
    "npm:aurelia-pager@0.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-templating@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-validatejs@0.7.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-validation": "npm:aurelia-validation@0.11.0",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:aurelia-validation@0.11.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-validation@0.13.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.1"
    },
    "npm:aurelia-view-manager@0.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.1.1",
      "extend": "npm:extend@3.0.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.30"
    },
    "npm:homefront@1.2.3": {
      "extend": "npm:extend@3.0.0"
    },
    "npm:i18next@3.4.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jwt-decode@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "app.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-authentication"
    ],
    "component/value-converters/date-format.js": [
      "moment"
    ],
    "config/entities.js": [
      "entity/list",
      "entity/todo"
    ],
    "entity/list.js": [
      "aurelia-orm",
      "aurelia-validation",
      "aurelia-binding"
    ],
    "entity/todo.js": [
      "aurelia-orm",
      "aurelia-validation",
      "aurelia-binding"
    ],
    "main.js": [
      "config/routes",
      "config/app",
      "config/auth",
      "config/entities",
      "i18next-xhr-backend",
      "aurelia-router",
      "aurelia-authentication",
      "bootstrap",
      "fetch"
    ],
    "page/association-select/demo.js": [
      "aurelia-dependency-injection",
      "aurelia-orm"
    ],
    "page/auth/login.js": [
      "aurelia-dependency-injection",
      "aurelia-authentication",
      "aurelia-notification"
    ],
    "page/auth/logout.js": [
      "aurelia-authentication",
      "aurelia-dependency-injection"
    ],
    "page/datatable/demo.js": [
      "aurelia-dependency-injection",
      "aurelia-orm"
    ],
    "page/form/demo.js": [
      "aurelia-framework",
      "aurelia-orm"
    ],
    "page/paged/demo.js": [
      "aurelia-dependency-injection",
      "aurelia-orm"
    ],
    "page/pager/demo.js": [
      "aurelia-dependency-injection",
      "aurelia-orm"
    ],
    "page/todo/create-list.js": [
      "aurelia-dependency-injection",
      "aurelia-orm",
      "aurelia-router",
      "aurelia-notification",
      "aurelia-validation",
      "aurelia-form-renderer-bootstrap"
    ],
    "page/todo/list.js": [
      "aurelia-dependency-injection",
      "aurelia-orm",
      "aurelia-notification",
      "aurelia-validation"
    ]
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "component/core/nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "component/value-converters/date-format.js",
      "config/app.js",
      "config/auth.js",
      "config/entities.js",
      "config/routes.js",
      "entity/list.js",
      "entity/todo.js",
      "main.js",
      "page/association-select/demo.html!github:systemjs/plugin-text@0.0.8.js",
      "page/association-select/demo.js",
      "page/auth/login.html!github:systemjs/plugin-text@0.0.8.js",
      "page/auth/login.js",
      "page/auth/logout.html!github:systemjs/plugin-text@0.0.8.js",
      "page/auth/logout.js",
      "page/datatable/demo.html!github:systemjs/plugin-text@0.0.8.js",
      "page/datatable/demo.js",
      "page/form/demo.html!github:systemjs/plugin-text@0.0.8.js",
      "page/form/demo.js",
      "page/index.html!github:systemjs/plugin-text@0.0.8.js",
      "page/index.js",
      "page/paged/demo.html!github:systemjs/plugin-text@0.0.8.js",
      "page/paged/demo.js",
      "page/pager/demo.html!github:systemjs/plugin-text@0.0.8.js",
      "page/pager/demo.js",
      "page/todo/create-list.html!github:systemjs/plugin-text@0.0.8.js",
      "page/todo/create-list.js",
      "page/todo/list.html!github:systemjs/plugin-text@0.0.8.js",
      "page/todo/list.js"
    ],
    "vendor.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-api@3.0.0.js",
      "npm:aurelia-api@3.0.0/aurelia-api.js",
      "npm:aurelia-authentication@3.0.0.js",
      "npm:aurelia-authentication@3.0.0/aurelia-authentication.js",
      "npm:aurelia-authentication@3.0.0/authFilterValueConverter.js",
      "npm:aurelia-authentication@3.0.0/authenticatedFilterValueConverter.js",
      "npm:aurelia-authentication@3.0.0/authenticatedValueConverter.js",
      "npm:aurelia-authentication@3.0.0/index.js",
      "npm:aurelia-binding@1.0.9.js",
      "npm:aurelia-binding@1.0.9/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-datatable@0.1.1.js",
      "npm:aurelia-datatable@0.1.1/aurelia-datatable.js",
      "npm:aurelia-datatable@0.1.1/bootstrap/datatable.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-datatable@0.1.1/columns-filter.js",
      "npm:aurelia-datatable@0.1.1/convert-manager.js",
      "npm:aurelia-datatable@0.1.1/datatable.js",
      "npm:aurelia-datatable@0.1.1/index.js",
      "npm:aurelia-dependency-injection@1.1.0.js",
      "npm:aurelia-dependency-injection@1.1.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-filter@1.0.1.js",
      "npm:aurelia-filter@1.0.1/aurelia-filter.js",
      "npm:aurelia-filter@1.0.1/criteriaBuilder.js",
      "npm:aurelia-filter@1.0.1/filter.js",
      "npm:aurelia-filter@1.0.1/index.js",
      "npm:aurelia-form-renderer-bootstrap@0.0.2.js",
      "npm:aurelia-form-renderer-bootstrap@0.0.2/aurelia-form-renderer-bootstrap.js",
      "npm:aurelia-form@0.3.0.js",
      "npm:aurelia-form@0.3.0/attributes.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/attributes.js",
      "npm:aurelia-form@0.3.0/aurelia-form.js",
      "npm:aurelia-form@0.3.0/component/entity-form.js",
      "npm:aurelia-form@0.3.0/component/form-field.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/form-field.js",
      "npm:aurelia-form@0.3.0/component/form-fields.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/form-fields.js",
      "npm:aurelia-form@0.3.0/component/framework/actions.js",
      "npm:aurelia-form@0.3.0/component/framework/association.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/actions.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/actions.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/association.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/association.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/checkboxes.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/checkboxes.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/collection.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/conditional.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/conditional.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/fieldset.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/file.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/form-group.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/form-group.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/input.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/radios.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/radios.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/select.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/select.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/submit.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/bootstrap/textarea.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/framework/collection.js",
      "npm:aurelia-form@0.3.0/component/framework/conditional.js",
      "npm:aurelia-form@0.3.0/component/framework/form-group.js",
      "npm:aurelia-form@0.3.0/component/framework/options.js",
      "npm:aurelia-form@0.3.0/component/schema-form.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-form@0.3.0/component/schema-form.js",
      "npm:aurelia-form@0.3.0/config.js",
      "npm:aurelia-form@0.3.0/converter/normalizeOptions.js",
      "npm:aurelia-form@0.3.0/entity-schema.js",
      "npm:aurelia-form@0.3.0/form.js",
      "npm:aurelia-form@0.3.0/index.js",
      "npm:aurelia-form@0.3.0/logger.js",
      "npm:aurelia-form@0.3.0/utils.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-i18n@1.1.2.js",
      "npm:aurelia-i18n@1.1.2/aurelia-i18n.js",
      "npm:aurelia-i18n@1.1.2/base-i18n.js",
      "npm:aurelia-i18n@1.1.2/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@1.1.2/df.js",
      "npm:aurelia-i18n@1.1.2/i18n.js",
      "npm:aurelia-i18n@1.1.2/nf.js",
      "npm:aurelia-i18n@1.1.2/relativeTime.js",
      "npm:aurelia-i18n@1.1.2/rt.js",
      "npm:aurelia-i18n@1.1.2/t.js",
      "npm:aurelia-i18n@1.1.2/utils.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0.js",
      "npm:aurelia-logging@1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.1.js",
      "npm:aurelia-metadata@1.0.1/aurelia-metadata.js",
      "npm:aurelia-notification@1.0.0.js",
      "npm:aurelia-notification@1.0.0/aurelia-notification.js",
      "npm:aurelia-orm@3.0.0.js",
      "npm:aurelia-orm@3.0.0/aurelia-orm.js",
      "npm:aurelia-orm@3.0.0/component/association-select.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-orm@3.0.0/component/association-select.js",
      "npm:aurelia-orm@3.0.0/component/paged.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-orm@3.0.0/component/paged.js",
      "npm:aurelia-orm@3.0.0/index.js",
      "npm:aurelia-pager@0.1.0.js",
      "npm:aurelia-pager@0.1.0/aurelia-pager.js",
      "npm:aurelia-pager@0.1.0/bootstrap/pager.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-pager@0.1.0/index.js",
      "npm:aurelia-pager@0.1.0/pager.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.6.js",
      "npm:aurelia-router@1.0.6/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.1.1.js",
      "npm:aurelia-templating@1.1.1/aurelia-templating.js",
      "npm:aurelia-validatejs@0.7.0.js",
      "npm:aurelia-validatejs@0.7.0/aurelia-validatejs.js",
      "npm:aurelia-validation@0.11.0.js",
      "npm:aurelia-validation@0.11.0/aurelia-validation.js",
      "npm:aurelia-validation@0.11.0/property-info.js",
      "npm:aurelia-validation@0.11.0/validate-binding-behavior.js",
      "npm:aurelia-validation@0.11.0/validate-trigger.js",
      "npm:aurelia-validation@0.11.0/validation-controller.js",
      "npm:aurelia-validation@0.11.0/validation-error.js",
      "npm:aurelia-validation@0.11.0/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@0.11.0/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@0.11.0/validation-renderer.js",
      "npm:aurelia-validation@0.11.0/validator.js",
      "npm:aurelia-validation@0.13.1.js",
      "npm:aurelia-validation@0.13.1/aurelia-validation.js",
      "npm:aurelia-validation@0.13.1/implementation/rules.js",
      "npm:aurelia-validation@0.13.1/implementation/standard-validator.js",
      "npm:aurelia-validation@0.13.1/implementation/util.js",
      "npm:aurelia-validation@0.13.1/implementation/validation-messages.js",
      "npm:aurelia-validation@0.13.1/implementation/validation-parser.js",
      "npm:aurelia-validation@0.13.1/implementation/validation-rules.js",
      "npm:aurelia-validation@0.13.1/property-info.js",
      "npm:aurelia-validation@0.13.1/validate-binding-behavior-base.js",
      "npm:aurelia-validation@0.13.1/validate-binding-behavior.js",
      "npm:aurelia-validation@0.13.1/validate-trigger.js",
      "npm:aurelia-validation@0.13.1/validation-controller-factory.js",
      "npm:aurelia-validation@0.13.1/validation-controller.js",
      "npm:aurelia-validation@0.13.1/validation-error.js",
      "npm:aurelia-validation@0.13.1/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@0.13.1/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@0.13.1/validator.js",
      "npm:aurelia-view-manager@0.1.0.js",
      "npm:aurelia-view-manager@0.1.0/aurelia-view-manager.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:get-prop@0.0.10.js",
      "npm:get-prop@0.0.10/getprop.js",
      "npm:homefront@1.2.3.js",
      "npm:homefront@1.2.3/index.js",
      "npm:homefront@1.2.3/lib/expand.js",
      "npm:homefront@1.2.3/lib/flatten.js",
      "npm:homefront@1.2.3/lib/utils.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:humane-js@3.2.2/themes/jackedup.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:i18next-xhr-backend@0.6.0.js",
      "npm:i18next-xhr-backend@0.6.0/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@0.6.0/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@0.6.0/index.js",
      "npm:i18next@3.4.3.js",
      "npm:i18next@3.4.3/dist/commonjs/BackendConnector.js",
      "npm:i18next@3.4.3/dist/commonjs/CacheConnector.js",
      "npm:i18next@3.4.3/dist/commonjs/EventEmitter.js",
      "npm:i18next@3.4.3/dist/commonjs/Interpolator.js",
      "npm:i18next@3.4.3/dist/commonjs/LanguageUtils.js",
      "npm:i18next@3.4.3/dist/commonjs/PluralResolver.js",
      "npm:i18next@3.4.3/dist/commonjs/ResourceStore.js",
      "npm:i18next@3.4.3/dist/commonjs/Translator.js",
      "npm:i18next@3.4.3/dist/commonjs/compatibility/v1.js",
      "npm:i18next@3.4.3/dist/commonjs/defaults.js",
      "npm:i18next@3.4.3/dist/commonjs/i18next.js",
      "npm:i18next@3.4.3/dist/commonjs/index.js",
      "npm:i18next@3.4.3/dist/commonjs/logger.js",
      "npm:i18next@3.4.3/dist/commonjs/postProcessor.js",
      "npm:i18next@3.4.3/dist/commonjs/utils.js",
      "npm:i18next@3.4.3/index.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:jwt-decode@2.1.0.js",
      "npm:jwt-decode@2.1.0/lib/atob.js",
      "npm:jwt-decode@2.1.0/lib/base64_url_decode.js",
      "npm:jwt-decode@2.1.0/lib/index.js",
      "npm:moment@2.15.1.js",
      "npm:moment@2.15.1/moment.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:typer@1.1.0.js",
      "npm:typer@1.1.0/index.js",
      "npm:validate.js@0.10.0.js",
      "npm:validate.js@0.10.0/validate.js"
    ]
  }
});
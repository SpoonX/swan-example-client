System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "scripts/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0",
    "aurelia-api": "github:spoonx/aurelia-api@master",
    "aurelia-authentication": "github:spoonx/aurelia-authentication@master",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-datatable": "github:spoonx/aurelia-datatable@master",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
    "aurelia-form": "github:spoonx/aurelia-form@master",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-i18n": "npm:aurelia-i18n@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-notification": "github:spoonx/aurelia-notification@master",
    "aurelia-orm": "github:spoonx/aurelia-orm@master",
    "aurelia-pager": "github:spoonx/aurelia-pager@master",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.2",
    "aurelia-templating": "npm:aurelia-templating@1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "aurelia-validation": "npm:aurelia-validation@0.6.6",
    "aurelia-view-manager": "github:spoonx/aurelia-view-manager@master",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "get-prop": "npm:get-prop@0.0.10",
    "humane-js": "npm:humane-js@3.2.2",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@0.6.0",
    "jquery": "npm:jquery@2.2.4",
    "moment": "npm:moment@2.14.1",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.6"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:spoonx/aurelia-api@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "extend": "npm:extend@3.0.0"
    },
    "github:spoonx/aurelia-authentication@master": {
      "aurelia-api": "github:spoonx/aurelia-api@master",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "extend": "npm:extend@3.0.0",
      "jwt-decode": "npm:jwt-decode@2.1.0"
    },
    "github:spoonx/aurelia-datatable@master": {
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-orm": "github:spoonx/aurelia-orm@master",
      "aurelia-pager": "npm:aurelia-pager@0.0.5",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.5",
      "json-statham": "npm:json-statham@1.6.0",
      "typer": "npm:typer@1.1.0"
    },
    "github:spoonx/aurelia-form@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-validatejs": "npm:aurelia-validatejs@0.6.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.5",
      "extend": "npm:extend@3.0.0"
    },
    "github:spoonx/aurelia-notification@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-i18n": "npm:aurelia-i18n@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "extend": "npm:extend@3.0.0",
      "humane-js": "npm:humane-js@3.2.2"
    },
    "github:spoonx/aurelia-orm@master": {
      "aurelia-api": "github:spoonx/aurelia-api@master",
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-validation": "npm:aurelia-validation@0.6.6",
      "get-prop": "npm:get-prop@0.0.10",
      "typer": "npm:typer@1.1.0"
    },
    "github:spoonx/aurelia-pager@master": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.5"
    },
    "github:spoonx/aurelia-view-manager@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "extend": "npm:extend@3.0.0"
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
    "npm:aurelia-animator-css@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.1"
    },
    "npm:aurelia-binding@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-framework@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-i18n@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "i18next": "npm:i18next@3.4.1",
      "intl": "npm:intl@1.2.4"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-metadata@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-pager@0.0.5": {
      "aurelia-framework": "npm:aurelia-framework@1.0.1",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.5"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-router@1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-templating@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-validatejs@0.6.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-validation": "npm:aurelia-validation@0.6.6",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:aurelia-validation@0.10.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-validation@0.6.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-view-manager@0.0.4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "extend": "npm:extend@3.0.0"
    },
    "npm:aurelia-view-manager@0.0.5": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0",
      "extend": "npm:extend@3.0.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.25"
    },
    "npm:i18next@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:json-statham@1.6.0": {
      "extend": "npm:extend@3.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jwt-decode@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.6": {
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
      "aurelia-orm"
    ],
    "entity/todo.js": [
      "aurelia-orm"
    ],
    "main.js": [
      "config/routes",
      "config/app",
      "config/auth",
      "config/entities",
      "i18next-xhr-backend",
      "aurelia-router",
      "aurelia-authentication",
      "aurelia-validation/strategies/twbootstrap-view-strategy",
      "bootstrap"
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
      "aurelia-notification"
    ],
    "page/todo/list.js": [
      "aurelia-dependency-injection",
      "aurelia-orm",
      "aurelia-notification"
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
      "github:spoonx/aurelia-api@master.js",
      "github:spoonx/aurelia-api@master/aurelia-api.js",
      "github:spoonx/aurelia-authentication@master.js",
      "github:spoonx/aurelia-authentication@master/aurelia-authentication.js",
      "github:spoonx/aurelia-authentication@master/authFilterValueConverter.js",
      "github:spoonx/aurelia-authentication@master/authenticatedFilterValueConverter.js",
      "github:spoonx/aurelia-authentication@master/authenticatedValueConverter.js",
      "github:spoonx/aurelia-authentication@master/index.js",
      "github:spoonx/aurelia-datatable@master.js",
      "github:spoonx/aurelia-datatable@master/aurelia-datatable.js",
      "github:spoonx/aurelia-datatable@master/bootstrap/datatable.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-datatable@master/columns-filter.js",
      "github:spoonx/aurelia-datatable@master/convert-manager.js",
      "github:spoonx/aurelia-datatable@master/datatable.js",
      "github:spoonx/aurelia-datatable@master/index.js",
      "github:spoonx/aurelia-form@master.js",
      "github:spoonx/aurelia-form@master/attributes.js",
      "github:spoonx/aurelia-form@master/aurelia-form.js",
      "github:spoonx/aurelia-form@master/component/entity-form.js",
      "github:spoonx/aurelia-form@master/component/form-field.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/form-field.js",
      "github:spoonx/aurelia-form@master/component/form-fields.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/form-fields.js",
      "github:spoonx/aurelia-form@master/component/framework/actions.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/actions.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/actions.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/association.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/checkboxes.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/checkboxes.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/collection.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/conditional.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/conditional.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/fieldset.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/file.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/form-group.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/form-group.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/input.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/radios.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/radios.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/select.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/select.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/submit.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/bootstrap/textarea.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/framework/collection.js",
      "github:spoonx/aurelia-form@master/component/framework/conditional.js",
      "github:spoonx/aurelia-form@master/component/framework/form-group.js",
      "github:spoonx/aurelia-form@master/component/framework/options.js",
      "github:spoonx/aurelia-form@master/component/schema-form.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-form@master/component/schema-form.js",
      "github:spoonx/aurelia-form@master/config.js",
      "github:spoonx/aurelia-form@master/entity-schema.js",
      "github:spoonx/aurelia-form@master/form.js",
      "github:spoonx/aurelia-form@master/index.js",
      "github:spoonx/aurelia-form@master/utils.js",
      "github:spoonx/aurelia-notification@master.js",
      "github:spoonx/aurelia-notification@master/aurelia-notification.js",
      "github:spoonx/aurelia-orm@master.js",
      "github:spoonx/aurelia-orm@master/aurelia-orm.js",
      "github:spoonx/aurelia-orm@master/component/association-select.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-orm@master/component/association-select.js",
      "github:spoonx/aurelia-orm@master/component/paged.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-orm@master/component/paged.js",
      "github:spoonx/aurelia-orm@master/index.js",
      "github:spoonx/aurelia-pager@master.js",
      "github:spoonx/aurelia-pager@master/aurelia-pager.js",
      "github:spoonx/aurelia-pager@master/bootstrap/pager.html!github:systemjs/plugin-text@0.0.8.js",
      "github:spoonx/aurelia-pager@master/index.js",
      "github:spoonx/aurelia-pager@master/pager.js",
      "github:spoonx/aurelia-view-manager@master.js",
      "github:spoonx/aurelia-view-manager@master/aurelia-view-manager.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-binding@1.0.1.js",
      "npm:aurelia-binding@1.0.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0.js",
      "npm:aurelia-fetch-client@1.0.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.1.js",
      "npm:aurelia-framework@1.0.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-i18n@1.0.0.js",
      "npm:aurelia-i18n@1.0.0/aurelia-i18n.js",
      "npm:aurelia-i18n@1.0.0/base-i18n.js",
      "npm:aurelia-i18n@1.0.0/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@1.0.0/df.js",
      "npm:aurelia-i18n@1.0.0/i18n.js",
      "npm:aurelia-i18n@1.0.0/nf.js",
      "npm:aurelia-i18n@1.0.0/relativeTime.js",
      "npm:aurelia-i18n@1.0.0/rt.js",
      "npm:aurelia-i18n@1.0.0/t.js",
      "npm:aurelia-i18n@1.0.0/utils.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0.js",
      "npm:aurelia-logging@1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0.js",
      "npm:aurelia-metadata@1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0.js",
      "npm:aurelia-path@1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0.js",
      "npm:aurelia-polyfills@1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.2.js",
      "npm:aurelia-router@1.0.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.0.js",
      "npm:aurelia-templating@1.0.0/aurelia-templating.js",
      "npm:aurelia-validatejs@0.6.0.js",
      "npm:aurelia-validatejs@0.6.0/aurelia-validatejs.js",
      "npm:aurelia-validation@0.6.6.js",
      "npm:aurelia-validation@0.6.6/debouncer.js",
      "npm:aurelia-validation@0.6.6/decorators.js",
      "npm:aurelia-validation@0.6.6/index.js",
      "npm:aurelia-validation@0.6.6/path-observer.js",
      "npm:aurelia-validation@0.6.6/strategies/twbootstrap-view-strategy.js",
      "npm:aurelia-validation@0.6.6/utilities.js",
      "npm:aurelia-validation@0.6.6/validate-custom-attribute.js",
      "npm:aurelia-validation@0.6.6/validation-config.js",
      "npm:aurelia-validation@0.6.6/validation-group-builder.js",
      "npm:aurelia-validation@0.6.6/validation-group.js",
      "npm:aurelia-validation@0.6.6/validation-locale.js",
      "npm:aurelia-validation@0.6.6/validation-property.js",
      "npm:aurelia-validation@0.6.6/validation-result.js",
      "npm:aurelia-validation@0.6.6/validation-rules-collection.js",
      "npm:aurelia-validation@0.6.6/validation-rules.js",
      "npm:aurelia-validation@0.6.6/validation-view-strategy.js",
      "npm:aurelia-validation@0.6.6/validation.js",
      "npm:aurelia-view-manager@0.0.5.js",
      "npm:aurelia-view-manager@0.0.5/aurelia-view.js",
      "npm:aurelia-view-manager@0.0.5/config.js",
      "npm:aurelia-view-manager@0.0.5/decorators/resolved-view.js",
      "npm:aurelia-view-manager@0.0.5/view-manager.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:get-prop@0.0.10.js",
      "npm:get-prop@0.0.10/getprop.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:humane-js@3.2.2/themes/jackedup.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:i18next-xhr-backend@0.6.0.js",
      "npm:i18next-xhr-backend@0.6.0/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@0.6.0/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@0.6.0/index.js",
      "npm:i18next@3.4.1.js",
      "npm:i18next@3.4.1/dist/commonjs/BackendConnector.js",
      "npm:i18next@3.4.1/dist/commonjs/CacheConnector.js",
      "npm:i18next@3.4.1/dist/commonjs/EventEmitter.js",
      "npm:i18next@3.4.1/dist/commonjs/Interpolator.js",
      "npm:i18next@3.4.1/dist/commonjs/LanguageUtils.js",
      "npm:i18next@3.4.1/dist/commonjs/PluralResolver.js",
      "npm:i18next@3.4.1/dist/commonjs/ResourceStore.js",
      "npm:i18next@3.4.1/dist/commonjs/Translator.js",
      "npm:i18next@3.4.1/dist/commonjs/compatibility/v1.js",
      "npm:i18next@3.4.1/dist/commonjs/defaults.js",
      "npm:i18next@3.4.1/dist/commonjs/i18next.js",
      "npm:i18next@3.4.1/dist/commonjs/index.js",
      "npm:i18next@3.4.1/dist/commonjs/logger.js",
      "npm:i18next@3.4.1/dist/commonjs/postProcessor.js",
      "npm:i18next@3.4.1/dist/commonjs/utils.js",
      "npm:i18next@3.4.1/index.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:jwt-decode@2.1.0.js",
      "npm:jwt-decode@2.1.0/lib/atob.js",
      "npm:jwt-decode@2.1.0/lib/base64_url_decode.js",
      "npm:jwt-decode@2.1.0/lib/index.js",
      "npm:moment@2.14.1.js",
      "npm:moment@2.14.1/moment.js",
      "npm:process@0.11.6.js",
      "npm:process@0.11.6/browser.js",
      "npm:typer@1.1.0.js",
      "npm:typer@1.1.0/index.js",
      "npm:validate.js@0.10.0.js",
      "npm:validate.js@0.10.0/validate.js"
    ]
  }
});
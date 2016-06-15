System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "scripts/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.1",
    "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
    "aurelia-authentication": "npm:aurelia-authentication@3.0.0-rc4",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-datatable": "npm:aurelia-datatable@0.0.3",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.0",
    "aurelia-i18n": "npm:aurelia-i18n@0.5.3",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.0",
    "aurelia-notification": "npm:aurelia-notification@1.0.0-rc3",
    "aurelia-orm": "npm:aurelia-orm@3.0.0-rc4",
    "aurelia-pager": "npm:aurelia-pager@0.0.4",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1",
    "aurelia-validation": "npm:aurelia-validation@0.6.8",
    "aurelia-view-manager": "npm:aurelia-view-manager@0.0.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "humane-js": "npm:humane-js@3.2.2",
    "i18next-xhr-backend": "npm:i18next-xhr-backend@0.5.5",
    "jquery": "npm:jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.0",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.0"
    },
    "npm:aurelia-authentication@3.0.0-rc4": {
      "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.0",
      "extend": "npm:extend@3.0.0",
      "jwt-decode": "npm:jwt-decode@2.0.1"
    },
    "npm:aurelia-binding@1.0.0-beta.2.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-datatable@0.0.3": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-orm": "npm:aurelia-orm@3.0.0-rc4",
      "aurelia-pager": "npm:aurelia-pager@0.0.4",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.4",
      "json-statham": "npm:json-statham@1.3.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-history-browser@1.0.0-beta.2.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-i18n@0.5.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "i18next": "npm:i18next@2.5.1",
      "intl": "npm:intl@1.2.4"
    },
    "npm:aurelia-loader-default@1.0.0-beta.2.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-loader@1.0.0-beta.2.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.2.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-notification@1.0.0-rc3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-i18n": "npm:aurelia-i18n@0.5.3",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "extend": "npm:extend@3.0.0",
      "humane-js": "npm:humane-js@3.2.2",
      "javascript-decorators": "npm:javascript-decorators@0.7.1"
    },
    "npm:aurelia-orm@3.0.0-rc4": {
      "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-validation": "npm:aurelia-validation@0.6.8",
      "extend": "npm:extend@3.0.0",
      "typer": "npm:typer@1.1.0"
    },
    "npm:aurelia-pager@0.0.4": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.0.4"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.3.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.2.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-router@1.0.0-beta.2.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-validation@0.6.8": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-view-manager@0.0.4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "extend": "npm:extend@3.0.0"
    },
    "npm:babel-runtime@5.8.38": {
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
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:deepcopy@0.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:i18next@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:intl@1.2.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:javascript-decorators@0.7.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "deepcopy": "npm:deepcopy@0.6.3"
    },
    "npm:json-statham@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jwt-decode@2.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "component/core/nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "config/app.js",
      "config/auth.js",
      "config/entities.js",
      "config/routes.js",
      "entity/list.js",
      "entity/todo.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-text@0.0.3.js",
      "github:systemjs/plugin-text@0.0.3/text.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "main.js",
      "npm:aurelia-api@3.0.0-rc4.js",
      "npm:aurelia-api@3.0.0-rc4/aurelia-api.js",
      "npm:aurelia-authentication@3.0.0-rc4.js",
      "npm:aurelia-authentication@3.0.0-rc4/aurelia-authentication.js",
      "npm:aurelia-authentication@3.0.0-rc4/authFilterValueConverter.js",
      "npm:aurelia-binding@1.0.0-beta.2.0.0.js",
      "npm:aurelia-binding@1.0.0-beta.2.0.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.2.0.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.2.0.0.js",
      "npm:aurelia-fetch-client@1.0.0-beta.2.0.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.2.0.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.2.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.2.0.0.js",
      "npm:aurelia-history@1.0.0-beta.2.0.0/aurelia-history.js",
      "npm:aurelia-i18n@0.5.3.js",
      "npm:aurelia-i18n@0.5.3/aurelia-i18n.js",
      "npm:aurelia-i18n@0.5.3/base-i18n.js",
      "npm:aurelia-i18n@0.5.3/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@0.5.3/df.js",
      "npm:aurelia-i18n@0.5.3/i18n.js",
      "npm:aurelia-i18n@0.5.3/nf.js",
      "npm:aurelia-i18n@0.5.3/relativeTime.js",
      "npm:aurelia-i18n@0.5.3/rt.js",
      "npm:aurelia-i18n@0.5.3/t.js",
      "npm:aurelia-i18n@0.5.3/utils.js",
      "npm:aurelia-loader-default@1.0.0-beta.2.0.0.js",
      "npm:aurelia-loader-default@1.0.0-beta.2.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.2.0.0.js",
      "npm:aurelia-loader@1.0.0-beta.2.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.2.0.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.2.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.2.0.0.js",
      "npm:aurelia-logging@1.0.0-beta.2.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.2.0.0.js",
      "npm:aurelia-metadata@1.0.0-beta.2.0.0/aurelia-metadata.js",
      "npm:aurelia-notification@1.0.0-rc3.js",
      "npm:aurelia-notification@1.0.0-rc3/aurelia-notification.js",
      "npm:aurelia-orm@3.0.0-rc4.js",
      "npm:aurelia-orm@3.0.0-rc4/aurelia-orm.js",
      "npm:aurelia-orm@3.0.0-rc4/component/association-select.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-orm@3.0.0-rc4/component/association-select.js",
      "npm:aurelia-orm@3.0.0-rc4/component/paged.html!github:systemjs/plugin-text@0.0.3.js",
      "npm:aurelia-orm@3.0.0-rc4/component/paged.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/association.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/endpoint.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/name.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/repository.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/resource.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/type.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/validated-resource.js",
      "npm:aurelia-orm@3.0.0-rc4/decorator/validation.js",
      "npm:aurelia-orm@3.0.0-rc4/default-repository.js",
      "npm:aurelia-orm@3.0.0-rc4/entity-manager.js",
      "npm:aurelia-orm@3.0.0-rc4/entity.js",
      "npm:aurelia-orm@3.0.0-rc4/orm-metadata.js",
      "npm:aurelia-orm@3.0.0-rc4/repository.js",
      "npm:aurelia-orm@3.0.0-rc4/validator/has-association.js",
      "npm:aurelia-pal-browser@1.0.0-beta.3.0.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.3.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.3.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.2.0.0.js",
      "npm:aurelia-path@1.0.0-beta.2.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.2.0.0.js",
      "npm:aurelia-polyfills@1.0.0-beta.2.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.2.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.2.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.2.0.0.js",
      "npm:aurelia-router@1.0.0-beta.2.0.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.2.0.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.2.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7/aurelia-templating.js",
      "npm:aurelia-validation@0.6.8.js",
      "npm:aurelia-validation@0.6.8/debouncer.js",
      "npm:aurelia-validation@0.6.8/decorators.js",
      "npm:aurelia-validation@0.6.8/index.js",
      "npm:aurelia-validation@0.6.8/path-observer.js",
      "npm:aurelia-validation@0.6.8/strategies/twbootstrap-view-strategy.js",
      "npm:aurelia-validation@0.6.8/utilities.js",
      "npm:aurelia-validation@0.6.8/validate-custom-attribute.js",
      "npm:aurelia-validation@0.6.8/validation-config.js",
      "npm:aurelia-validation@0.6.8/validation-group-builder.js",
      "npm:aurelia-validation@0.6.8/validation-group.js",
      "npm:aurelia-validation@0.6.8/validation-locale.js",
      "npm:aurelia-validation@0.6.8/validation-property.js",
      "npm:aurelia-validation@0.6.8/validation-result.js",
      "npm:aurelia-validation@0.6.8/validation-rules-collection.js",
      "npm:aurelia-validation@0.6.8/validation-rules.js",
      "npm:aurelia-validation@0.6.8/validation-view-strategy.js",
      "npm:aurelia-validation@0.6.8/validation.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:deepcopy@0.6.3.js",
      "npm:deepcopy@0.6.3/index.js",
      "npm:deepcopy@0.6.3/lib/copy.js",
      "npm:deepcopy@0.6.3/lib/index.js",
      "npm:deepcopy@0.6.3/lib/polyfill.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:font-awesome@4.6.3/css/font-awesome.min.css!github:systemjs/plugin-text@0.0.3.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:humane-js@3.2.2/themes/jackedup.css!github:systemjs/plugin-text@0.0.3.js",
      "npm:i18next-xhr-backend@0.5.5.js",
      "npm:i18next-xhr-backend@0.5.5/dist/commonjs/index.js",
      "npm:i18next-xhr-backend@0.5.5/dist/commonjs/utils.js",
      "npm:i18next-xhr-backend@0.5.5/index.js",
      "npm:i18next@2.5.1.js",
      "npm:i18next@2.5.1/dist/commonjs/BackendConnector.js",
      "npm:i18next@2.5.1/dist/commonjs/CacheConnector.js",
      "npm:i18next@2.5.1/dist/commonjs/EventEmitter.js",
      "npm:i18next@2.5.1/dist/commonjs/Interpolator.js",
      "npm:i18next@2.5.1/dist/commonjs/LanguageUtils.js",
      "npm:i18next@2.5.1/dist/commonjs/PluralResolver.js",
      "npm:i18next@2.5.1/dist/commonjs/ResourceStore.js",
      "npm:i18next@2.5.1/dist/commonjs/Translator.js",
      "npm:i18next@2.5.1/dist/commonjs/compatibility/v1.js",
      "npm:i18next@2.5.1/dist/commonjs/defaults.js",
      "npm:i18next@2.5.1/dist/commonjs/i18next.js",
      "npm:i18next@2.5.1/dist/commonjs/index.js",
      "npm:i18next@2.5.1/dist/commonjs/logger.js",
      "npm:i18next@2.5.1/dist/commonjs/postProcessor.js",
      "npm:i18next@2.5.1/dist/commonjs/utils.js",
      "npm:i18next@2.5.1/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:javascript-decorators@0.7.1.js",
      "npm:javascript-decorators@0.7.1/index.js",
      "npm:javascript-decorators@0.7.1/lib/@after.js",
      "npm:javascript-decorators@0.7.1/lib/@autobind.js",
      "npm:javascript-decorators@0.7.1/lib/@before.js",
      "npm:javascript-decorators@0.7.1/lib/@compose.js",
      "npm:javascript-decorators@0.7.1/lib/@deprecated.js",
      "npm:javascript-decorators@0.7.1/lib/@executors.js",
      "npm:javascript-decorators@0.7.1/lib/@immutablors.js",
      "npm:javascript-decorators@0.7.1/lib/@inheritedfunctions.js",
      "npm:javascript-decorators@0.7.1/lib/@loggers.js",
      "npm:javascript-decorators@0.7.1/lib/@memoizator.js",
      "npm:javascript-decorators@0.7.1/lib/@multiinheritance.js",
      "npm:javascript-decorators@0.7.1/lib/@passedValuesEqualToNumberOfArguments.js",
      "npm:javascript-decorators@0.7.1/lib/@stators.js",
      "npm:javascript-decorators@0.7.1/lib/@timers.js",
      "npm:javascript-decorators@0.7.1/lib/@trycatch.js",
      "npm:javascript-decorators@0.7.1/lib/@validators.js",
      "npm:javascript-decorators@0.7.1/lib/helpers.js",
      "npm:javascript-decorators@0.7.1/lib/index.js",
      "npm:javascript-decorators@0.7.1/lib/validationHelpers.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:jwt-decode@2.0.1.js",
      "npm:jwt-decode@2.0.1/lib/atob.js",
      "npm:jwt-decode@2.0.1/lib/base64_url_decode.js",
      "npm:jwt-decode@2.0.1/lib/index.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:qs@6.2.0.js",
      "npm:qs@6.2.0/lib/index.js",
      "npm:qs@6.2.0/lib/parse.js",
      "npm:qs@6.2.0/lib/stringify.js",
      "npm:qs@6.2.0/lib/utils.js",
      "npm:typer@1.1.0.js",
      "npm:typer@1.1.0/index.js",
      "page/auth/login.html!github:systemjs/plugin-text@0.0.3.js",
      "page/auth/login.js",
      "page/auth/logout.html!github:systemjs/plugin-text@0.0.3.js",
      "page/auth/logout.js",
      "page/datatable/demo.html!github:systemjs/plugin-text@0.0.3.js",
      "page/datatable/demo.js",
      "page/index.html!github:systemjs/plugin-text@0.0.3.js",
      "page/index.js",
      "page/pager/demo.html!github:systemjs/plugin-text@0.0.3.js",
      "page/pager/demo.js",
      "page/todo/create-list.html!github:systemjs/plugin-text@0.0.3.js",
      "page/todo/create-list.js",
      "page/todo/list.html!github:systemjs/plugin-text@0.0.3.js",
      "page/todo/list.js"
    ]
  }
});
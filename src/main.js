import {PLATFORM} from 'aurelia-pal';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';

import routes from 'config/routes';
import appConfig from 'config/app';
import authConfig from 'config/auth';
import localConfig from 'config/local';
import * as entities from 'config/entities';
import {Router} from 'aurelia-router';
import {AuthorizeStep} from 'aurelia-authentication';
import {Config} from 'aurelia-config';

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/css/font-awesome.css';

import resBundle from "i18next-resource-store-loader!./config/locale/index.js"

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()

    .plugin(PLATFORM.moduleName('aurelia-validation'))

    /* @see https://github.com/spoonx/aurelia-config */
    // eslint-disable-next-line no-shadow
    .plugin(PLATFORM.moduleName('aurelia-config'), configure => {
      return configure([
        PLATFORM.moduleName('aurelia-api'),
        PLATFORM.moduleName('aurelia-authentication'),
        PLATFORM.moduleName('aurelia-notification'),
        PLATFORM.moduleName('aurelia-form'),
        PLATFORM.moduleName('aurelia-datatable'),
        PLATFORM.moduleName('aurelia-pager'),
        PLATFORM.moduleName('aurelia-view-manager'),
      ], appConfig, authConfig, localConfig);
    })

    .plugin(PLATFORM.moduleName('aurelia-charts'), charts => {
      charts.configure({
        library: 'C3',
      });
    })

    .plugin(PLATFORM.moduleName('aurelia-charts-c3'))

    /* @see http://aurelia-orm.spoonx.org/configuration.html */
    .plugin(PLATFORM.moduleName('aurelia-orm'), builder => {
      builder.registerEntities(entities);
    })

    /* @see https://github.com/aurelia/i18n */
    .plugin(PLATFORM.moduleName('aurelia-i18n'), instance => {
      // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
      let language = localStorage.getItem('language');

      return instance.setup({
        resources: resBundle,

        lng        : language || appConfig.defaultLocale.language,
        attributes : ['t'],
        fallbackLng: language || appConfig.defaultLocale.language,
        debug      : false,
      });
    })

    /* global resources */
    .globalResources(PLATFORM.moduleName('component/value-converters/date-format'));

  let mergedConfig = aurelia.container.get(Config);

  if (mergedConfig.fetch('environment') === 'development') {
    aurelia.use.developmentLogging();
  }

  aurelia.start().then(a => {
    a.container.get(Router).configure(configureRouter);
    a.setRoot(PLATFORM.moduleName('app'));
  });
}

function configureRouter(config) {
  config.title = appConfig.app.title;

  config.addPipelineStep('authorize', AuthorizeStep);

  config.map(routes);
}


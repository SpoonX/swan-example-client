import routes from 'config/routes';
import appConfig from 'config/app';
import authConfig from 'config/auth';
import localConfig from 'config/local';
import * as entities from 'config/entities';
import Backend from 'i18next-xhr-backend';
import {Router} from 'aurelia-router';
import {AuthorizeStep} from 'aurelia-authentication';
import {Config} from 'aurelia-config';
import 'bootstrap';
import 'fetch';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()

    .plugin('aurelia-validation')

    /* @see https://github.com/spoonx/aurelia-config */
    // eslint-disable-next-line no-shadow
    .plugin('aurelia-config', configure => {
      return configure([
        'aurelia-api',
        'aurelia-authentication',
        'aurelia-notification',
        'aurelia-form',
        'aurelia-datatable',
        'aurelia-pager',
        'aurelia-charts-c3'
      ], appConfig, authConfig, localConfig);
    })

    /* @see http://aurelia-orm.spoonx.org/configuration.html */
    .plugin('aurelia-orm', builder => {
      builder.registerEntities(entities);
    })

    /* @see https://github.com/aurelia/i18n */
    .plugin('aurelia-i18n', instance => {
      // adapt options to your needs (see http://i18next.com/pages/doc_init.html)

      instance.i18next.use(Backend);

      let language = localStorage.getItem('language');

      return instance.setup({
        backend: {
          loadPath: 'scripts/config/locale/{{lng}}/{{ns}}.json'
        },
        lng        : language || appConfig.defaultLocale.language,
        attributes : ['t'],
        fallbackLng: language || appConfig.defaultLocale.language,
        debug      : false
      });
    })

    /* global resources */
    .globalResources('component/value-converters/date-format');

  let mergedConfig = aurelia.container.get(Config);

  if (mergedConfig.fetch('environment') === 'development') {
    aurelia.use.developmentLogging();
  }

  aurelia.start().then(a => {
    a.container.get(Router).configure(configureRouter);
    a.setRoot('app');
  });
}

function configureRouter(config) {
  config.title = appConfig.app.title;

  config.addPipelineStep('authorize', AuthorizeStep);

  config.map(routes);
}

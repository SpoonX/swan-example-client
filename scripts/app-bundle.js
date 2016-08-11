define('app',['require','exports','module','aurelia-framework','aurelia-router','aurelia-authentication'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.App = undefined;

var _dec, _class;

var _aureliaFramework = require("aurelia-framework");

var _aureliaRouter = require("aurelia-router");

var _aureliaAuthentication = require("aurelia-authentication");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaAuthentication.AuthService), _dec(_class = function App(router, authService) {
  _classCallCheck(this, App);

  this.router = router;
  var payload = authService.getTokenPayload();
  this.username = payload ? payload.username : null;
  this.authenticated = authService.isAuthenticated();
}) || _class);
});

define('environment',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.default = {
  debug: true,
  testing: true
};
});

define('main',['require','exports','module','./environment','bootstrap','config/routes','config/app','config/auth','config/entities','i18next-xhr-backend','aurelia-router','aurelia-authentication'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.configure = configure;

var _environment = require("./environment");

var _environment2 = _interopRequireDefault(_environment);

require("bootstrap");

var _routes = require("config/routes");

var _routes2 = _interopRequireDefault(_routes);

var _app = require("config/app");

var _app2 = _interopRequireDefault(_app);

var _auth = require("config/auth");

var _auth2 = _interopRequireDefault(_auth);

var _entities = require("config/entities");

var _i18nextXhrBackend = require("i18next-xhr-backend");

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

var _aureliaRouter = require("aurelia-router");

var _aureliaAuthentication = require("aurelia-authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

function configure(aurelia) {
  aurelia.use.standardConfiguration().plugin('aurelia-api', function (builder) {
    _app2.default.endpoints.forEach(function (endpoint) {
      builder.registerEndpoint(endpoint.name, endpoint.endpoint, endpoint.config);

      if (endpoint.default) {
        builder.setDefaultEndpoint(endpoint.name);
      }
    });
  }).plugin('aurelia-authentication', function (baseConfig) {
    baseConfig.configure(_auth2.default);
  }).plugin('aurelia-orm', function (builder) {
    builder.registerEntity(_entities.ListEntity);
    builder.registerEntity(_entities.TodoEntity);
  }).plugin('aurelia-notification', function (config) {
    config.configure({
      notifications: {
        'success': 'humane-jackedup-success',
        'error': 'humane-jackedup-error',
        'info': 'humane-jackedup-info'
      }
    });
  }).plugin('aurelia-i18n', function (instance) {

    instance.i18next.use(_i18nextXhrBackend2.default);

    instance.setup({
      backend: {
        loadPath: 'src/config/locale/{{lng}}/{{ns}}.json'
      },
      lng: _app2.default.defaultLocale.language,
      attributes: ['t'],
      fallbackLng: _app2.default.defaultLocale.language,
      debug: false
    });
  }).plugin('aurelia-datatable').plugin('aurelia-pager').plugin('aurelia-form').globalResources('component/value-converters/date-format');

  if (_environment2.default.debug) {
    aurelia.use.developmentLogging();
  }

  if (_environment2.default.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(function (a) {
    a.container.get(_aureliaRouter.Router).configure(configureRouter);
    a.setRoot('app');
  });
}

function configureRouter(config) {
  config.title = _app2.default.title;

  config.addPipelineStep('authorize', _aureliaAuthentication.AuthorizeStep);

  config.map(_routes2.default);
}
});

define('config/app',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.default = {
  title: 'My SpoonX application',

  endpoints: [{
    name: 'api',
    endpoint: 'http://127.0.0.1:1337/',
    default: true }, {
    name: 'auth',
    endpoint: 'http://127.0.0.1:1337/' }],

  defaultLocale: {
    language: 'nl',
    locale: 'nl-NL' }
};
});

define('config/auth',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.default = {
  endpoint: 'auth',

  configureEndpoints: ['auth', 'api'],

  baseUrl: 'auth',

  loginUrl: '/login',

  signupUrl: '/signup',

  loginRedirect: '/',

  profileUrl: '/me',

  refreshTokenUrl: '/refresh-token',
  useRefreshToken: true
};
});

define('config/entities',['require','exports','module','entity/list','entity/todo'],function (require, exports, module) {'use strict';

exports.__esModule = true;

var _list = require('entity/list');

Object.defineProperty(exports, 'ListEntity', {
  enumerable: true,
  get: function get() {
    return _list.ListEntity;
  }
});

var _todo = require('entity/todo');

Object.defineProperty(exports, 'TodoEntity', {
  enumerable: true,
  get: function get() {
    return _todo.TodoEntity;
  }
});
});

define('config/routes',['require','exports','module'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.default = [{
  route: '',
  name: 'index',
  moduleId: 'page/index',
  nav: true,
  auth: true,
  title: 'Home'
}, {
  route: '/login',
  name: 'login',
  moduleId: 'page/auth/login',
  nav: true,
  auth: false,
  title: 'Login'
}, {
  route: 'logout',
  name: 'logout',
  moduleId: 'page/auth/logout',
  title: 'Logout'
}, {
  route: '/lists',
  name: 'lists',
  moduleId: 'page/todo/list',
  nav: true,
  auth: true,
  title: 'Todo lists'
}, {
  route: '/lists/create',
  name: 'lists/create',
  auth: true,
  moduleId: 'page/todo/create-list',
  title: 'Create list'
}, {
  route: '/datatable',
  name: 'datatable',
  moduleId: 'page/datatable/demo',
  nav: true,
  auth: true,
  title: 'Datatable'
}, {
  route: '/pager',
  name: 'pager',
  moduleId: 'page/pager/demo',
  nav: true,
  auth: true,
  title: 'Pager'
}, {
  route: '/association-select',
  name: 'association-select',
  moduleId: 'page/association-select/demo',
  nav: true,
  auth: true,
  title: 'Association select'
}, {
  route: '/paged',
  name: 'paged',
  moduleId: 'page/paged/demo',
  nav: true,
  auth: true,
  title: 'Paged'
}, {
  route: '/form',
  name: 'form',
  moduleId: 'page/form/demo',
  nav: true,
  auth: true,
  title: 'Form'
}];
});

define('entity/list',['require','exports','module','aurelia-orm'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.ListEntity = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _aureliaOrm = require('aurelia-orm');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ListEntity = exports.ListEntity = (_dec = (0, _aureliaOrm.resource)('list'), _dec2 = (0, _aureliaOrm.association)({ collection: 'todo' }), _dec(_class = (_class2 = function (_Entity) {
  _inherits(ListEntity, _Entity);

  function ListEntity() {
    var _temp, _this, _ret;

    _classCallCheck(this, ListEntity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Entity.call.apply(_Entity, [this].concat(args))), _this), _this.name = null, _initDefineProp(_this, 'todos', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ListEntity;
}(_aureliaOrm.Entity), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'todos', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class2)) || _class);
});

define('entity/todo',['require','exports','module','aurelia-orm'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.TodoEntity = undefined;

var _dec, _class;

var _aureliaOrm = require('aurelia-orm');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoEntity = exports.TodoEntity = (_dec = (0, _aureliaOrm.resource)('todo'), _dec(_class = function (_Entity) {
  _inherits(TodoEntity, _Entity);

  function TodoEntity() {
    var _temp, _this, _ret;

    _classCallCheck(this, TodoEntity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Entity.call.apply(_Entity, [this].concat(args))), _this), _this.todo = '', _this.done = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TodoEntity;
}(_aureliaOrm.Entity)) || _class);
});

define('page/index',['require','exports','module'],function (require, exports, module) {"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = exports.Index = function Index() {
  _classCallCheck(this, Index);
};
});

define('component/value-converters/date-format',['require','exports','module','moment'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.DateFormatValueConverter = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateFormatValueConverter = exports.DateFormatValueConverter = function () {
  function DateFormatValueConverter() {
    _classCallCheck(this, DateFormatValueConverter);
  }

  DateFormatValueConverter.prototype.toView = function toView(value, format) {
    return (0, _moment2.default)(value).format(format);
  };

  return DateFormatValueConverter;
}();
});

define('page/association-select/demo',['require','exports','module','aurelia-dependency-injection','aurelia-orm'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Demo = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = exports.Demo = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager), _dec(_class = function Demo(entityManager) {
  _classCallCheck(this, Demo);

  this.todoRepository = entityManager.getRepository('todo');
  this.listRepository = entityManager.getRepository('list');
}) || _class);
});

define('page/auth/login',['require','exports','module','aurelia-dependency-injection','aurelia-authentication','aurelia-notification'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Login = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaAuthentication = require("aurelia-authentication");

var _aureliaNotification = require("aurelia-notification");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = exports.Login = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaAuthentication.AuthService, _aureliaNotification.Notification), _dec(_class = function () {
  function Login(authService, notification) {
    _classCallCheck(this, Login);

    this.username = '';
    this.password = '';

    this.notification = notification;
    this.authService = authService;
  }

  Login.prototype.login = function login() {
    var _this = this;

    return this.authService.login({
      username: this.username,
      password: this.password
    }).catch(function (error) {
      _this.notification.error('Login failed!');

      console.error(error);
    });
  };

  return Login;
}()) || _class);
});

define('page/auth/logout',['require','exports','module','aurelia-authentication','aurelia-dependency-injection'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.Logout = undefined;

var _dec, _class;

var _aureliaAuthentication = require('aurelia-authentication');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logout = exports.Logout = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaAuthentication.AuthService), _dec(_class = function () {
  function Logout(authService) {
    _classCallCheck(this, Logout);

    this.authService = authService;
  }

  Logout.prototype.activate = function activate() {
    return this.authService.logout();
  };

  return Logout;
}()) || _class);
});

define('page/datatable/demo',['require','exports','module','aurelia-dependency-injection','aurelia-orm'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Demo = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = exports.Demo = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager), _dec(_class = function () {
  function Demo(entityManager) {
    var _this = this;

    _classCallCheck(this, Demo);

    this.actions = [{
      icon: 'flag',
      title: 'My Title',
      type: 'primary',
      action: function action(record) {
        _this.customAction(record);
      },
      disabled: function disabled(record) {
        return record.id % 2 == 0;
      }
    }];

    this.todoRepository = entityManager.getRepository('todo');
  }

  Demo.prototype.customAction = function customAction(record) {
    console.log('Custom action was triggerd with data: ', record);
  };

  Demo.prototype.myEventCallback = function myEventCallback(event) {
    console.log('Event "%s" was triggerd', event);
  };

  Demo.prototype.myFunctionCallback = function myFunctionCallback(event) {
    console.log('Edit was triggerd with data:', event);
  };

  return Demo;
}()) || _class);
});

define('page/form/demo',['require','exports','module','aurelia-framework','aurelia-orm'],function (require, exports, module) {'use strict';

exports.__esModule = true;
exports.Demo = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _aureliaOrm = require('aurelia-orm');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = exports.Demo = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.BindingEngine, _aureliaOrm.EntityManager), _dec(_class = function Demo(bindingEngine, entityManager) {
  _classCallCheck(this, Demo);

  this.entity = entityManager.getEntity('todo');
  this.petOwnerForm = petOwnerForm(bindingEngine);
  this.loginForm = loginForm();
  this.productForm = productForm();
  this.feedbackForm = feedbackForm();
}) || _class);


function feedbackForm() {
  var schema = [{
    key: 'name',
    type: 'string',
    attributes: {
      placeholder: 'name'
    }
  }, {
    key: 'feedback',
    type: 'textarea'
  }];

  var model = {
    name: '',
    feedback: 'I like your product'
  };

  return { schema: schema, model: model };
}

function productForm() {
  var model = {
    name: 'Bread',
    tags: [{
      name: 'Basics',
      color: '#FF3333'
    }, {
      name: 'Brown',
      color: '#992233'
    }]
  };

  var removeTag = function removeTag(tag, index, $event) {
    model.tags.splice(index, 1);
  };

  var addTag = function addTag(tag, index, $event) {
    model.tags.push({
      name: '',
      color: '#ffffff'
    });
  };

  var tagSchema = [{
    key: 'name',
    type: 'string',
    attributes: {
      placeholder: 'tag name'
    }
  }, {
    key: 'color',
    type: 'color'
  }, {
    type: 'buttons',
    actions: [{
      label: 'remove',
      action: removeTag,
      attributes: {
        class: 'btn btn-warning'
      }
    }]
  }];

  var schema = [{
    key: 'name',
    type: 'string'
  }, {
    key: 'tags',
    type: 'collection',
    schema: tagSchema
  }, {
    type: 'buttons',
    actions: [{
      label: 'add tag',
      action: addTag,
      attributes: {
        class: 'btn btn-primary'
      }
    }]
  }];

  return { schema: schema, model: model };
}

function petOwnerForm(bindingEngine) {
  var petsModel = ['cat', 'dog'];
  var petsOptions = [];

  var calculatePetsOptions = function calculatePetsOptions() {
    petsOptions.length = 0;
    petsModel.forEach(function (pet) {
      petsOptions.push({
        name: capitalize(pet),
        value: pet
      });
    });

    return petsOptions;
  };

  petsOptions = calculatePetsOptions();

  var model = {
    food: 'other',
    favorite: 'cat',
    pets: petsModel
  };

  var schema = [{
    key: 'food',
    type: 'select',
    options: ["Brand", { name: 'Other' }, { value: 'Basic' }, { name: 'Premium', value: 'premium' }]
  }, {
    key: 'pets',
    type: 'checkboxes',
    options: [{
      name: 'Parrot',
      value: 'parrot'

    }, {
      name: 'Dog',
      value: 'dog'
    }, {
      name: 'Cat',
      value: 'cat'
    }]
  }, {
    key: 'favorite',
    type: 'radios',
    options: petsOptions
  }];

  bindingEngine.collectionObserver(petsModel).subscribe(calculatePetsOptions);

  return { model: model, schema: schema };
}

function loginForm() {
  var model = {
    email: 'spoonx@world.com',
    password: '',
    remember: false,
    pet: ['dog']
  };

  var schema = [{
    key: 'email',
    type: 'email'
  }, {
    key: 'password',
    type: 'password'
  }, {
    key: 'remember',
    type: 'boolean'
  }];

  return { model: model, schema: schema };
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
});

define('page/paged/demo',['require','exports','module','aurelia-dependency-injection','aurelia-orm'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Demo = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = exports.Demo = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager), _dec(_class = function Demo(entityManager) {
  _classCallCheck(this, Demo);

  this.todoRepository = entityManager.getRepository('todo');
  this.notARepository = entityManager.getRepository('ups');
}) || _class);
});

define('page/pager/demo',['require','exports','module','aurelia-dependency-injection','aurelia-orm'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.Demo = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = exports.Demo = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager), _dec(_class = function Demo(entityManager) {
  _classCallCheck(this, Demo);

  this.todoRepository = entityManager.getRepository('todo');

  var data = [];

  for (var i = 0; i < 500; i++) {
    data.push({
      id: i
    });
  }

  this.pagerData = data;
}) || _class);
});

define('page/todo/create-list',['require','exports','module','aurelia-dependency-injection','aurelia-orm','aurelia-router','aurelia-notification'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.CreateList = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

var _aureliaRouter = require("aurelia-router");

var _aureliaNotification = require("aurelia-notification");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateList = exports.CreateList = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager, _aureliaRouter.Router, _aureliaNotification.Notification), _dec(_class = function () {
  function CreateList(entityManager, router, notification) {
    _classCallCheck(this, CreateList);

    this.notification = notification;
    this.router = router;
    this.list = entityManager.getEntity('list');
  }

  CreateList.prototype.save = function save() {
    var _this = this;

    this.list.save().then(function () {
      _this.notification.success('List saved successfully!');
      _this.router.navigate('lists');
    }).catch(function () {
      _this.notification.error('Something went wrong!');
    });
  };

  return CreateList;
}()) || _class);
});

define('page/todo/list',['require','exports','module','aurelia-dependency-injection','aurelia-orm','aurelia-notification'],function (require, exports, module) {"use strict";

exports.__esModule = true;
exports.List = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _aureliaOrm = require("aurelia-orm");

var _aureliaNotification = require("aurelia-notification");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = exports.List = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaOrm.EntityManager, _aureliaNotification.Notification), _dec(_class = function () {
  function List(entityManager, notification) {
    _classCallCheck(this, List);

    this.notification = notification;
    this.listRepository = entityManager.getRepository('list');
    this.entityManager = entityManager;
  }

  List.prototype.attached = function attached() {
    var _this = this;

    return this.listRepository.find().then(function (lists) {
      return _this.lists = lists;
    });
  };

  List.prototype.destroy = function destroy(index) {
    var _this2 = this;

    var list = this.lists[index];

    list.destroy().then(function () {
      _this2.lists.splice(index, 1);
      _this2.notification.success('List deleted successfully!');
    }).catch(function () {
      _this2.notification.error('Something went wrong!');
    });
  };

  List.prototype.save = function save(list) {
    var _this3 = this;

    list.save().then(function () {
      _this3.notification.success('List saved successfully!');
    }).catch(function () {
      _this3.notification.error('Something went wrong!');
    });
  };

  List.prototype.destroyTodo = function destroyTodo(list, index) {
    var _this4 = this;

    list.todos.splice(index, 1);

    list.save().then(function () {
      _this4.notification.success('Todo removed successfully!');
    }).catch(function () {
      _this4.notification.error('Something went wrong!');
    });
  };

  List.prototype.addTodo = function addTodo(list) {
    var _this5 = this;

    var todo = this.entityManager.getEntity('todo');
    todo.todo = prompt('What is it you need to do?');

    list.todos.push(todo);

    list.save().then(function () {
      _this5.notification.success('Todo created successfully!');
    }).catch(function () {
      _this5.notification.error('Something went wrong!');
    });
  };

  List.prototype.updated = function updated(todo) {
    var _this6 = this;

    todo.done = !todo.done;

    todo.save().then(function () {
      _this6.notification.success('Todo saved successfully!');
    }).catch(function () {
      _this6.notification.error('Something went wrong!');
    });

    return true;
  };

  List.prototype.keypress = function keypress(event, list) {
    if (event.which !== 13) {
      return true;
    }

    event.preventDefault();

    return this.save(list);
  };

  return List;
}()) || _class);
});

define('jwt-decode/base64_url_decode',['require','exports','module','./atob'],function (require, exports, module) {var atob = require('./atob');

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};

});

define('jwt-decode/atob',['require','exports','module'],function (require, exports, module) {/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;

});

define('aurelia-templating-resources/compose',['exports', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Compose = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Compose = exports.Compose = (_dec = (0, _aureliaTemplating.customElement)('compose'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
      

      _initDefineProp(this, 'model', _descriptor, this);

      _initDefineProp(this, 'view', _descriptor2, this);

      _initDefineProp(this, 'viewModel', _descriptor3, this);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.viewSlot = viewSlot;
      this.viewResources = viewResources;
      this.taskQueue = taskQueue;
      this.currentController = null;
      this.currentViewModel = null;
    }

    Compose.prototype.created = function created(owningView) {
      this.owningView = owningView;
    };

    Compose.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      processInstruction(this, createInstruction(this, {
        view: this.view,
        viewModel: this.viewModel,
        model: this.model
      }));
    };

    Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
      this.bindingContext = null;
      this.overrideContext = null;
      var returnToCache = true;
      var skipAnimation = true;
      this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
      var _this = this;

      if (this.currentInstruction) {
        this.currentInstruction.model = newValue;
        return;
      }

      this.taskQueue.queueMicroTask(function () {
        if (_this.currentInstruction) {
          _this.currentInstruction.model = newValue;
          return;
        }

        var vm = _this.currentViewModel;

        if (vm && typeof vm.activate === 'function') {
          vm.activate(newValue);
        }
      });
    };

    Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
      var _this2 = this;

      var instruction = createInstruction(this, {
        view: newValue,
        viewModel: this.currentViewModel || this.viewModel,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this2, _this2.currentInstruction);
      });
    };

    Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
      var _this3 = this;

      var instruction = createInstruction(this, {
        viewModel: newValue,
        view: this.view,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this3, _this3.currentInstruction);
      });
    };

    return Compose;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);


  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      bindingContext: composer.bindingContext,
      overrideContext: composer.overrideContext,
      owningView: composer.owningView,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentController: composer.currentController,
      host: composer.element
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }
});
define('aurelia-templating-resources/if',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.If = undefined;

  

  var _dec, _dec2, _class;

  var If = exports.If = (_dec = (0, _aureliaTemplating.customAttribute)('if'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function If(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.showing = false;
      this.view = null;
      this.bindingContext = null;
      this.overrideContext = null;
    }

    If.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    If.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (this.__queuedChanges) {
        this.__queuedChanges.push(newValue);
        return;
      }

      var maybePromise = this._runValueChanged(newValue);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedChanges = _this.__queuedChanges = [];

          var runQueuedChanges = function runQueuedChanges() {
            if (!queuedChanges.length) {
              _this.__queuedChanges = undefined;
              return;
            }

            var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
            nextPromise.then(runQueuedChanges);
          };

          maybePromise.then(runQueuedChanges);
        })();
      }
    };

    If.prototype._runValueChanged = function _runValueChanged(newValue) {
      var _this2 = this;

      if (!newValue) {
        var viewOrPromise = void 0;
        if (this.view !== null && this.showing) {
          viewOrPromise = this.viewSlot.remove(this.view);
          if (viewOrPromise instanceof Promise) {
            viewOrPromise.then(function () {
              return _this2.view.unbind();
            });
          } else {
            this.view.unbind();
          }
        }

        this.showing = false;
        return viewOrPromise;
      }

      if (this.view === null) {
        this.view = this.viewFactory.create();
      }

      if (!this.view.isBound) {
        this.view.bind(this.bindingContext, this.overrideContext);
      }

      if (!this.showing) {
        this.showing = true;
        return this.viewSlot.add(this.view);
      }

      return undefined;
    };

    If.prototype.unbind = function unbind() {
      if (this.view === null) {
        return;
      }

      this.view.unbind();

      if (!this.viewFactory.isCaching) {
        return;
      }

      if (this.showing) {
        this.showing = false;
        this.viewSlot.remove(this.view, true, true);
      }
      this.view.returnToCache();
      this.view = null;
    };

    return If;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/with',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-binding'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.With = undefined;

  

  var _dec, _dec2, _class;

  var With = exports.With = (_dec = (0, _aureliaTemplating.customAttribute)('with'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function With(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.parentOverrideContext = null;
      this.view = null;
    }

    With.prototype.bind = function bind(bindingContext, overrideContext) {
      this.parentOverrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    With.prototype.valueChanged = function valueChanged(newValue) {
      var overrideContext = (0, _aureliaBinding.createOverrideContext)(newValue, this.parentOverrideContext);
      if (!this.view) {
        this.view = this.viewFactory.create();
        this.view.bind(newValue, overrideContext);
        this.viewSlot.add(this.view);
      } else {
        this.view.bind(newValue, overrideContext);
      }
    };

    With.prototype.unbind = function unbind() {
      this.parentOverrideContext = null;

      if (this.view) {
        this.view.unbind();
      }
    };

    return With;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/repeat',['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './repeat-strategy-locator', './repeat-utilities', './analyze-view-factory', './abstract-repeater'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating, _repeatStrategyLocator, _repeatUtilities, _analyzeViewFactory, _abstractRepeater) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Repeat = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Repeat = exports.Repeat = (_dec = (0, _aureliaTemplating.customAttribute)('repeat'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaBinding.ObserverLocator, _repeatStrategyLocator.RepeatStrategyLocator), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
    _inherits(Repeat, _AbstractRepeater);

    function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
      

      var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
        local: 'item',
        viewsRequireLifecycle: (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory)
      }));

      _initDefineProp(_this, 'items', _descriptor, _this);

      _initDefineProp(_this, 'local', _descriptor2, _this);

      _initDefineProp(_this, 'key', _descriptor3, _this);

      _initDefineProp(_this, 'value', _descriptor4, _this);

      _this.viewFactory = viewFactory;
      _this.instruction = instruction;
      _this.viewSlot = viewSlot;
      _this.lookupFunctions = viewResources.lookupFunctions;
      _this.observerLocator = observerLocator;
      _this.key = 'key';
      _this.value = 'value';
      _this.strategyLocator = strategyLocator;
      _this.ignoreMutation = false;
      _this.sourceExpression = (0, _repeatUtilities.getItemsSourceExpression)(_this.instruction, 'repeat.for');
      _this.isOneTime = (0, _repeatUtilities.isOneTime)(_this.sourceExpression);
      _this.viewsRequireLifecycle = (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory);
      return _this;
    }

    Repeat.prototype.call = function call(context, changes) {
      this[context](this.items, changes);
    };

    Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
      this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
      this.matcherBinding = this._captureAndRemoveMatcherBinding();
      this.itemsChanged();
    };

    Repeat.prototype.unbind = function unbind() {
      this.scope = null;
      this.items = null;
      this.matcherBinding = null;
      this.viewSlot.removeAll(true);
      this._unsubscribeCollection();
    };

    Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
      if (this.collectionObserver) {
        this.collectionObserver.unsubscribe(this.callContext, this);
        this.collectionObserver = null;
        this.callContext = null;
      }
    };

    Repeat.prototype.itemsChanged = function itemsChanged() {
      this._unsubscribeCollection();

      if (!this.scope) {
        return;
      }

      var items = this.items;
      this.strategy = this.strategyLocator.getStrategy(items);
      if (!this.strategy) {
        throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
      }

      if (!this.isOneTime && !this._observeInnerCollection()) {
        this._observeCollection();
      }
      this.strategy.instanceChanged(this, items);
    };

    Repeat.prototype._getInnerCollection = function _getInnerCollection() {
      var expression = (0, _repeatUtilities.unwrapExpression)(this.sourceExpression);
      if (!expression) {
        return null;
      }
      return expression.evaluate(this.scope, null);
    };

    Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
      if (!this.collectionObserver) {
        return;
      }
      this.strategy.instanceMutated(this, collection, changes);
    };

    Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
      var _this2 = this;

      if (!this.collectionObserver) {
        return;
      }

      if (this.ignoreMutation) {
        return;
      }
      this.ignoreMutation = true;
      var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
      this.observerLocator.taskQueue.queueMicroTask(function () {
        return _this2.ignoreMutation = false;
      });

      if (newItems === this.items) {
        this.itemsChanged();
      } else {
        this.items = newItems;
      }
    };

    Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
      var items = this._getInnerCollection();
      var strategy = this.strategyLocator.getStrategy(items);
      if (!strategy) {
        return false;
      }
      this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
      if (!this.collectionObserver) {
        return false;
      }
      this.callContext = 'handleInnerCollectionMutated';
      this.collectionObserver.subscribe(this.callContext, this);
      return true;
    };

    Repeat.prototype._observeCollection = function _observeCollection() {
      var items = this.items;
      this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
      if (this.collectionObserver) {
        this.callContext = 'handleCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
      }
    };

    Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
      if (this.viewFactory.viewFactory) {
        var instructions = this.viewFactory.viewFactory.instructions;
        var instructionIds = Object.keys(instructions);
        for (var i = 0; i < instructionIds.length; i++) {
          var expressions = instructions[instructionIds[i]].expressions;
          if (expressions) {
            for (var ii = 0; i < expressions.length; i++) {
              if (expressions[ii].targetProperty === 'matcher') {
                var matcherBinding = expressions[ii];
                expressions.splice(ii, 1);
                return matcherBinding;
              }
            }
          }
        }
      }

      return undefined;
    };

    Repeat.prototype.viewCount = function viewCount() {
      return this.viewSlot.children.length;
    };

    Repeat.prototype.views = function views() {
      return this.viewSlot.children;
    };

    Repeat.prototype.view = function view(index) {
      return this.viewSlot.children[index];
    };

    Repeat.prototype.matcher = function matcher() {
      return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
    };

    Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.add(view);
    };

    Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.insert(index, view);
    };

    Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
      this.viewSlot.move(sourceIndex, targetIndex);
    };

    Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      return this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
      return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    };

    Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    };

    Repeat.prototype.updateBindings = function updateBindings(view) {
      var j = view.bindings.length;
      while (j--) {
        (0, _repeatUtilities.updateOneTimeBinding)(view.bindings[j]);
      }
      j = view.controllers.length;
      while (j--) {
        var k = view.controllers[j].boundProperties.length;
        while (k--) {
          var binding = view.controllers[j].boundProperties[k].binding;
          (0, _repeatUtilities.updateOneTimeBinding)(binding);
        }
      }
    };

    return Repeat;
  }(_abstractRepeater.AbstractRepeater), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});
define('aurelia-templating-resources/repeat-strategy-locator',['exports', './null-repeat-strategy', './array-repeat-strategy', './map-repeat-strategy', './set-repeat-strategy', './number-repeat-strategy'], function (exports, _nullRepeatStrategy, _arrayRepeatStrategy, _mapRepeatStrategy, _setRepeatStrategy, _numberRepeatStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RepeatStrategyLocator = undefined;

  

  var RepeatStrategyLocator = exports.RepeatStrategyLocator = function () {
    function RepeatStrategyLocator() {
      

      this.matchers = [];
      this.strategies = [];

      this.addStrategy(function (items) {
        return items === null || items === undefined;
      }, new _nullRepeatStrategy.NullRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Array;
      }, new _arrayRepeatStrategy.ArrayRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Map;
      }, new _mapRepeatStrategy.MapRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Set;
      }, new _setRepeatStrategy.SetRepeatStrategy());
      this.addStrategy(function (items) {
        return typeof items === 'number';
      }, new _numberRepeatStrategy.NumberRepeatStrategy());
    }

    RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
      this.matchers.push(matcher);
      this.strategies.push(strategy);
    };

    RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
      var matchers = this.matchers;

      for (var i = 0, ii = matchers.length; i < ii; ++i) {
        if (matchers[i](items)) {
          return this.strategies[i];
        }
      }

      return null;
    };

    return RepeatStrategyLocator;
  }();
});
define('aurelia-templating-resources/null-repeat-strategy',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var NullRepeatStrategy = exports.NullRepeatStrategy = function () {
    function NullRepeatStrategy() {
      
    }

    NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      repeat.removeAllViews(true);
    };

    NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

    return NullRepeatStrategy;
  }();
});
define('aurelia-templating-resources/array-repeat-strategy',['exports', './repeat-utilities', 'aurelia-binding'], function (exports, _repeatUtilities, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ArrayRepeatStrategy = undefined;

  

  var ArrayRepeatStrategy = exports.ArrayRepeatStrategy = function () {
    function ArrayRepeatStrategy() {
      
    }

    ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getArrayObserver(items);
    };

    ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var itemsLength = items.length;

      if (!items || itemsLength === 0) {
        repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        return;
      }

      var children = repeat.views();
      var viewsLength = children.length;

      if (viewsLength === 0) {
        this._standardProcessInstanceChanged(repeat, items);
        return;
      }

      if (repeat.viewsRequireLifecycle) {
        (function () {
          var childrenSnapshot = children.slice(0);
          var itemNameInBindingContext = repeat.local;
          var matcher = repeat.matcher();

          var itemsPreviouslyInViews = [];
          var viewsToRemove = [];

          for (var index = 0; index < viewsLength; index++) {
            var view = childrenSnapshot[index];
            var oldItem = view.bindingContext[itemNameInBindingContext];

            if ((0, _repeatUtilities.indexOf)(items, oldItem, matcher) === -1) {
              viewsToRemove.push(view);
            } else {
              itemsPreviouslyInViews.push(oldItem);
            }
          }

          var updateViews = void 0;
          var removePromise = void 0;

          if (itemsPreviouslyInViews.length > 0) {
            removePromise = repeat.removeViews(viewsToRemove, true, !repeat.viewsRequireLifecycle);
            updateViews = function updateViews() {
              for (var _index = 0; _index < itemsLength; _index++) {
                var item = items[_index];
                var indexOfView = (0, _repeatUtilities.indexOf)(itemsPreviouslyInViews, item, matcher, _index);
                var _view = void 0;

                if (indexOfView === -1) {
                  var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_index], _index, itemsLength);
                  repeat.insertView(_index, overrideContext.bindingContext, overrideContext);

                  itemsPreviouslyInViews.splice(_index, 0, undefined);
                } else if (indexOfView === _index) {
                  _view = children[indexOfView];
                  itemsPreviouslyInViews[indexOfView] = undefined;
                } else {
                  _view = children[indexOfView];
                  repeat.moveView(indexOfView, _index);
                  itemsPreviouslyInViews.splice(indexOfView, 1);
                  itemsPreviouslyInViews.splice(_index, 0, undefined);
                }

                if (_view) {
                  (0, _repeatUtilities.updateOverrideContext)(_view.overrideContext, _index, itemsLength);
                }
              }

              _this._inPlaceProcessItems(repeat, items);
            };
          } else {
            removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            updateViews = function updateViews() {
              return _this._standardProcessInstanceChanged(repeat, items);
            };
          }

          if (removePromise instanceof Promise) {
            removePromise.then(updateViews);
          } else {
            updateViews();
          }
        })();
      } else {
        this._inPlaceProcessItems(repeat, items);
      }
    };

    ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
      for (var i = 0, ii = items.length; i < ii; i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[i], i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
      var itemsLength = items.length;
      var viewsLength = repeat.viewCount();

      while (viewsLength > itemsLength) {
        viewsLength--;
        repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
      }

      var local = repeat.local;

      for (var i = 0; i < viewsLength; i++) {
        var view = repeat.view(i);
        var last = i === itemsLength - 1;
        var middle = i !== 0 && !last;

        if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
          continue;
        }

        view.bindingContext[local] = items[i];
        view.overrideContext.$middle = middle;
        view.overrideContext.$last = last;
        repeat.updateBindings(view);
      }

      for (var _i = viewsLength; _i < itemsLength; _i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_i], _i, itemsLength);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
      var _this2 = this;

      if (repeat.__queuedSplices) {
        for (var i = 0, ii = splices.length; i < ii; ++i) {
          var _splices$i = splices[i];
          var index = _splices$i.index;
          var removed = _splices$i.removed;
          var addedCount = _splices$i.addedCount;

          (0, _aureliaBinding.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
        }

        repeat.__array = array.slice(0);
        return;
      }

      var maybePromise = this._runSplices(repeat, array.slice(0), splices);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedSplices = repeat.__queuedSplices = [];

          var runQueuedSplices = function runQueuedSplices() {
            if (!queuedSplices.length) {
              repeat.__queuedSplices = undefined;
              repeat.__array = undefined;
              return;
            }

            var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
            queuedSplices = repeat.__queuedSplices = [];
            nextPromise.then(runQueuedSplices);
          };

          maybePromise.then(runQueuedSplices);
        })();
      }
    };

    ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
      var _this3 = this;

      var removeDelta = 0;
      var rmPromises = [];

      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var removed = splice.removed;

        for (var j = 0, jj = removed.length; j < jj; ++j) {
          var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
        }
        removeDelta -= splice.addedCount;
      }

      if (rmPromises.length > 0) {
        return Promise.all(rmPromises).then(function () {
          var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
        });
      }

      var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);

      return undefined;
    };

    ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
      var spliceIndex = void 0;
      var spliceIndexLow = void 0;
      var arrayLength = array.length;
      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var addIndex = spliceIndex = splice.index;
        var end = splice.index + splice.addedCount;

        if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
          spliceIndexLow = spliceIndex;
        }

        for (; addIndex < end; ++addIndex) {
          var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, array[addIndex], addIndex, arrayLength);
          repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
        }
      }

      return spliceIndexLow;
    };

    return ArrayRepeatStrategy;
  }();
});
define('aurelia-templating-resources/repeat-utilities',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.updateOverrideContexts = updateOverrideContexts;
  exports.createFullOverrideContext = createFullOverrideContext;
  exports.updateOverrideContext = updateOverrideContext;
  exports.getItemsSourceExpression = getItemsSourceExpression;
  exports.unwrapExpression = unwrapExpression;
  exports.isOneTime = isOneTime;
  exports.updateOneTimeBinding = updateOneTimeBinding;
  exports.indexOf = indexOf;


  var oneTime = _aureliaBinding.bindingMode.oneTime;

  function updateOverrideContexts(views, startIndex) {
    var length = views.length;

    if (startIndex > 0) {
      startIndex = startIndex - 1;
    }

    for (; startIndex < length; ++startIndex) {
      updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
  }

  function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = (0, _aureliaBinding.createOverrideContext)(bindingContext, repeat.scope.overrideContext);

    if (typeof key !== 'undefined') {
      bindingContext[repeat.key] = key;
      bindingContext[repeat.value] = data;
    } else {
      bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
  }

  function updateOverrideContext(overrideContext, index, length) {
    var first = index === 0;
    var last = index === length - 1;
    var even = index % 2 === 0;

    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
  }

  function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions.filter(function (bi) {
      return bi.originalAttrName === attrName;
    })[0].attributes.items.sourceExpression;
  }

  function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      expression = expression.expression;
    }
    while (expression instanceof _aureliaBinding.ValueConverter) {
      expression = expression.expression;
      unwrapped = true;
    }
    return unwrapped ? expression : null;
  }

  function isOneTime(expression) {
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      if (expression.name === 'oneTime') {
        return true;
      }
      expression = expression.expression;
    }
    return false;
  }

  function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
      binding.call(_aureliaBinding.sourceContext);
    } else if (binding.updateOneTimeBindings) {
      binding.updateOneTimeBindings();
    }
  }

  function indexOf(array, item, matcher, startIndex) {
    if (!matcher) {
      return array.indexOf(item);
    }
    var length = array.length;
    for (var index = startIndex || 0; index < length; index++) {
      if (matcher(array[index], item)) {
        return index;
      }
    }
    return -1;
  }
});
define('aurelia-templating-resources/map-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MapRepeatStrategy = undefined;

  

  var MapRepeatStrategy = exports.MapRepeatStrategy = function () {
    function MapRepeatStrategy() {
      
    }

    MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getMapObserver(items);
    };

    MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value, key) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size, key);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
      var key = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        key = record.key;
        switch (record.type) {
          case 'update':
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), removeIndex, map.size, key);
            repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
            break;
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), map.size - 1, map.size, key);
            repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            if (record.oldValue === undefined) {
              return;
            }
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.key] === key) {
          return i;
        }
      }

      return undefined;
    };

    return MapRepeatStrategy;
  }();
});
define('aurelia-templating-resources/set-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SetRepeatStrategy = undefined;

  

  var SetRepeatStrategy = exports.SetRepeatStrategy = function () {
    function SetRepeatStrategy() {
      
    }

    SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getSetObserver(items);
    };

    SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
      var value = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        value = record.value;
        switch (record.type) {
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, set.size - 1, set.size);
            repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            removeIndex = this._getViewIndexByValue(repeat, value);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.local] === value) {
          return i;
        }
      }

      return undefined;
    };

    return SetRepeatStrategy;
  }();
});
define('aurelia-templating-resources/number-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberRepeatStrategy = undefined;

  

  var NumberRepeatStrategy = exports.NumberRepeatStrategy = function () {
    function NumberRepeatStrategy() {
      
    }

    NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
      return null;
    };

    NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, value);
        });
        return;
      }
      this._standardProcessItems(repeat, value);
    };

    NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
      var childrenLength = repeat.viewCount();
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var viewsToRemove = void 0;

      value = Math.floor(value);
      viewsToRemove = childrenLength - value;

      if (viewsToRemove > 0) {
        if (viewsToRemove > childrenLength) {
          viewsToRemove = childrenLength;
        }

        for (i = 0, ii = viewsToRemove; i < ii; ++i) {
          repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
        }

        return;
      }

      for (i = childrenLength, ii = value; i < ii; ++i) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, i, i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }

      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
    };

    return NumberRepeatStrategy;
  }();
});
define('aurelia-templating-resources/analyze-view-factory',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.viewsRequireLifecycle = viewsRequireLifecycle;
  var lifecycleOptionalBehaviors = exports.lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with'];

  function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
      var i = behaviors.length;
      while (i--) {
        if (behaviorRequiresLifecycle(behaviors[i])) {
          return true;
        }
      }
    }

    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
      return viewFactory._viewsRequireLifecycle;
    }

    viewFactory._viewsRequireLifecycle = false;

    if (viewFactory.viewFactory) {
      viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
      return viewFactory._viewsRequireLifecycle;
    }

    if (viewFactory.template.querySelector('.au-animate')) {
      viewFactory._viewsRequireLifecycle = true;
      return true;
    }

    for (var id in viewFactory.instructions) {
      if (targetRequiresLifecycle(viewFactory.instructions[id])) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
      }
    }

    viewFactory._viewsRequireLifecycle = false;
    return false;
  }
});
define('aurelia-templating-resources/abstract-repeater',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var AbstractRepeater = exports.AbstractRepeater = function () {
    function AbstractRepeater(options) {
      

      Object.assign(this, {
        local: 'items',
        viewsRequireLifecycle: true
      }, options);
    }

    AbstractRepeater.prototype.viewCount = function viewCount() {
      throw new Error('subclass must implement `viewCount`');
    };

    AbstractRepeater.prototype.views = function views() {
      throw new Error('subclass must implement `views`');
    };

    AbstractRepeater.prototype.view = function view(index) {
      throw new Error('subclass must implement `view`');
    };

    AbstractRepeater.prototype.matcher = function matcher() {
      throw new Error('subclass must implement `matcher`');
    };

    AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
      throw new Error('subclass must implement `addView`');
    };

    AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      throw new Error('subclass must implement `insertView`');
    };

    AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
      throw new Error('subclass must implement `moveView`');
    };

    AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeAllViews`');
    };

    AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeView`');
    };

    AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeView`');
    };

    AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
      throw new Error('subclass must implement `updateBindings`');
    };

    return AbstractRepeater;
  }();
});
define('aurelia-templating-resources/show',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal, _aureliaHideStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Show = undefined;

  

  var _dec, _dec2, _class;

  var Show = exports.Show = (_dec = (0, _aureliaTemplating.customAttribute)('show'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
    function Show(element, animator, domBoundary) {
      

      this.element = element;
      this.animator = animator;
      this.domBoundary = domBoundary;
    }

    Show.prototype.created = function created() {
      (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
    };

    Show.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      } else {
        this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      }
    };

    Show.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Show;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/aurelia-hide-style',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.aureliaHideClassName = undefined;
  exports.injectAureliaHideStyleAtHead = injectAureliaHideStyleAtHead;
  exports.injectAureliaHideStyleAtBoundary = injectAureliaHideStyleAtBoundary;
  var aureliaHideClassName = exports.aureliaHideClassName = 'aurelia-hide';

  var aureliaHideClass = '.' + aureliaHideClassName + ' { display:none !important; }';

  function injectAureliaHideStyleAtHead() {
    _aureliaPal.DOM.injectStyles(aureliaHideClass);
  }

  function injectAureliaHideStyleAtBoundary(domBoundary) {
    if (_aureliaPal.FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
      domBoundary.hasAureliaHideStyle = true;
      _aureliaPal.DOM.injectStyles(aureliaHideClass, domBoundary);
    }
  }
});
define('aurelia-templating-resources/hide',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal, _aureliaHideStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hide = undefined;

  

  var _dec, _dec2, _class;

  var Hide = exports.Hide = (_dec = (0, _aureliaTemplating.customAttribute)('hide'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
    function Hide(element, animator, domBoundary) {
      

      this.element = element;
      this.animator = animator;
      this.domBoundary = domBoundary;
    }

    Hide.prototype.created = function created() {
      (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
    };

    Hide.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      } else {
        this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      }
    };

    Hide.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Hide;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/sanitize-html',['exports', 'aurelia-binding', 'aurelia-dependency-injection', './html-sanitizer'], function (exports, _aureliaBinding, _aureliaDependencyInjection, _htmlSanitizer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SanitizeHTMLValueConverter = undefined;

  

  var _dec, _dec2, _class;

  var SanitizeHTMLValueConverter = exports.SanitizeHTMLValueConverter = (_dec = (0, _aureliaBinding.valueConverter)('sanitizeHTML'), _dec2 = (0, _aureliaDependencyInjection.inject)(_htmlSanitizer.HTMLSanitizer), _dec(_class = _dec2(_class = function () {
    function SanitizeHTMLValueConverter(sanitizer) {
      

      this.sanitizer = sanitizer;
    }

    SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
      if (untrustedMarkup === null || untrustedMarkup === undefined) {
        return null;
      }

      return this.sanitizer.sanitize(untrustedMarkup);
    };

    return SanitizeHTMLValueConverter;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/html-sanitizer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  var HTMLSanitizer = exports.HTMLSanitizer = function () {
    function HTMLSanitizer() {
      
    }

    HTMLSanitizer.prototype.sanitize = function sanitize(input) {
      return input.replace(SCRIPT_REGEX, '');
    };

    return HTMLSanitizer;
  }();
});
define('aurelia-templating-resources/replaceable',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Replaceable = undefined;

  

  var _dec, _dec2, _class;

  var Replaceable = exports.Replaceable = (_dec = (0, _aureliaTemplating.customAttribute)('replaceable'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function Replaceable(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.view = null;
    }

    Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
      if (this.view === null) {
        this.view = this.viewFactory.create();
        this.viewSlot.add(this.view);
      }

      this.view.bind(bindingContext, overrideContext);
    };

    Replaceable.prototype.unbind = function unbind() {
      this.view.unbind();
    };

    return Replaceable;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/focus',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Focus = undefined;

  

  var _dec, _dec2, _class;

  var Focus = exports.Focus = (_dec = (0, _aureliaTemplating.customAttribute)('focus', _aureliaBinding.bindingMode.twoWay), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTaskQueue.TaskQueue), _dec(_class = _dec2(_class = function () {
    function Focus(element, taskQueue) {
      var _this = this;

      

      this.element = element;
      this.taskQueue = taskQueue;
      this.isAttached = false;
      this.needsApply = false;

      this.focusListener = function (e) {
        _this.value = true;
      };
      this.blurListener = function (e) {
        if (_aureliaPal.DOM.activeElement !== _this.element) {
          _this.value = false;
        }
      };
    }

    Focus.prototype.valueChanged = function valueChanged(newValue) {
      if (this.isAttached) {
        this._apply();
      } else {
        this.needsApply = true;
      }
    };

    Focus.prototype._apply = function _apply() {
      var _this2 = this;

      if (this.value) {
        this.taskQueue.queueMicroTask(function () {
          if (_this2.value) {
            _this2.element.focus();
          }
        });
      } else {
        this.element.blur();
      }
    };

    Focus.prototype.attached = function attached() {
      this.isAttached = true;
      if (this.needsApply) {
        this.needsApply = false;
        this._apply();
      }
      this.element.addEventListener('focus', this.focusListener);
      this.element.addEventListener('blur', this.blurListener);
    };

    Focus.prototype.detached = function detached() {
      this.isAttached = false;
      this.element.removeEventListener('focus', this.focusListener);
      this.element.removeEventListener('blur', this.blurListener);
    };

    return Focus;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/css-resource',['exports', 'aurelia-templating', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-path', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaLoader, _aureliaDependencyInjection, _aureliaPath, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createCSSResource = _createCSSResource;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

  function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
      throw new Error('Failed loading required CSS file: ' + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
      var quote = p1.charAt(0);
      if (quote === '\'' || quote === '"') {
        p1 = p1.substr(1, p1.length - 2);
      }
      return 'url(\'' + (0, _aureliaPath.relativeToFile)(p1, address) + '\')';
    });
  }

  var CSSResource = function () {
    function CSSResource(address) {
      

      this.address = address;
      this._scoped = null;
      this._global = false;
      this._alreadyGloballyInjected = false;
    }

    CSSResource.prototype.initialize = function initialize(container, target) {
      this._scoped = new target(this);
    };

    CSSResource.prototype.register = function register(registry, name) {
      if (name === 'scoped') {
        registry.registerViewEngineHooks(this._scoped);
      } else {
        this._global = true;
      }
    };

    CSSResource.prototype.load = function load(container) {
      var _this = this;

      return container.get(_aureliaLoader.Loader).loadText(this.address).catch(function (err) {
        return null;
      }).then(function (text) {
        text = fixupCSSUrls(_this.address, text);
        _this._scoped.css = text;
        if (_this._global) {
          _this._alreadyGloballyInjected = true;
          _aureliaPal.DOM.injectStyles(text);
        }
      });
    };

    return CSSResource;
  }();

  var CSSViewEngineHooks = function () {
    function CSSViewEngineHooks(owner) {
      

      this.owner = owner;
      this.css = null;
    }

    CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
      if (instruction.targetShadowDOM) {
        _aureliaPal.DOM.injectStyles(this.css, content, true);
      } else if (_aureliaPal.FEATURE.scopedCSS) {
        var styleNode = _aureliaPal.DOM.injectStyles(this.css, content, true);
        styleNode.setAttribute('scoped', 'scoped');
      } else if (!this.owner._alreadyGloballyInjected) {
        _aureliaPal.DOM.injectStyles(this.css);
        this.owner._alreadyGloballyInjected = true;
      }
    };

    return CSSViewEngineHooks;
  }();

  function _createCSSResource(address) {
    var _dec, _class;

    var ViewCSS = (_dec = (0, _aureliaTemplating.resource)(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
      _inherits(ViewCSS, _CSSViewEngineHooks);

      function ViewCSS() {
        

        return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
      }

      return ViewCSS;
    }(CSSViewEngineHooks)) || _class);

    return ViewCSS;
  }
});
define('aurelia-templating-resources/binding-mode-behaviors',['exports', 'aurelia-binding', 'aurelia-metadata'], function (exports, _aureliaBinding, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = undefined;

  

  var _dec, _class, _dec2, _class2, _dec3, _class3;

  var modeBindingBehavior = {
    bind: function bind(binding, source, lookupFunctions) {
      binding.originalMode = binding.mode;
      binding.mode = this.mode;
    },
    unbind: function unbind(binding, source) {
      binding.mode = binding.originalMode;
      binding.originalMode = null;
    }
  };

  var OneTimeBindingBehavior = exports.OneTimeBindingBehavior = (_dec = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.oneTime;
  }) || _class);
  var OneWayBindingBehavior = exports.OneWayBindingBehavior = (_dec2 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.oneWay;
  }) || _class2);
  var TwoWayBindingBehavior = exports.TwoWayBindingBehavior = (_dec3 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.twoWay;
  }) || _class3);
});
define('aurelia-templating-resources/throttle-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThrottleBindingBehavior = undefined;

  

  function throttle(newValue) {
    var _this = this;

    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
      clearTimeout(state.timeoutId);
      state.timeoutId = null;
      state.last = +new Date();
      this.throttledMethod(newValue);
      return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
      state.timeoutId = setTimeout(function () {
        state.timeoutId = null;
        state.last = +new Date();
        _this.throttledMethod(state.newValue);
      }, state.delay - elapsed);
    }
  }

  var ThrottleBindingBehavior = exports.ThrottleBindingBehavior = function () {
    function ThrottleBindingBehavior() {
      
    }

    ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

      var methodToThrottle = 'updateTarget';
      if (binding.callSource) {
        methodToThrottle = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
          methodToThrottle = 'updateSource';
        }

      binding.throttledMethod = binding[methodToThrottle];
      binding.throttledMethod.originalName = methodToThrottle;

      binding[methodToThrottle] = throttle;

      binding.throttleState = {
        delay: delay,
        last: 0,
        timeoutId: null
      };
    };

    ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.throttledMethod.originalName;
      binding[methodToRestore] = binding.throttledMethod;
      binding.throttledMethod = null;
      clearTimeout(binding.throttleState.timeoutId);
      binding.throttleState = null;
    };

    return ThrottleBindingBehavior;
  }();
});
define('aurelia-templating-resources/debounce-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DebounceBindingBehavior = undefined;

  

  function debounce(newValue) {
    var _this = this;

    var state = this.debounceState;
    if (state.immediate) {
      state.immediate = false;
      this.debouncedMethod(newValue);
      return;
    }
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () {
      return _this.debouncedMethod(newValue);
    }, state.delay);
  }

  var DebounceBindingBehavior = exports.DebounceBindingBehavior = function () {
    function DebounceBindingBehavior() {
      
    }

    DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

      var methodToDebounce = 'updateTarget';
      if (binding.callSource) {
        methodToDebounce = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
          methodToDebounce = 'updateSource';
        }

      binding.debouncedMethod = binding[methodToDebounce];
      binding.debouncedMethod.originalName = methodToDebounce;

      binding[methodToDebounce] = debounce;

      binding.debounceState = {
        delay: delay,
        timeoutId: null,
        immediate: methodToDebounce === 'updateTarget' };
    };

    DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.debouncedMethod.originalName;
      binding[methodToRestore] = binding.debouncedMethod;
      binding.debouncedMethod = null;
      clearTimeout(binding.debounceState.timeoutId);
      binding.debounceState = null;
    };

    return DebounceBindingBehavior;
  }();
});
define('aurelia-templating-resources/signal-binding-behavior',['exports', './binding-signaler'], function (exports, _bindingSignaler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SignalBindingBehavior = undefined;

  

  var SignalBindingBehavior = exports.SignalBindingBehavior = function () {
    SignalBindingBehavior.inject = function inject() {
      return [_bindingSignaler.BindingSignaler];
    };

    function SignalBindingBehavior(bindingSignaler) {
      

      this.signals = bindingSignaler.signals;
    }

    SignalBindingBehavior.prototype.bind = function bind(binding, source) {
      if (!binding.updateTarget) {
        throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
      }
      if (arguments.length === 3) {
        var name = arguments[2];
        var bindings = this.signals[name] || (this.signals[name] = []);
        bindings.push(binding);
        binding.signalName = name;
      } else if (arguments.length > 3) {
        var names = Array.prototype.slice.call(arguments, 2);
        var i = names.length;
        while (i--) {
          var _name = names[i];
          var _bindings = this.signals[_name] || (this.signals[_name] = []);
          _bindings.push(binding);
        }
        binding.signalName = names;
      } else {
        throw new Error('Signal name is required.');
      }
    };

    SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var name = binding.signalName;
      binding.signalName = null;
      if (Array.isArray(name)) {
        var names = name;
        var i = names.length;
        while (i--) {
          var n = names[i];
          var bindings = this.signals[n];
          bindings.splice(bindings.indexOf(binding), 1);
        }
      } else {
        var _bindings2 = this.signals[name];
        _bindings2.splice(_bindings2.indexOf(binding), 1);
      }
    };

    return SignalBindingBehavior;
  }();
});
define('aurelia-templating-resources/binding-signaler',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BindingSignaler = undefined;

  

  var BindingSignaler = exports.BindingSignaler = function () {
    function BindingSignaler() {
      

      this.signals = {};
    }

    BindingSignaler.prototype.signal = function signal(name) {
      var bindings = this.signals[name];
      if (!bindings) {
        return;
      }
      var i = bindings.length;
      while (i--) {
        bindings[i].call(_aureliaBinding.sourceContext);
      }
    };

    return BindingSignaler;
  }();
});
define('aurelia-templating-resources/update-trigger-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UpdateTriggerBindingBehavior = undefined;

  

  var _class, _temp;

  var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
  var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

  var UpdateTriggerBindingBehavior = exports.UpdateTriggerBindingBehavior = (_temp = _class = function () {
    function UpdateTriggerBindingBehavior(eventManager) {
      

      this.eventManager = eventManager;
    }

    UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
      for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        events[_key - 2] = arguments[_key];
      }

      if (events.length === 0) {
        throw new Error(eventNamesRequired);
      }
      if (binding.mode !== _aureliaBinding.bindingMode.twoWay) {
        throw new Error(notApplicableMessage);
      }

      var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
      if (!targetObserver.handler) {
        throw new Error(notApplicableMessage);
      }
      binding.targetObserver = targetObserver;

      targetObserver.originalHandler = binding.targetObserver.handler;

      var handler = this.eventManager.createElementHandler(events);
      targetObserver.handler = handler;
    };

    UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
      binding.targetObserver.handler = binding.targetObserver.originalHandler;
      binding.targetObserver.originalHandler = null;
    };

    return UpdateTriggerBindingBehavior;
  }(), _class.inject = [_aureliaBinding.EventManager], _temp);
});
define('aurelia-templating-resources/html-resource-plugin',['exports', 'aurelia-templating', './dynamic-element'], function (exports, _aureliaTemplating, _dynamicElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getElementName = getElementName;
  exports.configure = configure;
  function getElementName(address) {
    return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
    );
  }

  function configure(config) {
    var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
    var loader = config.aurelia.loader;

    viewEngine.addResourcePlugin('.html', {
      'fetch': function fetch(address) {
        return loader.loadTemplate(address).then(function (registryEntry) {
          var _ref;

          var bindable = registryEntry.template.getAttribute('bindable');
          var elementName = getElementName(address);

          if (bindable) {
            bindable = bindable.split(',').map(function (x) {
              return x.trim();
            });
            registryEntry.template.removeAttribute('bindable');
          } else {
            bindable = [];
          }

          return _ref = {}, _ref[elementName] = (0, _dynamicElement._createDynamicElement)(elementName, address, bindable), _ref;
        });
      }
    });
  }
});
define('aurelia-templating-resources/dynamic-element',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createDynamicElement = _createDynamicElement;

  

  function _createDynamicElement(name, viewUrl, bindableNames) {
    var _dec, _dec2, _class;

    var DynamicElement = (_dec = (0, _aureliaTemplating.customElement)(name), _dec2 = (0, _aureliaTemplating.useView)(viewUrl), _dec(_class = _dec2(_class = function () {
      function DynamicElement() {
        
      }

      DynamicElement.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      return DynamicElement;
    }()) || _class) || _class);

    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
      (0, _aureliaTemplating.bindable)(bindableNames[i])(DynamicElement);
    }
    return DynamicElement;
  }
});
define('aurelia-validation/utilities',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Utilities = exports.Utilities = function () {
    function Utilities() {
      _classCallCheck(this, Utilities);
    }

    Utilities.getValue = function getValue(val) {
      if (val !== undefined && typeof val === 'function') {
        return val();
      }
      return val;
    };

    Utilities.isEmptyValue = function isEmptyValue(val) {
      if (val === undefined) {
        return true;
      }
      if (val === null) {
        return true;
      }
      if (val === '') {
        return true;
      }
      if (typeof val === 'string') {
        if (String.prototype.trim) {
          val = val.trim();
        } else {
          val = val.replace(/^\s+|\s+$/g, '');
        }
      }
      if (val.length !== undefined) {
        return val.length === 0;
      }
      return false;
    };

    return Utilities;
  }();
});
define('aurelia-validation/validation-config',['exports', './validation-locale', './strategies/twbootstrap-view-strategy'], function (exports, _validationLocale, _twbootstrapViewStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationConfig = exports.ValidationConfigDefaults = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationConfigDefaults = exports.ValidationConfigDefaults = function ValidationConfigDefaults() {
    _classCallCheck(this, ValidationConfigDefaults);
  };

  ValidationConfigDefaults._defaults = {
    debounceTimeout: 0,
    dependencies: [],
    locale: 'en-US',
    localeResources: 'aurelia-validation/resources/',
    viewStrategy: _twbootstrapViewStrategy.TWBootstrapViewStrategy.AppendToMessage,
    allPropertiesAreMandatory: false
  };
  ValidationConfigDefaults.defaults = function () {
    var defaults = {};
    Object.assign(defaults, ValidationConfigDefaults._defaults);
    return defaults;
  };

  var ValidationConfig = exports.ValidationConfig = function () {
    function ValidationConfig(innerConfig) {
      _classCallCheck(this, ValidationConfig);

      this.innerConfig = innerConfig;
      this.values = this.innerConfig ? {} : ValidationConfigDefaults.defaults();
      this.changedHandlers = new Map();
    }

    ValidationConfig.prototype.getValue = function getValue(identifier) {
      if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
        return this.values[identifier];
      }
      if (this.innerConfig !== null) {
        return this.innerConfig.getValue(identifier);
      }
      throw Error('Config not found: ' + identifier);
    };

    ValidationConfig.prototype.setValue = function setValue(identifier, value) {
      this.values[identifier] = value;
      return this;
    };

    ValidationConfig.prototype.onLocaleChanged = function onLocaleChanged(callback) {
      var _this = this;

      if (this.innerConfig !== undefined) {
        return this.innerConfig.onLocaleChanged(callback);
      }
      var id = ++ValidationConfig.uniqueListenerId;
      this.changedHandlers.set(id, callback);
      return function () {
        _this.changedHandlers.delete(id);
      };
    };

    ValidationConfig.prototype.getDebounceTimeout = function getDebounceTimeout() {
      return this.getValue('debounceTimeout');
    };

    ValidationConfig.prototype.useDebounceTimeout = function useDebounceTimeout(value) {
      return this.setValue('debounceTimeout', value);
    };

    ValidationConfig.prototype.getDependencies = function getDependencies() {
      return this.getValue('dependencies');
    };

    ValidationConfig.prototype.computedFrom = function computedFrom(dependencies) {
      var deps = dependencies;
      if (typeof dependencies === 'string') {
        deps = [];
        deps.push(dependencies);
      }
      return this.setValue('dependencies', deps);
    };

    ValidationConfig.prototype.useLocale = function useLocale(localeIdentifier) {
      this.setValue('locale', localeIdentifier);
      var callbacks = Array.from(this.changedHandlers.values());
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
      }
      return this;
    };

    ValidationConfig.prototype.locale = function locale() {
      return _validationLocale.ValidationLocale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
    };

    ValidationConfig.prototype.useViewStrategy = function useViewStrategy(viewStrategy) {
      return this.setValue('viewStrategy', viewStrategy);
    };

    ValidationConfig.prototype.getViewStrategy = function getViewStrategy() {
      return this.getValue('viewStrategy');
    };

    ValidationConfig.prototype.treatAllPropertiesAsMandatory = function treatAllPropertiesAsMandatory() {
      this.setValue('allPropertiesAreMandatory', true);
      return this;
    };

    ValidationConfig.prototype.treatAllPropertiesAsOptional = function treatAllPropertiesAsOptional() {
      this.setValue('allPropertiesAreMandatory', false);
      return this;
    };

    return ValidationConfig;
  }();

  ValidationConfig.uniqueListenerId = 0;
});
define('aurelia-validation/validation-locale',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationLocale = exports.ValidationLocale = function () {
    function ValidationLocale(defaults, data) {
      _classCallCheck(this, ValidationLocale);

      this.defaults = defaults;
      this.currentLocale = data;
    }

    ValidationLocale.prototype.getValueFor = function getValueFor(identifier, category) {
      var currentLocaleSetting = void 0;
      var defaultSetting = void 0;
      if (this.currentLocale && this.currentLocale[category]) {
        currentLocaleSetting = this.currentLocale[category][identifier];
        if (currentLocaleSetting !== undefined && currentLocaleSetting !== null) {
          return currentLocaleSetting;
        }
      }
      if (this.defaults[category]) {
        defaultSetting = this.defaults[category][identifier];
        if (defaultSetting !== undefined && defaultSetting !== null) {
          return defaultSetting;
        }
      }
      throw new Error('validation: I18N: Could not find: ' + identifier + ' in category: ' + category);
    };

    ValidationLocale.prototype.setting = function setting(settingIdentifier) {
      return this.getValueFor(settingIdentifier, 'settings');
    };

    ValidationLocale.prototype.translate = function translate(translationIdentifier, newValue, threshold) {
      var translation = this.getValueFor(translationIdentifier, 'messages');
      if (typeof translation === 'function') {
        return translation(newValue, threshold);
      }
      if (typeof translation === 'string') {
        return translation;
      }
      throw new Error('Validation message for ' + translationIdentifier + 'was in an unsupported format');
    };

    return ValidationLocale;
  }();

  var ValidationLocaleRepository = function () {
    function ValidationLocaleRepository() {
      _classCallCheck(this, ValidationLocaleRepository);

      this.default = null;
      this.instances = new Map();
      this.defaults = {
        settings: {
          'numericRegex': /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
        },
        messages: {}
      };
    }

    ValidationLocaleRepository.prototype.load = function load(localeIdentifier, basePath) {
      var _this = this;

      if (!basePath) {
        basePath = 'aurelia-validation/resources/';
      }
      return new Promise(function (resolve, reject) {
        if (_this.instances.has(localeIdentifier)) {
          var locale = _this.instances.get(localeIdentifier);
          resolve(locale);
        } else {
          System.import(basePath + localeIdentifier).then(function (resource) {
            var locale = _this.addLocale(localeIdentifier, resource.data);
            resolve(locale);
          });
        }
      });
    };

    ValidationLocaleRepository.prototype.addLocale = function addLocale(localeIdentifier, data) {
      var instance = new ValidationLocale(this.defaults, data);
      this.instances.set(localeIdentifier, instance);
      if (this.default === null) {
        this.default = instance;
      }
      return instance;
    };

    return ValidationLocaleRepository;
  }();

  ValidationLocale.Repository = new ValidationLocaleRepository();
});
define('aurelia-validation/strategies/twbootstrap-view-strategy',['exports', '../validation-view-strategy'], function (exports, _validationViewStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TWBootstrapViewStrategy = exports.TWBootstrapViewStrategyBase = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TWBootstrapViewStrategyBase = exports.TWBootstrapViewStrategyBase = function (_ValidationViewStrate) {
    _inherits(TWBootstrapViewStrategyBase, _ValidationViewStrate);

    function TWBootstrapViewStrategyBase(appendMessageToInput, appendMessageToLabel, helpBlockClass) {
      _classCallCheck(this, TWBootstrapViewStrategyBase);

      var _this = _possibleConstructorReturn(this, _ValidationViewStrate.call(this));

      _this.appendMessageToInput = appendMessageToInput;
      _this.appendMessageToLabel = appendMessageToLabel;
      _this.helpBlockClass = helpBlockClass;
      return _this;
    }

    TWBootstrapViewStrategyBase.prototype.searchFormGroup = function searchFormGroup(currentElement, currentDepth) {
      if (currentDepth === 5) {
        return null;
      }

      if (currentElement.classList && currentElement.classList.contains('form-group')) {
        return currentElement;
      }

      return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
    };

    TWBootstrapViewStrategyBase.prototype.findLabels = function findLabels(formGroup, inputId) {
      var labels = [];
      this.findLabelsRecursively(formGroup, inputId, labels, 0);
      return labels;
    };

    TWBootstrapViewStrategyBase.prototype.findLabelsRecursively = function findLabelsRecursively(currentElement, inputId, currentLabels, currentDepth) {
      if (currentDepth === 5) {
        return;
      }
      if (currentElement.nodeName === 'LABEL' && (currentElement.attributes.for && currentElement.attributes.for.value === inputId || !currentElement.attributes.for)) {
        currentLabels.push(currentElement);
      }
      for (var i = 0; i < currentElement.children.length; i++) {
        this.findLabelsRecursively(currentElement.children[i], inputId, currentLabels, 1 + currentDepth);
      }
    };

    TWBootstrapViewStrategyBase.prototype.appendMessageToElement = function appendMessageToElement(element, validationProperty) {
      var helpBlock = element.nextSibling;
      if (helpBlock) {
        if (!helpBlock.classList) {
          helpBlock = null;
        } else if (!helpBlock.classList.contains(this.helpBlockClass)) {
          helpBlock = null;
        }
      }

      if (!helpBlock) {
        helpBlock = document.createElement('p');
        helpBlock.classList.add('help-block');
        helpBlock.classList.add(this.helpBlockClass);
        if (element.nextSibling) {
          element.parentNode.insertBefore(helpBlock, element.nextSibling);
        } else {
          element.parentNode.appendChild(helpBlock);
        }
      }

      helpBlock.textContent = validationProperty ? validationProperty.message : '';
    };

    TWBootstrapViewStrategyBase.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
      var formGroup = this.searchFormGroup(currentElement, 0);
      if (formGroup === null) {
        return;
      }

      if (validationProperty && validationProperty.isDirty) {
        if (validationProperty.isValid) {
          formGroup.classList.remove('has-warning');
          formGroup.classList.add('has-success');
        } else {
          formGroup.classList.remove('has-success');
          formGroup.classList.add('has-warning');
        }
      } else {
        formGroup.classList.remove('has-warning');
        formGroup.classList.remove('has-success');
      }

      if (this.appendMessageToInput) {
        this.appendMessageToElement(currentElement, validationProperty);
      }

      if (this.appendMessageToLabel) {
        var labels = this.findLabels(formGroup, currentElement.id);
        for (var ii = 0; ii < labels.length; ii++) {
          var label = labels[ii];
          this.appendMessageToElement(label, validationProperty);
        }
      }
    };

    TWBootstrapViewStrategyBase.prototype.prepareElement = function prepareElement(validationProperty, element) {
      this.appendUIVisuals(null, element);
    };

    TWBootstrapViewStrategyBase.prototype.updateElement = function updateElement(validationProperty, element) {
      this.appendUIVisuals(validationProperty, element);
    };

    return TWBootstrapViewStrategyBase;
  }(_validationViewStrategy.ValidationViewStrategy);

  var TWBootstrapViewStrategy = exports.TWBootstrapViewStrategy = function TWBootstrapViewStrategy() {
    _classCallCheck(this, TWBootstrapViewStrategy);
  };

  TWBootstrapViewStrategy.AppendToInput = new TWBootstrapViewStrategyBase(true, false, 'aurelia-validation-message');
  TWBootstrapViewStrategy.AppendToMessage = new TWBootstrapViewStrategyBase(false, true, 'aurelia-validation-message');
});
define('aurelia-validation/validation-view-strategy',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationViewStrategy = exports.ValidationViewStrategy = function () {
    function ValidationViewStrategy() {
      _classCallCheck(this, ValidationViewStrategy);

      this.bindingPathAttributes = ['validate', 'value.bind', 'value.two-way'];
    }

    ValidationViewStrategy.prototype.getValidationProperty = function getValidationProperty(validation, element) {
      var atts = element.attributes;
      for (var i = 0; i < this.bindingPathAttributes.length; i++) {
        var attributeName = this.bindingPathAttributes[i];
        var bindingPath = void 0;
        var validationProperty = void 0;
        if (atts[attributeName]) {
          bindingPath = atts[attributeName].value.trim();
          if (bindingPath.indexOf('|') !== -1) {
            bindingPath = bindingPath.split('|')[0].trim();
          }

          validationProperty = validation.result.properties[bindingPath];
          if (attributeName === 'validate' && (validationProperty === null || validationProperty === undefined)) {
            validation.ensure(bindingPath);
            validationProperty = validation.result.properties[bindingPath];
          }
          return validationProperty;
        }
      }

      return null;
    };

    ValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
      throw Error('View strategy must implement prepareElement(validationProperty, element)');
    };

    ValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
      throw Error('View strategy must implement updateElement(validationProperty, element)');
    };

    return ValidationViewStrategy;
  }();
});
define('aurelia-validation/validation-result',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationResult = exports.ValidationResult = function () {
    function ValidationResult() {
      _classCallCheck(this, ValidationResult);

      this.isValid = true;
      this.properties = {};
    }

    ValidationResult.prototype.addProperty = function addProperty(name) {
      if (!this.properties[name]) {
        this.properties[name] = new ValidationResultProperty(this);
      }
      return this.properties[name];
    };

    ValidationResult.prototype.checkValidity = function checkValidity() {
      for (var propertyName in this.properties) {
        if (!this.properties[propertyName].isValid) {
          this.isValid = false;
          return;
        }
      }
      this.isValid = true;
    };

    ValidationResult.prototype.clear = function clear() {
      this.isValid = true;
    };

    return ValidationResult;
  }();

  var ValidationResultProperty = exports.ValidationResultProperty = function () {
    function ValidationResultProperty(group) {
      _classCallCheck(this, ValidationResultProperty);

      this.group = group;
      this.onValidateCallbacks = [];
      this.clear();
    }

    ValidationResultProperty.prototype.clear = function clear() {
      this.isValid = true;
      this.isDirty = false;
      this.message = '';
      this.failingRule = null;
      this.latestValue = null;
      this.notifyObserversOfChange();
    };

    ValidationResultProperty.prototype.onValidate = function onValidate(onValidateCallback) {
      this.onValidateCallbacks.push(onValidateCallback);
    };

    ValidationResultProperty.prototype.notifyObserversOfChange = function notifyObserversOfChange() {
      for (var i = 0; i < this.onValidateCallbacks.length; i++) {
        var callback = this.onValidateCallbacks[i];
        callback(this);
      }
    };

    ValidationResultProperty.prototype.setValidity = function setValidity(validationResponse, shouldBeDirty) {
      var notifyObservers = !this.isDirty && shouldBeDirty || this.isValid !== validationResponse.isValid || this.message !== validationResponse.message;

      if (shouldBeDirty) {
        this.isDirty = true;
      }
      this.message = validationResponse.message;
      this.failingRule = validationResponse.failingRule;
      this.isValid = validationResponse.isValid;
      this.latestValue = validationResponse.latestValue;
      if (this.isValid !== this.group.isValid) {
        this.group.checkValidity();
      }
      if (notifyObservers) {
        this.notifyObserversOfChange();
      }
    };

    return ValidationResultProperty;
  }();
});
define('aurelia-validation/validation-rules',['exports', './utilities', './validation-locale'], function (exports, _utilities, _validationLocale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.InCollectionValidationRule = exports.InEqualityWithOtherLabelValidationRule = exports.InEqualityValidationRule = exports.EqualityWithOtherLabelValidationRule = exports.EqualityValidationRule = exports.EqualityValidationRuleBase = exports.StrongPasswordValidationRule = exports.MediumPasswordValidationRule = exports.AlphaNumericOrWhitespaceValidationRule = exports.AlphaOrWhitespaceValidationRule = exports.AlphaValidationRule = exports.AlphaNumericValidationRule = exports.NoSpacesValidationRule = exports.DigitValidationRule = exports.BetweenValueValidationRule = exports.MaximumInclusiveValueValidationRule = exports.MaximumValueValidationRule = exports.MinimumInclusiveValueValidationRule = exports.MinimumValueValidationRule = exports.ContainsOnlyValidationRule = exports.RegexValidationRule = exports.NumericValidationRule = exports.CustomFunctionValidationRule = exports.BetweenLengthValidationRule = exports.MaximumLengthValidationRule = exports.MinimumLengthValidationRule = exports.EmailValidationRule = exports.URLValidationRule = exports.ValidationRule = undefined;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationRule = exports.ValidationRule = function () {
    function ValidationRule(threshold, onValidate, message, ruleName) {
      _classCallCheck(this, ValidationRule);

      this.onValidate = onValidate;
      this.threshold = threshold;
      this.message = message;
      this.errorMessage = null;
      this.ruleName = ruleName;
    }

    ValidationRule.prototype.withMessage = function withMessage(message) {
      this.message = message;
    };

    ValidationRule.prototype.explain = function explain() {
      return this.errorMessage;
    };

    ValidationRule.prototype.setResult = function setResult(result, currentValue, locale) {
      if (result === true || result === undefined || result === null || result === '') {
        this.errorMessage = null;
        return true;
      }
      if (typeof result === 'string') {
        this.errorMessage = result;
      } else {
        if (this.message) {
          if (typeof this.message === 'function') {
            this.errorMessage = this.message(currentValue, this.threshold);
          } else if (typeof this.message === 'string') {
            this.errorMessage = this.message;
          } else {
            throw Error('Unable to handle the error message:' + this.message);
          }
        } else {
          this.errorMessage = locale.translate(this.ruleName, currentValue, this.threshold);
        }
      }
      return false;
    };

    ValidationRule.prototype.validate = function validate(currentValue, locale) {
      var _this = this;

      if (locale === undefined) {
        locale = _validationLocale.ValidationLocale.Repository.default;
      }
      currentValue = _utilities.Utilities.getValue(currentValue);
      var result = this.onValidate(currentValue, this.threshold, locale);
      var promise = Promise.resolve(result);

      var nextPromise = promise.then(function (promiseResult) {
        return _this.setResult(promiseResult, currentValue, locale);
      }, function (promiseFailure) {
        if (typeof promiseFailure === 'string' && promiseFailure !== '') {
          return _this.setResult(promiseFailure, currentValue, locale);
        }
        return _this.setResult(false, currentValue, locale);
      });
      return nextPromise;
    };

    return ValidationRule;
  }();

  var URLValidationRule = exports.URLValidationRule = function (_ValidationRule) {
    _inherits(URLValidationRule, _ValidationRule);

    URLValidationRule.isIP = function isIP(str, version) {
      var ipv4Maybe = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
      var ipv6Block = /^[0-9A-F]{1,4}$/i;
      if (!version) {
        return this.isIP(str, 4) || this.isIP(str, 6);
      } else if (version === 4) {
        if (!ipv4Maybe.test(str)) {
          return false;
        }
        var parts = str.split('.').sort(function (a, b) {
          return a - b;
        });
        return parts[3] <= 255;
      } else if (version === 6) {
        var blocks = str.split(':');
        var foundOmissionBlock = false;
        if (blocks.length > 8) {
          return false;
        }

        if (str === '::') {
          return true;
        } else if (str.substr(0, 2) === '::') {
          blocks.shift();
          blocks.shift();
          foundOmissionBlock = true;
        } else if (str.substr(str.length - 2) === '::') {
          blocks.pop();
          blocks.pop();
          foundOmissionBlock = true;
        }
        for (var i = 0; i < blocks.length; ++i) {
          if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
            if (foundOmissionBlock) {
              return false;
            }
            foundOmissionBlock = true;
          } else if (!ipv6Block.test(blocks[i])) {
            return false;
          }
        }
        if (foundOmissionBlock) {
          return blocks.length >= 1;
        }
        return blocks.length === 8;
      }
      return false;
    };

    URLValidationRule.isFQDN = function isFQDN(str, options) {
      if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
      }
      var parts = str.split('.');
      if (options.require_tld) {
        var tld = parts.pop();
        if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
          return false;
        }
      }
      for (var part, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (options.allow_underscores) {
          if (part.indexOf('__') >= 0) {
            return false;
          }
          part = part.replace(/_/g, '');
        }
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-' || part.indexOf('---') >= 0) {
          return false;
        }
      }
      return true;
    };

    function URLValidationRule(startingThreshold) {
      _classCallCheck(this, URLValidationRule);

      var defaultUrlOptions = {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: false,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: true
      };
      if (startingThreshold === undefined) {
        startingThreshold = defaultUrlOptions;
      }
      return _possibleConstructorReturn(this, _ValidationRule.call(this, startingThreshold, function (newValue, threshold) {
        var url = newValue;
        var protocol = void 0;
        var auth = void 0;
        var host = void 0;
        var hostname = void 0;
        var port = void 0;
        var portStr = void 0;
        var split = void 0;
        if (!url || url.length >= 2083 || /\s/.test(url)) {
          return false;
        }
        if (url.indexOf('mailto:') === 0) {
          return false;
        }
        split = url.split('://');
        if (split.length > 1) {
          protocol = split.shift();
          if (threshold.protocols.indexOf(protocol) === -1) {
            return false;
          }
        } else if (threshold.require_protocol) {
          return false;
        } else if (threshold.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
          split[0] = url.substr(2);
        }
        url = split.join('://');
        split = url.split('#');
        url = split.shift();
        split = url.split('?');
        url = split.shift();
        split = url.split('/');
        url = split.shift();
        split = url.split('@');
        if (split.length > 1) {
          auth = split.shift();
          if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
            return false;
          }
        }
        hostname = split.join('@');
        split = hostname.split(':');
        host = split.shift();
        if (split.length) {
          portStr = split.join(':');
          port = parseInt(portStr, 10);
          if (!/^[0-9]+$/.test(portStr) || port <= 0 || port > 65535) {
            return false;
          }
        }
        if (!URLValidationRule.isIP(host) && !URLValidationRule.isFQDN(host, threshold) && host !== 'localhost') {
          return false;
        }
        if (threshold.host_whitelist && threshold.host_whitelist.indexOf(host) === -1) {
          return false;
        }
        if (threshold.host_blacklist && threshold.host_blacklist.indexOf(host) !== -1) {
          return false;
        }
        return true;
      }, null, 'URLValidationRule'));
    }

    return URLValidationRule;
  }(ValidationRule);

  var EmailValidationRule = exports.EmailValidationRule = function (_ValidationRule2) {
    _inherits(EmailValidationRule, _ValidationRule2);

    EmailValidationRule.testEmailUserUtf8Regex = function testEmailUserUtf8Regex(user) {
      var emailUserUtf8Regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))$/i;
      return emailUserUtf8Regex.test(user);
    };

    EmailValidationRule.isFQDN = function isFQDN(str) {
      var parts = str.split('.');
      for (var part, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (part.indexOf('__') >= 0) {
          return false;
        }
        part = part.replace(/_/g, '');
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
          return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-' || part.indexOf('---') >= 0) {
          return false;
        }
      }
      return true;
    };

    function EmailValidationRule() {
      _classCallCheck(this, EmailValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule2.call(this, null, function (newValue, threshold) {
        if (/\s/.test(newValue)) {
          return false;
        }
        var parts = newValue.split('@');
        var domain = parts.pop();
        var user = parts.join('@');

        if (!EmailValidationRule.isFQDN(domain)) {
          return false;
        }
        return EmailValidationRule.testEmailUserUtf8Regex(user);
      }, null, 'EmailValidationRule'));
    }

    return EmailValidationRule;
  }(ValidationRule);

  var MinimumLengthValidationRule = exports.MinimumLengthValidationRule = function (_ValidationRule3) {
    _inherits(MinimumLengthValidationRule, _ValidationRule3);

    function MinimumLengthValidationRule(minimumLength) {
      _classCallCheck(this, MinimumLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule3.call(this, minimumLength, function (newValue, minLength) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length >= minLength;
      }, null, 'MinimumLengthValidationRule'));
    }

    return MinimumLengthValidationRule;
  }(ValidationRule);

  var MaximumLengthValidationRule = exports.MaximumLengthValidationRule = function (_ValidationRule4) {
    _inherits(MaximumLengthValidationRule, _ValidationRule4);

    function MaximumLengthValidationRule(maximumLength) {
      _classCallCheck(this, MaximumLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule4.call(this, maximumLength, function (newValue, maxLength) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length <= maxLength;
      }, null, 'MaximumLengthValidationRule'));
    }

    return MaximumLengthValidationRule;
  }(ValidationRule);

  var BetweenLengthValidationRule = exports.BetweenLengthValidationRule = function (_ValidationRule5) {
    _inherits(BetweenLengthValidationRule, _ValidationRule5);

    function BetweenLengthValidationRule(minimumLength, maximumLength) {
      _classCallCheck(this, BetweenLengthValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule5.call(this, { minimumLength: minimumLength, maximumLength: maximumLength }, function (newValue, threshold) {
        newValue = typeof newValue === 'number' ? newValue.toString() : newValue;
        return newValue.length !== undefined && newValue.length >= threshold.minimumLength && newValue.length <= threshold.maximumLength;
      }, null, 'BetweenLengthValidationRule'));
    }

    return BetweenLengthValidationRule;
  }(ValidationRule);

  var CustomFunctionValidationRule = exports.CustomFunctionValidationRule = function (_ValidationRule6) {
    _inherits(CustomFunctionValidationRule, _ValidationRule6);

    function CustomFunctionValidationRule(customFunction, threshold) {
      _classCallCheck(this, CustomFunctionValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule6.call(this, threshold, customFunction, null, 'CustomFunctionValidationRule'));
    }

    return CustomFunctionValidationRule;
  }(ValidationRule);

  var NumericValidationRule = exports.NumericValidationRule = function (_ValidationRule7) {
    _inherits(NumericValidationRule, _ValidationRule7);

    function NumericValidationRule() {
      _classCallCheck(this, NumericValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule7.call(this, null, function (newValue, threshold, locale) {
        var numericRegex = locale.setting('numericRegex');
        var floatValue = parseFloat(newValue);
        return !Number.isNaN(parseFloat(newValue)) && Number.isFinite(floatValue) && numericRegex.test(newValue);
      }, null, 'NumericValidationRule'));
    }

    return NumericValidationRule;
  }(ValidationRule);

  var RegexValidationRule = exports.RegexValidationRule = function (_ValidationRule8) {
    _inherits(RegexValidationRule, _ValidationRule8);

    function RegexValidationRule(startingRegex, ruleName) {
      _classCallCheck(this, RegexValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule8.call(this, startingRegex, function (newValue, regex) {
        return regex.test(newValue);
      }, null, ruleName || 'RegexValidationRule'));
    }

    return RegexValidationRule;
  }(ValidationRule);

  var ContainsOnlyValidationRule = exports.ContainsOnlyValidationRule = function (_RegexValidationRule) {
    _inherits(ContainsOnlyValidationRule, _RegexValidationRule);

    function ContainsOnlyValidationRule(regex) {
      _classCallCheck(this, ContainsOnlyValidationRule);

      return _possibleConstructorReturn(this, _RegexValidationRule.call(this, regex, 'ContainsOnlyValidationRule'));
    }

    return ContainsOnlyValidationRule;
  }(RegexValidationRule);

  var MinimumValueValidationRule = exports.MinimumValueValidationRule = function (_ValidationRule9) {
    _inherits(MinimumValueValidationRule, _ValidationRule9);

    function MinimumValueValidationRule(minimumValue) {
      _classCallCheck(this, MinimumValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule9.call(this, minimumValue, function (newValue, minValue) {
        return _utilities.Utilities.getValue(minValue) < newValue;
      }, null, 'MinimumValueValidationRule'));
    }

    return MinimumValueValidationRule;
  }(ValidationRule);

  var MinimumInclusiveValueValidationRule = exports.MinimumInclusiveValueValidationRule = function (_ValidationRule10) {
    _inherits(MinimumInclusiveValueValidationRule, _ValidationRule10);

    function MinimumInclusiveValueValidationRule(minimumValue) {
      _classCallCheck(this, MinimumInclusiveValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule10.call(this, minimumValue, function (newValue, minValue) {
        return _utilities.Utilities.getValue(minValue) <= newValue;
      }, null, 'MinimumInclusiveValueValidationRule'));
    }

    return MinimumInclusiveValueValidationRule;
  }(ValidationRule);

  var MaximumValueValidationRule = exports.MaximumValueValidationRule = function (_ValidationRule11) {
    _inherits(MaximumValueValidationRule, _ValidationRule11);

    function MaximumValueValidationRule(maximumValue) {
      _classCallCheck(this, MaximumValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule11.call(this, maximumValue, function (newValue, maxValue) {
        return newValue < _utilities.Utilities.getValue(maxValue);
      }, null, 'MaximumValueValidationRule'));
    }

    return MaximumValueValidationRule;
  }(ValidationRule);

  var MaximumInclusiveValueValidationRule = exports.MaximumInclusiveValueValidationRule = function (_ValidationRule12) {
    _inherits(MaximumInclusiveValueValidationRule, _ValidationRule12);

    function MaximumInclusiveValueValidationRule(maximumValue) {
      _classCallCheck(this, MaximumInclusiveValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule12.call(this, maximumValue, function (newValue, maxValue) {
        return newValue <= _utilities.Utilities.getValue(maxValue);
      }, null, 'MaximumInclusiveValueValidationRule'));
    }

    return MaximumInclusiveValueValidationRule;
  }(ValidationRule);

  var BetweenValueValidationRule = exports.BetweenValueValidationRule = function (_ValidationRule13) {
    _inherits(BetweenValueValidationRule, _ValidationRule13);

    function BetweenValueValidationRule(minimumValue, maximumValue) {
      _classCallCheck(this, BetweenValueValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule13.call(this, { minimumValue: minimumValue, maximumValue: maximumValue }, function (newValue, threshold) {
        return _utilities.Utilities.getValue(threshold.minimumValue) <= newValue && newValue <= _utilities.Utilities.getValue(threshold.maximumValue);
      }, null, 'BetweenValueValidationRule'));
    }

    return BetweenValueValidationRule;
  }(ValidationRule);

  var DigitValidationRule = exports.DigitValidationRule = function (_ValidationRule14) {
    _inherits(DigitValidationRule, _ValidationRule14);

    function DigitValidationRule() {
      _classCallCheck(this, DigitValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule14.call(this, null, function (newValue, threshold) {
        return (/^\d+$/.test(newValue)
        );
      }, null, 'DigitValidationRule'));
    }

    return DigitValidationRule;
  }(ValidationRule);

  var NoSpacesValidationRule = exports.NoSpacesValidationRule = function (_ValidationRule15) {
    _inherits(NoSpacesValidationRule, _ValidationRule15);

    function NoSpacesValidationRule() {
      _classCallCheck(this, NoSpacesValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule15.call(this, null, function (newValue, threshold) {
        return (/^\S*$/.test(newValue)
        );
      }, null, 'NoSpacesValidationRule'));
    }

    return NoSpacesValidationRule;
  }(ValidationRule);

  var AlphaNumericValidationRule = exports.AlphaNumericValidationRule = function (_ValidationRule16) {
    _inherits(AlphaNumericValidationRule, _ValidationRule16);

    function AlphaNumericValidationRule() {
      _classCallCheck(this, AlphaNumericValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule16.call(this, null, function (newValue, threshold) {
        return (/^[a-z0-9]+$/i.test(newValue)
        );
      }, null, 'AlphaNumericValidationRule'));
    }

    return AlphaNumericValidationRule;
  }(ValidationRule);

  var AlphaValidationRule = exports.AlphaValidationRule = function (_ValidationRule17) {
    _inherits(AlphaValidationRule, _ValidationRule17);

    function AlphaValidationRule() {
      _classCallCheck(this, AlphaValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule17.call(this, null, function (newValue, threshold) {
        return (/^[a-z]+$/i.test(newValue)
        );
      }, null, 'AlphaValidationRule'));
    }

    return AlphaValidationRule;
  }(ValidationRule);

  var AlphaOrWhitespaceValidationRule = exports.AlphaOrWhitespaceValidationRule = function (_ValidationRule18) {
    _inherits(AlphaOrWhitespaceValidationRule, _ValidationRule18);

    function AlphaOrWhitespaceValidationRule() {
      _classCallCheck(this, AlphaOrWhitespaceValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule18.call(this, null, function (newValue, threshold) {
        return (/^[a-z\s]+$/i.test(newValue)
        );
      }, null, 'AlphaOrWhitespaceValidationRule'));
    }

    return AlphaOrWhitespaceValidationRule;
  }(ValidationRule);

  var AlphaNumericOrWhitespaceValidationRule = exports.AlphaNumericOrWhitespaceValidationRule = function (_ValidationRule19) {
    _inherits(AlphaNumericOrWhitespaceValidationRule, _ValidationRule19);

    function AlphaNumericOrWhitespaceValidationRule() {
      _classCallCheck(this, AlphaNumericOrWhitespaceValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule19.call(this, null, function (newValue, threshold) {
        return (/^[a-z0-9\s]+$/i.test(newValue)
        );
      }, null, 'AlphaNumericOrWhitespaceValidationRule'));
    }

    return AlphaNumericOrWhitespaceValidationRule;
  }(ValidationRule);

  var MediumPasswordValidationRule = exports.MediumPasswordValidationRule = function (_ValidationRule20) {
    _inherits(MediumPasswordValidationRule, _ValidationRule20);

    function MediumPasswordValidationRule(minimumComplexityLevel, ruleName) {
      _classCallCheck(this, MediumPasswordValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule20.call(this, minimumComplexityLevel ? minimumComplexityLevel : 3, function (newValue, threshold) {
        if (typeof newValue !== 'string') {
          return false;
        }
        var strength = 0;
        strength += /[A-Z]+/.test(newValue) ? 1 : 0;
        strength += /[a-z]+/.test(newValue) ? 1 : 0;
        strength += /[0-9]+/.test(newValue) ? 1 : 0;
        strength += /[\W]+/.test(newValue) ? 1 : 0;
        return strength >= threshold;
      }, null, ruleName || 'MediumPasswordValidationRule'));
    }

    return MediumPasswordValidationRule;
  }(ValidationRule);

  var StrongPasswordValidationRule = exports.StrongPasswordValidationRule = function (_MediumPasswordValida) {
    _inherits(StrongPasswordValidationRule, _MediumPasswordValida);

    function StrongPasswordValidationRule() {
      _classCallCheck(this, StrongPasswordValidationRule);

      return _possibleConstructorReturn(this, _MediumPasswordValida.call(this, 4, 'StrongPasswordValidationRule'));
    }

    return StrongPasswordValidationRule;
  }(MediumPasswordValidationRule);

  var EqualityValidationRuleBase = exports.EqualityValidationRuleBase = function (_ValidationRule21) {
    _inherits(EqualityValidationRuleBase, _ValidationRule21);

    function EqualityValidationRuleBase(startingOtherValue, equality, otherValueLabel, ruleName) {
      _classCallCheck(this, EqualityValidationRuleBase);

      return _possibleConstructorReturn(this, _ValidationRule21.call(this, {
        otherValue: startingOtherValue,
        equality: equality,
        otherValueLabel: otherValueLabel
      }, function (newValue, threshold) {
        var otherValue = _utilities.Utilities.getValue(threshold.otherValue);
        if (newValue instanceof Date && otherValue instanceof Date) {
          return threshold.equality === (newValue.getTime() === otherValue.getTime());
        }
        return threshold.equality === (newValue === otherValue);
      }, null, ruleName || 'EqualityValidationRuleBase'));
    }

    return EqualityValidationRuleBase;
  }(ValidationRule);

  var EqualityValidationRule = exports.EqualityValidationRule = function (_EqualityValidationRu) {
    _inherits(EqualityValidationRule, _EqualityValidationRu);

    function EqualityValidationRule(otherValue) {
      _classCallCheck(this, EqualityValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu.call(this, otherValue, true, null, 'EqualityValidationRule'));
    }

    return EqualityValidationRule;
  }(EqualityValidationRuleBase);

  var EqualityWithOtherLabelValidationRule = exports.EqualityWithOtherLabelValidationRule = function (_EqualityValidationRu2) {
    _inherits(EqualityWithOtherLabelValidationRule, _EqualityValidationRu2);

    function EqualityWithOtherLabelValidationRule(otherValue, otherLabel) {
      _classCallCheck(this, EqualityWithOtherLabelValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu2.call(this, otherValue, true, otherLabel, 'EqualityWithOtherLabelValidationRule'));
    }

    return EqualityWithOtherLabelValidationRule;
  }(EqualityValidationRuleBase);

  var InEqualityValidationRule = exports.InEqualityValidationRule = function (_EqualityValidationRu3) {
    _inherits(InEqualityValidationRule, _EqualityValidationRu3);

    function InEqualityValidationRule(otherValue) {
      _classCallCheck(this, InEqualityValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu3.call(this, otherValue, false, null, 'InEqualityValidationRule'));
    }

    return InEqualityValidationRule;
  }(EqualityValidationRuleBase);

  var InEqualityWithOtherLabelValidationRule = exports.InEqualityWithOtherLabelValidationRule = function (_EqualityValidationRu4) {
    _inherits(InEqualityWithOtherLabelValidationRule, _EqualityValidationRu4);

    function InEqualityWithOtherLabelValidationRule(otherValue, otherLabel) {
      _classCallCheck(this, InEqualityWithOtherLabelValidationRule);

      return _possibleConstructorReturn(this, _EqualityValidationRu4.call(this, otherValue, false, otherLabel, 'InEqualityWithOtherLabelValidationRule'));
    }

    return InEqualityWithOtherLabelValidationRule;
  }(EqualityValidationRuleBase);

  var InCollectionValidationRule = exports.InCollectionValidationRule = function (_ValidationRule22) {
    _inherits(InCollectionValidationRule, _ValidationRule22);

    function InCollectionValidationRule(startingCollection) {
      _classCallCheck(this, InCollectionValidationRule);

      return _possibleConstructorReturn(this, _ValidationRule22.call(this, startingCollection, function (newValue, threshold) {
        var collection = _utilities.Utilities.getValue(threshold);
        for (var i = 0; i < collection.length; i++) {
          if (newValue === collection[i]) {
            return true;
          }
        }
        return false;
      }, null, 'InCollectionValidationRule'));
    }

    return InCollectionValidationRule;
  }(ValidationRule);
});
define('aurelia-validation/validation',['exports', 'aurelia-binding', './validation-group', 'aurelia-dependency-injection', './validation-config'], function (exports, _aureliaBinding, _validationGroup, _aureliaDependencyInjection, _validationConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Validation = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Validation = exports.Validation = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaBinding.ObserverLocator), _dec(_class = function () {
    function Validation(observerLocator, validationConfig) {
      _classCallCheck(this, Validation);

      this.observerLocator = observerLocator;
      this.config = validationConfig ? validationConfig : Validation.defaults;
    }

    Validation.prototype.on = function on(subject, configCallback) {
      var conf = new _validationConfig.ValidationConfig(this.config);
      if (configCallback !== null && configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(conf);
      }
      return new _validationGroup.ValidationGroup(subject, this.observerLocator, conf);
    };

    Validation.prototype.onBreezeEntity = function onBreezeEntity(breezeEntity, configCallback) {
      var validation = this.on(breezeEntity, configCallback);
      validation.onBreezeEntity();
      return validation;
    };

    return Validation;
  }()) || _class);

  Validation.defaults = new _validationConfig.ValidationConfig();
});
define('aurelia-validation/validation-group',['exports', 'aurelia-metadata', './validation-group-builder', './validation-result', './decorators'], function (exports, _aureliaMetadata, _validationGroupBuilder, _validationResult, _decorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationGroup = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationGroup = exports.ValidationGroup = function () {
    function ValidationGroup(subject, observerLocator, config) {
      var _this = this;

      _classCallCheck(this, ValidationGroup);

      var validationMetadata = void 0;
      this.result = new _validationResult.ValidationResult();
      this.subject = subject;
      this.validationProperties = [];
      this.config = config;
      this.builder = new _validationGroupBuilder.ValidationGroupBuilder(observerLocator, this);
      this.onValidateCallbacks = [];
      this.onPropertyValidationCallbacks = [];
      this.isValidating = false;
      this.onDestroy = config.onLocaleChanged(function () {
        _this.validate(false, true);
      });
      validationMetadata = _aureliaMetadata.metadata.getOwn(_decorators.ValidationMetadata.metadataKey, Object.getPrototypeOf(this.subject));
      if (validationMetadata) {
        validationMetadata.setup(this);
      }
    }

    ValidationGroup.prototype.destroy = function destroy() {
      this.validationProperties.forEach(function (prop) {
        prop.destroy();
      });
      this.onDestroy();
    };

    ValidationGroup.prototype.clear = function clear() {
      this.validationProperties.forEach(function (prop) {
        prop.clear();
      });
      this.result.clear();
    };

    ValidationGroup.prototype.onBreezeEntity = function onBreezeEntity() {
      var _this2 = this;

      var breezeEntity = this.subject;
      var me = this;
      var errors = void 0;
      this.onPropertyValidate(function (propertyBindingPath) {
        _this2.passes(function () {
          breezeEntity.entityAspect.validateProperty(propertyBindingPath);
          errors = breezeEntity.entityAspect.getValidationErrors(propertyBindingPath);
          if (errors.length === 0) {
            return true;
          }
          return errors[0].errorMessage;
        });
      });
      this.onValidate(function () {
        breezeEntity.entityAspect.validateEntity();
        return {};
      });
      breezeEntity.entityAspect.validationErrorsChanged.subscribe(function () {
        breezeEntity.entityAspect.getValidationErrors().forEach(function (validationError) {
          var propertyName = validationError.propertyName;
          var currentResultProp = void 0;
          if (!me.result.properties[propertyName]) {
            me.ensure(propertyName);
          }
          currentResultProp = me.result.addProperty(propertyName);
          if (currentResultProp.isValid) {
            currentResultProp.setValidity({
              isValid: false,
              message: validationError.errorMessage,
              failingRule: 'breeze',
              latestValue: currentResultProp.latestValue
            }, true);
          }
        });
      });
    };

    ValidationGroup.prototype.validate = function validate() {
      var _this3 = this;

      var forceDirty = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      var forceExecution = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      this.isValidating = true;
      var promise = Promise.resolve(true);

      var _loop = function _loop(i) {
        var validatorProperty = _this3.validationProperties[i];
        promise = promise.then(function () {
          return validatorProperty.validateCurrentValue(forceDirty, forceExecution);
        });
      };

      for (var i = this.validationProperties.length - 1; i >= 0; i--) {
        _loop(i);
      }

      promise = promise.catch(function () {
        throw Error('Should never get here: a validation property should always resolve to true/false!');
      });
      this.onValidateCallbacks.forEach(function (onValidateCallback) {
        promise = promise.then(function () {
          return _this3.config.locale();
        }).then(function (locale) {
          return Promise.resolve(onValidateCallback.validationFunction()).then(function (callbackResult) {
            for (var prop in callbackResult) {
              var resultProp = void 0;
              var result = void 0;
              var newPropResult = void 0;
              if (!_this3.result.properties[prop]) {
                _this3.ensure(prop);
              }
              resultProp = _this3.result.addProperty(prop);
              result = callbackResult[prop];
              newPropResult = {
                latestValue: resultProp.latestValue
              };
              if (result === true || result === null || result === '') {
                if (!resultProp.isValid && resultProp.failingRule === 'onValidateCallback') {
                  newPropResult.failingRule = null;
                  newPropResult.message = '';
                  newPropResult.isValid = true;
                  resultProp.setValidity(newPropResult, true);
                }
              } else {
                if (resultProp.isValid) {
                  newPropResult.failingRule = 'onValidateCallback';
                  newPropResult.isValid = false;
                  if (typeof result === 'string') {
                    newPropResult.message = result;
                  } else {
                    newPropResult.message = locale.translate(newPropResult.failingRule);
                  }
                  resultProp.setValidity(newPropResult, true);
                }
              }
            }
            _this3.result.checkValidity();
          }, function (a, b, c, d, e) {
            _this3.result.isValid = false;
            if (onValidateCallback.validationFunctionFailedCallback) {
              onValidateCallback.validationFunctionFailedCallback(a, b, c, d, e);
            }
          });
        });
      });
      promise = promise.then(function () {
        _this3.isValidating = false;
        if (_this3.result.isValid) {
          return Promise.resolve(_this3.result);
        }
        return Promise.reject(_this3.result);
      });
      return promise;
    };

    ValidationGroup.prototype.onValidate = function onValidate(validationFunction, validationFunctionFailedCallback) {
      this.onValidateCallbacks.push({ validationFunction: validationFunction, validationFunctionFailedCallback: validationFunctionFailedCallback });
      return this;
    };

    ValidationGroup.prototype.onPropertyValidate = function onPropertyValidate(validationFunction) {
      this.onPropertyValidationCallbacks.push(validationFunction);
      return this;
    };

    ValidationGroup.prototype.ensure = function ensure(bindingPath, configCallback) {
      this.builder.ensure(bindingPath, configCallback);
      this.onPropertyValidationCallbacks.forEach(function (callback) {
        callback(bindingPath);
      });
      return this;
    };

    ValidationGroup.prototype.isNotEmpty = function isNotEmpty() {
      return this.builder.isNotEmpty();
    };

    ValidationGroup.prototype.canBeEmpty = function canBeEmpty() {
      return this.builder.canBeEmpty();
    };

    ValidationGroup.prototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(minimumValue) {
      return this.builder.isGreaterThanOrEqualTo(minimumValue);
    };

    ValidationGroup.prototype.isGreaterThan = function isGreaterThan(minimumValue) {
      return this.builder.isGreaterThan(minimumValue);
    };

    ValidationGroup.prototype.isBetween = function isBetween(minimumValue, maximumValue) {
      return this.builder.isBetween(minimumValue, maximumValue);
    };

    ValidationGroup.prototype.isLessThanOrEqualTo = function isLessThanOrEqualTo(maximumValue) {
      return this.builder.isLessThanOrEqualTo(maximumValue);
    };

    ValidationGroup.prototype.isLessThan = function isLessThan(maximumValue) {
      return this.builder.isLessThan(maximumValue);
    };

    ValidationGroup.prototype.isEqualTo = function isEqualTo(otherValue, otherValueLabel) {
      return this.builder.isEqualTo(otherValue, otherValueLabel);
    };

    ValidationGroup.prototype.isNotEqualTo = function isNotEqualTo(otherValue, otherValueLabel) {
      return this.builder.isNotEqualTo(otherValue, otherValueLabel);
    };

    ValidationGroup.prototype.isEmail = function isEmail() {
      return this.builder.isEmail();
    };

    ValidationGroup.prototype.isURL = function isURL() {
      return this.builder.isURL();
    };

    ValidationGroup.prototype.isIn = function isIn(collection) {
      return this.builder.isIn(collection);
    };

    ValidationGroup.prototype.hasMinLength = function hasMinLength(minimumValue) {
      return this.builder.hasMinLength(minimumValue);
    };

    ValidationGroup.prototype.hasMaxLength = function hasMaxLength(maximumValue) {
      return this.builder.hasMaxLength(maximumValue);
    };

    ValidationGroup.prototype.hasLengthBetween = function hasLengthBetween(minimumValue, maximumValue) {
      return this.builder.hasLengthBetween(minimumValue, maximumValue);
    };

    ValidationGroup.prototype.isNumber = function isNumber() {
      return this.builder.isNumber();
    };

    ValidationGroup.prototype.containsNoSpaces = function containsNoSpaces() {
      return this.builder.containsNoSpaces();
    };

    ValidationGroup.prototype.containsOnlyDigits = function containsOnlyDigits() {
      return this.builder.containsOnlyDigits();
    };

    ValidationGroup.prototype.containsOnly = function containsOnly(regex) {
      return this.builder.containsOnly(regex);
    };

    ValidationGroup.prototype.containsOnlyAlpha = function containsOnlyAlpha() {
      return this.builder.containsOnlyAlpha();
    };

    ValidationGroup.prototype.containsOnlyAlphaOrWhitespace = function containsOnlyAlphaOrWhitespace() {
      return this.builder.containsOnlyAlphaOrWhitespace();
    };

    ValidationGroup.prototype.containsOnlyLetters = function containsOnlyLetters() {
      return this.builder.containsOnlyAlpha();
    };

    ValidationGroup.prototype.containsOnlyLettersOrWhitespace = function containsOnlyLettersOrWhitespace() {
      return this.builder.containsOnlyAlphaOrWhitespace();
    };

    ValidationGroup.prototype.containsOnlyAlphanumerics = function containsOnlyAlphanumerics() {
      return this.builder.containsOnlyAlphanumerics();
    };

    ValidationGroup.prototype.containsOnlyAlphanumericsOrWhitespace = function containsOnlyAlphanumericsOrWhitespace() {
      return this.builder.containsOnlyAlphanumericsOrWhitespace();
    };

    ValidationGroup.prototype.isStrongPassword = function isStrongPassword(minimumComplexityLevel) {
      return this.builder.isStrongPassword(minimumComplexityLevel);
    };

    ValidationGroup.prototype.matches = function matches(regex) {
      return this.builder.matches(regex);
    };

    ValidationGroup.prototype.passes = function passes(customFunction, threshold) {
      return this.builder.passes(customFunction, threshold);
    };

    ValidationGroup.prototype.passesRule = function passesRule(validationRule) {
      return this.builder.passesRule(validationRule);
    };

    ValidationGroup.prototype.if = function _if(conditionExpression, threshold) {
      return this.builder.if(conditionExpression, threshold);
    };

    ValidationGroup.prototype.else = function _else() {
      return this.builder.else();
    };

    ValidationGroup.prototype.endIf = function endIf() {
      return this.builder.endIf();
    };

    ValidationGroup.prototype.switch = function _switch(conditionExpression) {
      return this.builder.switch(conditionExpression);
    };

    ValidationGroup.prototype.case = function _case(caseLabel) {
      return this.builder.case(caseLabel);
    };

    ValidationGroup.prototype.default = function _default() {
      return this.builder.default();
    };

    ValidationGroup.prototype.endSwitch = function endSwitch() {
      return this.builder.endSwitch();
    };

    ValidationGroup.prototype.withMessage = function withMessage(message) {
      return this.builder.withMessage(message);
    };

    return ValidationGroup;
  }();
});
define('aurelia-validation/validation-group-builder',['exports', './validation-rules-collection', './validation-property', './validation-config', './validation-rules'], function (exports, _validationRulesCollection, _validationProperty, _validationConfig, _validationRules) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationGroupBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationGroupBuilder = exports.ValidationGroupBuilder = function () {
    function ValidationGroupBuilder(observerLocator, validationGroup) {
      _classCallCheck(this, ValidationGroupBuilder);

      this.observerLocator = observerLocator;
      this.validationRuleCollections = [];
      this.validationGroup = validationGroup;
    }

    ValidationGroupBuilder.prototype.ensure = function ensure(propertyName, configurationCallback) {
      var newValidationProperty = null;
      this.validationRuleCollections = [];

      for (var i = 0; i < this.validationGroup.validationProperties.length; i++) {
        if (this.validationGroup.validationProperties[i].propertyName === propertyName) {
          newValidationProperty = this.validationGroup.validationProperties[i];
          if (configurationCallback !== undefined && typeof configurationCallback === 'function') {
            throw Error('When creating validation rules on binding path ' + propertyName + ' a configuration callback function was provided, but validation rules have previously already been instantiated for this binding path');
          }
          break;
        }
      }
      if (newValidationProperty === null) {
        var propertyResult = this.validationGroup.result.addProperty(propertyName);
        var config = new _validationConfig.ValidationConfig(this.validationGroup.config);
        if (configurationCallback !== undefined && typeof configurationCallback === 'function') {
          configurationCallback(config);
        }
        newValidationProperty = new _validationProperty.ValidationProperty(this.observerLocator, propertyName, this.validationGroup, propertyResult, config);
        this.validationGroup.validationProperties.push(newValidationProperty);
      }
      this.validationRuleCollections.unshift(newValidationProperty.collectionOfValidationRules);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.isNotEmpty = function isNotEmpty() {
      this.validationRuleCollections[0].isNotEmpty();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.canBeEmpty = function canBeEmpty() {
      this.validationRuleCollections[0].canBeEmpty();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.isGreaterThan = function isGreaterThan(minimumValue) {
      return this.passesRule(new _validationRules.MinimumValueValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(minimumValue) {
      return this.passesRule(new _validationRules.MinimumInclusiveValueValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.isBetween = function isBetween(minimumValue, maximumValue) {
      return this.passesRule(new _validationRules.BetweenValueValidationRule(minimumValue, maximumValue));
    };

    ValidationGroupBuilder.prototype.isIn = function isIn(collection) {
      return this.passesRule(new _validationRules.InCollectionValidationRule(collection));
    };

    ValidationGroupBuilder.prototype.isLessThan = function isLessThan(maximumValue) {
      return this.passesRule(new _validationRules.MaximumValueValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.isLessThanOrEqualTo = function isLessThanOrEqualTo(maximumValue) {
      return this.passesRule(new _validationRules.MaximumInclusiveValueValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.isEqualTo = function isEqualTo(otherValue, otherValueLabel) {
      if (!otherValueLabel) {
        return this.passesRule(new _validationRules.EqualityValidationRule(otherValue));
      }
      return this.passesRule(new _validationRules.EqualityWithOtherLabelValidationRule(otherValue, otherValueLabel));
    };

    ValidationGroupBuilder.prototype.isNotEqualTo = function isNotEqualTo(otherValue, otherValueLabel) {
      if (!otherValueLabel) {
        return this.passesRule(new _validationRules.InEqualityValidationRule(otherValue));
      }
      return this.passesRule(new _validationRules.InEqualityWithOtherLabelValidationRule(otherValue, otherValueLabel));
    };

    ValidationGroupBuilder.prototype.isEmail = function isEmail() {
      return this.passesRule(new _validationRules.EmailValidationRule());
    };

    ValidationGroupBuilder.prototype.isURL = function isURL() {
      return this.passesRule(new _validationRules.URLValidationRule());
    };

    ValidationGroupBuilder.prototype.hasMinLength = function hasMinLength(minimumValue) {
      return this.passesRule(new _validationRules.MinimumLengthValidationRule(minimumValue));
    };

    ValidationGroupBuilder.prototype.hasMaxLength = function hasMaxLength(maximumValue) {
      return this.passesRule(new _validationRules.MaximumLengthValidationRule(maximumValue));
    };

    ValidationGroupBuilder.prototype.hasLengthBetween = function hasLengthBetween(minimumValue, maximumValue) {
      return this.passesRule(new _validationRules.BetweenLengthValidationRule(minimumValue, maximumValue));
    };

    ValidationGroupBuilder.prototype.isNumber = function isNumber() {
      return this.passesRule(new _validationRules.NumericValidationRule());
    };

    ValidationGroupBuilder.prototype.containsNoSpaces = function containsNoSpaces() {
      return this.passesRule(new _validationRules.NoSpacesValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyDigits = function containsOnlyDigits() {
      return this.passesRule(new _validationRules.DigitValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlpha = function containsOnlyAlpha() {
      return this.passesRule(new _validationRules.AlphaValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphaOrWhitespace = function containsOnlyAlphaOrWhitespace() {
      return this.passesRule(new _validationRules.AlphaOrWhitespaceValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphanumerics = function containsOnlyAlphanumerics() {
      return this.passesRule(new _validationRules.AlphaNumericValidationRule());
    };

    ValidationGroupBuilder.prototype.containsOnlyAlphanumericsOrWhitespace = function containsOnlyAlphanumericsOrWhitespace() {
      return this.passesRule(new _validationRules.AlphaNumericOrWhitespaceValidationRule());
    };

    ValidationGroupBuilder.prototype.isStrongPassword = function isStrongPassword(minimumComplexityLevel) {
      if (minimumComplexityLevel === 4) {
        return this.passesRule(new _validationRules.StrongPasswordValidationRule());
      }
      return this.passesRule(new _validationRules.MediumPasswordValidationRule(minimumComplexityLevel));
    };

    ValidationGroupBuilder.prototype.containsOnly = function containsOnly(regex) {
      return this.passesRule(new _validationRules.ContainsOnlyValidationRule(regex));
    };

    ValidationGroupBuilder.prototype.matches = function matches(regex) {
      return this.passesRule(new _validationRules.RegexValidationRule(regex));
    };

    ValidationGroupBuilder.prototype.passes = function passes(customFunction, threshold) {
      return this.passesRule(new _validationRules.CustomFunctionValidationRule(customFunction, threshold));
    };

    ValidationGroupBuilder.prototype.passesRule = function passesRule(validationRule) {
      this.validationRuleCollections[0].addValidationRule(validationRule);
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.checkLast = function checkLast() {
      var validationProperty = this.validationGroup.validationProperties[this.validationGroup.validationProperties.length - 1];
      validationProperty.validateCurrentValue(false);
    };

    ValidationGroupBuilder.prototype.withMessage = function withMessage(message) {
      this.validationRuleCollections[0].withMessage(message);
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.if = function _if(conditionExpression) {
      var conditionalCollection = new _validationRulesCollection.SwitchCaseValidationRulesCollection(conditionExpression);
      conditionalCollection.case(true);
      this.validationRuleCollections[0].addValidationRuleCollection(conditionalCollection);
      this.validationRuleCollections.unshift(conditionalCollection);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.else = function _else() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'else\'');
      }
      this.validationRuleCollections[0].default();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.endIf = function endIf() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'endIf\'');
      }
      this.validationRuleCollections.shift();
      this.checkLast();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.switch = function _switch(conditionExpression) {
      var _this = this;

      var condition = conditionExpression;
      if (condition === undefined) {
        (function () {
          var observer = _this.validationGroup.validationProperties[_this.validationGroup.validationProperties.length - 1].observer;
          condition = function condition() {
            return observer.getValue();
          };
        })();
      }
      var conditionalCollection = new _validationRulesCollection.SwitchCaseValidationRulesCollection(condition);
      this.validationRuleCollections[0].addValidationRuleCollection(conditionalCollection);
      this.validationRuleCollections.unshift(conditionalCollection);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.case = function _case(caseLabel) {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'case\'');
      }
      this.validationRuleCollections[0].case(caseLabel);
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.default = function _default() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'case\'');
      }
      this.validationRuleCollections[0].default();
      return this.validationGroup;
    };

    ValidationGroupBuilder.prototype.endSwitch = function endSwitch() {
      if (!this.validationRuleCollections[0].default) {
        throw Error('Invalid statement: \'endIf\'');
      }
      this.validationRuleCollections.shift();
      this.checkLast();
      return this.validationGroup;
    };

    return ValidationGroupBuilder;
  }();
});
define('aurelia-validation/validation-rules-collection',['exports', './utilities', './validation-locale'], function (exports, _utilities, _validationLocale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SwitchCaseValidationRulesCollection = exports.ValidationRulesCollection = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationRulesCollection = exports.ValidationRulesCollection = function () {
    function ValidationRulesCollection(config) {
      _classCallCheck(this, ValidationRulesCollection);

      this.isRequired = config ? config.getValue('allPropertiesAreMandatory') : false;
      this.validationRules = [];
      this.validationCollections = [];
      this.isRequiredMessage = null;
    }

    ValidationRulesCollection.prototype.validate = function validate(newValue, locale) {
      var executeRules = true;
      var thisMessage = void 0;
      var checks = void 0;
      if (locale === undefined) {
        locale = _validationLocale.ValidationLocale.Repository.default;
      }
      newValue = _utilities.Utilities.getValue(newValue);
      if (this.isRequiredMessage) {
        thisMessage = typeof this.isRequiredMessage === 'function' ? this.isRequiredMessage(newValue) : this.isRequiredMessage;
      } else {
        thisMessage = locale.translate('isRequired');
      }
      if (_utilities.Utilities.isEmptyValue(newValue)) {
        if (this.isRequired) {
          return Promise.resolve({
            isValid: false,
            message: thisMessage,
            failingRule: 'isRequired',
            latestValue: newValue
          });
        }
        executeRules = false;
      }
      checks = Promise.resolve({
        isValid: true,
        message: '',
        failingRule: null,
        latestValue: newValue
      });
      if (executeRules) {
        this.validationRules.forEach(function (rule) {
          checks = checks.then(function (previousRuleResult) {
            if (previousRuleResult.isValid === false) {
              return previousRuleResult;
            }
            return rule.validate(newValue, locale).then(function (thisRuleResult) {
              if (thisRuleResult === false) {
                return {
                  isValid: false,
                  message: rule.explain(),
                  failingRule: rule.ruleName,
                  latestValue: newValue
                };
              }
              if (!previousRuleResult.isValid) {
                throw Error("ValidationRulesCollection.validate caught an unexpected result while validating it's chain of rules.");
              }
              return previousRuleResult;
            });
          });
        });
      }
      this.validationCollections.forEach(function (validationCollection) {
        checks = checks.then(function (previousValidationResult) {
          if (previousValidationResult.isValid) {
            return validationCollection.validate(newValue, locale);
          }
          return previousValidationResult;
        });
      });
      return checks;
    };

    ValidationRulesCollection.prototype.addValidationRule = function addValidationRule(validationRule) {
      if (validationRule.validate === undefined) {
        throw new Error("That's not a valid validationRule");
      }
      this.validationRules.push(validationRule);
    };

    ValidationRulesCollection.prototype.addValidationRuleCollection = function addValidationRuleCollection(validationRulesCollection) {
      this.validationCollections.push(validationRulesCollection);
    };

    ValidationRulesCollection.prototype.isNotEmpty = function isNotEmpty() {
      this.isRequired = true;
    };

    ValidationRulesCollection.prototype.canBeEmpty = function canBeEmpty() {
      this.isRequired = false;
    };

    ValidationRulesCollection.prototype.withMessage = function withMessage(message) {
      if (this.validationRules.length === 0) {
        this.isRequiredMessage = message;
      } else {
        this.validationRules[this.validationRules.length - 1].withMessage(message);
      }
    };

    return ValidationRulesCollection;
  }();

  var SwitchCaseValidationRulesCollection = exports.SwitchCaseValidationRulesCollection = function () {
    function SwitchCaseValidationRulesCollection(conditionExpression, config) {
      _classCallCheck(this, SwitchCaseValidationRulesCollection);

      this.conditionExpression = conditionExpression;
      this.config = config;
      this.innerCollections = [];
      this.defaultCollection = new ValidationRulesCollection(this.config);
      this.caseLabel = '';
      this.defaultCaseLabel = { description: 'this is the case label for \'default\'' };
    }

    SwitchCaseValidationRulesCollection.prototype.case = function _case(caseLabel) {
      this.caseLabel = caseLabel;
      this.getCurrentCollection(caseLabel, true);
    };

    SwitchCaseValidationRulesCollection.prototype.default = function _default() {
      this.caseLabel = this.defaultCaseLabel;
    };

    SwitchCaseValidationRulesCollection.prototype.getCurrentCollection = function getCurrentCollection(caseLabel) {
      var createIfNotExists = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (caseLabel === this.defaultCaseLabel) {
        return this.defaultCollection;
      }
      var currentCollection = null;
      for (var i = 0; i < this.innerCollections.length; i++) {
        currentCollection = this.innerCollections[i];
        if (currentCollection.caseLabel === caseLabel) {
          return currentCollection.collection;
        }
      }
      if (createIfNotExists) {
        currentCollection = {
          caseLabel: caseLabel,
          collection: new ValidationRulesCollection(this.config)
        };
        this.innerCollections.push(currentCollection);
        return currentCollection.collection;
      }
      return null;
    };

    SwitchCaseValidationRulesCollection.prototype.validate = function validate(newValue, locale) {
      var collection = this.getCurrentCollection(this.conditionExpression(newValue));
      if (collection !== null) {
        return collection.validate(newValue, locale);
      }
      return this.defaultCollection.validate(newValue, locale);
    };

    SwitchCaseValidationRulesCollection.prototype.addValidationRule = function addValidationRule(validationRule) {
      var currentCollection = this.getCurrentCollection(this.caseLabel, true);
      currentCollection.addValidationRule(validationRule);
    };

    SwitchCaseValidationRulesCollection.prototype.addValidationRuleCollection = function addValidationRuleCollection(validationRulesCollection) {
      var currentCollection = this.getCurrentCollection(this.caseLabel, true);
      currentCollection.addValidationRuleCollection(validationRulesCollection);
    };

    SwitchCaseValidationRulesCollection.prototype.isNotEmpty = function isNotEmpty() {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.isNotEmpty();
      } else {
        this.defaultCollection.isNotEmpty();
      }
    };

    SwitchCaseValidationRulesCollection.prototype.canBeEmpty = function canBeEmpty() {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.canBeEmpty();
      } else {
        this.defaultCollection.canBeEmpty();
      }
    };

    SwitchCaseValidationRulesCollection.prototype.withMessage = function withMessage(message) {
      var collection = this.getCurrentCollection(this.caseLabel);
      if (collection !== null) {
        collection.withMessage(message);
      } else {
        this.defaultCollection.withMessage(message);
      }
    };

    return SwitchCaseValidationRulesCollection;
  }();
});
define('aurelia-validation/validation-property',['exports', './validation-rules-collection', './path-observer', './debouncer'], function (exports, _validationRulesCollection, _pathObserver, _debouncer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationProperty = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValidationProperty = exports.ValidationProperty = function () {
    function ValidationProperty(observerLocator, propertyName, validationGroup, propertyResult, config) {
      var _this = this;

      _classCallCheck(this, ValidationProperty);

      this.propertyResult = propertyResult;
      this.propertyName = propertyName;
      this.validationGroup = validationGroup;
      this.collectionOfValidationRules = new _validationRulesCollection.ValidationRulesCollection(config);
      this.config = config;
      this.latestValue = undefined;
      this.observer = new _pathObserver.PathObserver(observerLocator, validationGroup.subject, propertyName).getObserver();
      this.debouncer = new _debouncer.Debouncer(config.getDebounceTimeout());
      this.subscription = this.observer.subscribe(function () {
        _this.debouncer.debounce(function () {
          var newValue = _this.observer.getValue();
          if (newValue !== _this.latestValue) {
            _this.validate(newValue, true);
          }
        });
      });
      this.dependencyObservers = [];
      var dependencies = this.config.getDependencies();
      for (var i = 0; i < dependencies.length; i++) {
        var dependencyObserver = new _pathObserver.PathObserver(observerLocator, validationGroup.subject, dependencies[i]).getObserver();
        dependencyObserver.subscribe(function () {
          _this.debouncer.debounce(function () {
            _this.validateCurrentValue(true);
          });
        });
        this.dependencyObservers.push(dependencyObserver);
      }
    }

    ValidationProperty.prototype.addValidationRule = function addValidationRule(validationRule) {
      if (validationRule.validate === undefined) {
        throw new Error("That's not a valid validationRule");
      }
      this.collectionOfValidationRules.addValidationRule(validationRule);
      this.validateCurrentValue(false);
    };

    ValidationProperty.prototype.validateCurrentValue = function validateCurrentValue(forceDirty, forceExecution) {
      return this.validate(this.observer.getValue(), forceDirty, forceExecution);
    };

    ValidationProperty.prototype.clear = function clear() {
      this.latestValue = this.observer.getValue();
      this.propertyResult.clear();
    };

    ValidationProperty.prototype.destroy = function destroy() {
      if (this.subscription) {
        this.subscription();
      }
    };

    ValidationProperty.prototype.validate = function validate(newValue, shouldBeDirty, forceExecution) {
      var _this2 = this;

      if (!this.propertyResult.isDirty && shouldBeDirty || this.latestValue !== newValue || forceExecution) {
        this.latestValue = newValue;
        return this.config.locale().then(function (locale) {
          return _this2.collectionOfValidationRules.validate(newValue, locale).then(function (validationResponse) {
            if (_this2.latestValue === validationResponse.latestValue) {
              _this2.propertyResult.setValidity(validationResponse, shouldBeDirty);
            }
            return validationResponse.isValid;
          }).catch(function (err) {
            throw Error('Unexpected behavior: a validation-rules-collection should always fulfil');
          });
        }, function () {
          throw Error('An exception occurred while trying to load the locale');
        });
      }
    };

    return ValidationProperty;
  }();
});
define('aurelia-validation/path-observer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PathObserver = exports.PathObserver = function () {
    function PathObserver(observerLocator, subject, path) {
      _classCallCheck(this, PathObserver);

      this.observerLocator = observerLocator;
      this.path = path.split('.');
      this.subject = subject;
      this.observers = [];
      this.callbacks = [];
      if (this.path.length > 1) {
        this.observeParts();
      }
    }

    PathObserver.prototype.observeParts = function observeParts(propertyName) {
      var _this = this;

      var currentSubject = this.subject;
      var observersAreComplete = void 0;

      if (propertyName !== undefined && propertyName !== null) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
          var currentObserver = this.observers[i];
          var observer = void 0;
          if (currentObserver.propertyName === propertyName) {
            break;
          }
          observer = this.observers.pop();
          if (observer && observer.subscription) {
            observer.subscription();
          }
        }
      }

      observersAreComplete = this.observers.length === this.path.length;

      var _loop = function _loop(_i) {
        var observer = _this.observers[_i];
        var currentPath = _this.path[_i];
        var subscription = void 0;
        var currentValue = void 0;
        if (!observer) {
          observer = _this.observerLocator.getObserver(currentSubject, currentPath);
          _this.observers.push(observer);
          subscription = observer.subscribe(function (newValue, oldValue) {
            _this.observeParts(observer.propertyName);
          });
          observer.subscription = subscription;
        }
        currentValue = observer.getValue();
        if (currentValue === undefined || currentValue === null) {
          return 'break';
        } else {
          currentSubject = currentValue;
        }
      };

      for (var _i = 0; _i < this.path.length; _i++) {
        var _ret = _loop(_i);

        if (_ret === 'break') break;
      }

      if (!observersAreComplete && this.observers.length === this.path.length) {
        var actualObserver = this.observers[this.observers.length - 1];
        for (var _i2 = 0; _i2 < this.callbacks.length; _i2++) {
          actualObserver.subscribe(this.callbacks[_i2]);
        }
      }
    };

    PathObserver.prototype.observePart = function observePart(part) {
      if (part !== this.path[this.path.length - 1]) {
        this.observeParts();
      }
    };

    PathObserver.prototype.getObserver = function getObserver() {
      if (this.path.length === 1) {
        this.subject[this.path[0]];
        return this.observerLocator.getObserver(this.subject, this.path[0]);
      }
      return this;
    };

    PathObserver.prototype.getValue = function getValue() {
      var expectedSubject = this.subject;
      for (var i = 0; this.path.length; i++) {
        var currentObserver = this.observers[i];
        if (currentObserver === null || currentObserver === undefined) {
          this.observeParts(this.path[i]);
          currentObserver = this.observers[i];

          if (currentObserver === null || currentObserver === undefined) {
            break;
          }
        }

        if (currentObserver.obj !== expectedSubject) {
          this.observeParts(this.path[i - 1]);
          break;
        }
        expectedSubject = currentObserver.getValue();
      }

      if (this.observers.length !== this.path.length) {
        return undefined;
      }
      var value = this.observers[this.observers.length - 1].getValue();
      return value;
    };

    PathObserver.prototype.subscribe = function subscribe(callback) {
      var _this2 = this;

      this.callbacks.unshift(callback);
      if (this.observers.length === this.path.length) {
        this.subscription = this.observers[this.observers.length - 1].subscribe(callback);
        return function () {
          return _this2.unsubscribe();
        };
      }
    };

    PathObserver.prototype.unsubscribe = function unsubscribe() {
      this.callbacks = [];
      if (this.subscription) {
        this.subscription();
      }
      for (var i = this.observers.length - 1; i >= 0; i--) {
        var observer = this.observers.pop();
        if (observer && observer.subscription) {
          observer.subscription();
        }
      }
    };

    return PathObserver;
  }();
});
define('aurelia-validation/debouncer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Debouncer = exports.Debouncer = function () {
    function Debouncer(debounceTimeout) {
      _classCallCheck(this, Debouncer);

      this.currentFunction = null;
      this.debounceTimeout = debounceTimeout;
    }

    Debouncer.prototype.debounce = function debounce(func) {
      var _this = this;

      this.currentFunction = func;
      setTimeout(function () {
        if (func !== null && func !== undefined) {
          if (func === _this.currentFunction) {
            _this.currentFunction = null;
            func();
          }
        }
      }, this.debounceTimeout);
    };

    return Debouncer;
  }();
});
define('aurelia-validation/decorators',['exports', 'aurelia-metadata'], function (exports, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidationMetadata = undefined;
  exports.ensure = ensure;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var ValidationMetadata = exports.ValidationMetadata = (_temp = _class = function () {
    function ValidationMetadata() {
      _classCallCheck(this, ValidationMetadata);

      this.properties = [];
    }

    ValidationMetadata.prototype.getOrCreateProperty = function getOrCreateProperty(propertyName) {
      var property = this.properties.find(function (x) {
        return x.propertyName === propertyName;
      });
      if (property === undefined) {
        property = new ValidationPropertyMetadata(propertyName);
        this.properties.push(property);
      }
      return property;
    };

    ValidationMetadata.prototype.setup = function setup(validation) {
      this.properties.forEach(function (property) {
        property.setup(validation);
      });
    };

    return ValidationMetadata;
  }(), _class.metadataKey = 'aurelia:validation', _temp);

  var ValidationPropertyMetadata = function () {
    function ValidationPropertyMetadata(propertyName) {
      _classCallCheck(this, ValidationPropertyMetadata);

      this.propertyName = propertyName;
      this.setupSteps = [];
    }

    ValidationPropertyMetadata.prototype.addSetupStep = function addSetupStep(setupStep) {
      this.setupSteps.push(setupStep);
    };

    ValidationPropertyMetadata.prototype.setup = function setup(validation) {
      validation.ensure(this.propertyName);
      this.setupSteps.forEach(function (setupStep) {
        setupStep(validation);
      });
    };

    return ValidationPropertyMetadata;
  }();

  function ensure(setupStep) {
    console.warn('The ensure decorator has been deprecated and will be removed in the next release.');
    return function (target, propertyName) {
      var validationMetadata = _aureliaMetadata.metadata.getOrCreateOwn(ValidationMetadata.metadataKey, ValidationMetadata, target);
      var property = validationMetadata.getOrCreateProperty(propertyName);
      property.addSetupStep(setupStep);
    };
  }
});
define('aurelia-validation/validate-custom-attribute',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ValidateCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var ValidateCustomAttribute = exports.ValidateCustomAttribute = (_dec = (0, _aureliaTemplating.customAttribute)('validate'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function ValidateCustomAttribute(element) {
      _classCallCheck(this, ValidateCustomAttribute);

      this.element = element;
      this.processedValidation = null;
      this.viewStrategy = null;
    }

    ValidateCustomAttribute.prototype.valueChanged = function valueChanged(newValue) {
      if (this.value === null || this.value === undefined) {
        return;
      }
      this.processedValidation = this.value;
      if (typeof this.value !== 'string') {
        this.subscribeChangedHandlers(this.element);
      }
      return;
    };

    ValidateCustomAttribute.prototype.subscribeChangedHandlers = function subscribeChangedHandlers(currentElement) {
      var _this = this;

      var viewStrategy = this.value.config.getViewStrategy();
      var validationProperty = viewStrategy.getValidationProperty(this.value, currentElement);
      var children = currentElement.children;
      this.viewStrategy = viewStrategy;
      if (validationProperty !== null && validationProperty !== undefined) {
        this.viewStrategy.prepareElement(validationProperty, currentElement);
        validationProperty.onValidate(function (vp) {
          _this.viewStrategy.updateElement(vp, currentElement);
        });
      }
      for (var i = 0; i < children.length; i++) {
        this.subscribeChangedHandlers(children[i]);
      }
    };

    ValidateCustomAttribute.prototype.attached = function attached() {
      if (this.processedValidation === null || this.processedValidation === undefined) {
        this.valueChanged(this.value);
      }
    };

    return ValidateCustomAttribute;
  }()) || _class) || _class);
});
define('i18next-xhr-backend/utils',['require','exports','module'],function (require, exports, module) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = defaults;
exports.extend = extend;
var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function extend(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
});

define('aurelia-i18n/i18n',['exports', 'i18next', 'aurelia-pal'], function (exports, _i18next, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.I18N = undefined;

  var _i18next2 = _interopRequireDefault(_i18next);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  

  var I18N = exports.I18N = function () {
    function I18N(ea, signaler) {
      var _this = this;

      

      this.globalVars = {};
      this.params = {};
      this.i18nextDefered = {
        resolve: null,
        promise: null
      };

      this.i18next = _i18next2.default;
      this.ea = ea;
      this.Intl = window.Intl;
      this.signaler = signaler;
      this.i18nextDefered.promise = new Promise(function (resolve) {
        return _this.i18nextDefered.resolve = resolve;
      });
    }

    I18N.prototype.setup = function setup(options) {
      var _this2 = this;

      var defaultOptions = {
        compatibilityAPI: 'v1',
        compatibilityJSON: 'v1',
        lng: 'en',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: false
      };

      _i18next2.default.init(options || defaultOptions, function (err, t) {
        if (_i18next2.default.options.attributes instanceof String) {
          _i18next2.default.options.attributes = [_i18next2.default.options.attributes];
        }

        _this2.i18nextDefered.resolve(_this2.i18next);
      });

      return this.i18nextDefered.promise;
    };

    I18N.prototype.i18nextReady = function i18nextReady() {
      return this.i18nextDefered.promise;
    };

    I18N.prototype.setLocale = function setLocale(locale) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var oldLocale = _this3.getLocale();
        _this3.i18next.changeLanguage(locale, function (err, tr) {
          _this3.ea.publish('i18n:locale:changed', { oldValue: oldLocale, newValue: locale });
          _this3.signaler.signal('aurelia-translation-signal');
          resolve(tr);
        });
      });
    };

    I18N.prototype.getLocale = function getLocale() {
      return this.i18next.language;
    };

    I18N.prototype.nf = function nf(options, locales) {
      return new this.Intl.NumberFormat(locales || this.getLocale(), options || {});
    };

    I18N.prototype.uf = function uf(number, locale) {
      var nf = this.nf({}, locale || this.getLocale());
      var comparer = nf.format(10000 / 3);

      var thousandSeparator = comparer[1];
      var decimalSeparator = comparer[5];

      var result = number.replace(thousandSeparator, '').replace(/[^\d.,-]/g, '').replace(decimalSeparator, '.');

      return Number(result);
    };

    I18N.prototype.df = function df(options, locales) {
      return new this.Intl.DateTimeFormat(locales || this.getLocale(), options);
    };

    I18N.prototype.tr = function tr(key, options) {
      var fullOptions = this.globalVars;

      if (options !== undefined) {
        fullOptions = Object.assign(Object.assign({}, this.globalVars), options);
      }

      return this.i18next.t(key, fullOptions);
    };

    I18N.prototype.registerGlobalVariable = function registerGlobalVariable(key, value) {
      this.globalVars[key] = value;
    };

    I18N.prototype.unregisterGlobalVariable = function unregisterGlobalVariable(key) {
      delete this.globalVars[key];
    };

    I18N.prototype.updateTranslations = function updateTranslations(el) {
      if (!el || !el.querySelectorAll) {
        return;
      }

      var i = void 0;
      var l = void 0;

      var selector = [].concat(this.i18next.options.attributes);
      for (i = 0, l = selector.length; i < l; i++) {
        selector[i] = '[' + selector[i] + ']';
      }selector = selector.join(',');

      var nodes = el.querySelectorAll(selector);
      for (i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var keys = void 0;

        for (var i2 = 0, l2 = this.i18next.options.attributes.length; i2 < l2; i2++) {
          keys = node.getAttribute(this.i18next.options.attributes[i2]);
          if (keys) break;
        }

        if (!keys) continue;

        this.updateValue(node, keys);
      }
    };

    I18N.prototype.updateValue = function updateValue(node, value, params) {
      var _this4 = this;

      if (params) {
        this.params[value] = params;
      } else if (this.params[value]) {
        params = this.params[value];
      }

      return this.i18nextDefered.promise.then(function () {
        return _this4._updateValue(node, value, params);
      });
    };

    I18N.prototype._updateValue = function _updateValue(node, value, params) {
      if (value === null || value === undefined) {
        return;
      }

      var keys = value.split(';');
      var i = keys.length;

      while (i--) {
        var key = keys[i];

        var re = /\[([a-z\-]*)\]/g;

        var m = void 0;
        var attr = 'text';

        if (node.nodeName === 'IMG') attr = 'src';

        while ((m = re.exec(key)) !== null) {
          if (m.index === re.lastIndex) {
            re.lastIndex++;
          }
          if (m) {
            key = key.replace(m[0], '');
            attr = m[1];
          }
        }

        if (!node._textContent) node._textContent = node.textContent;
        if (!node._innerHTML) node._innerHTML = node.innerHTML;

        switch (attr) {
          case 'text':
            var newChild = _aureliaPal.DOM.createTextNode(this.tr(key, params));
            if (node._newChild) {
              node.removeChild(node._newChild);
            }

            node._newChild = newChild;
            while (node.firstChild) {
              node.removeChild(node.firstChild);
            }
            node.appendChild(node._newChild);
            break;
          case 'prepend':
            var prependParser = _aureliaPal.DOM.createElement('div');
            prependParser.innerHTML = this.tr(key, params);
            for (var ni = node.childNodes.length - 1; ni >= 0; ni--) {
              if (node.childNodes[ni]._prepended) {
                node.removeChild(node.childNodes[ni]);
              }
            }

            for (var pi = prependParser.childNodes.length - 1; pi >= 0; pi--) {
              prependParser.childNodes[pi]._prepended = true;
              if (node.firstChild) {
                node.insertBefore(prependParser.childNodes[pi], node.firstChild);
              } else {
                node.appendChild(prependParser.childNodes[pi]);
              }
            }
            break;
          case 'append':
            var appendParser = _aureliaPal.DOM.createElement('div');
            appendParser.innerHTML = this.tr(key, params);
            for (var _ni = node.childNodes.length - 1; _ni >= 0; _ni--) {
              if (node.childNodes[_ni]._appended) {
                node.removeChild(node.childNodes[_ni]);
              }
            }

            while (appendParser.firstChild) {
              appendParser.firstChild._appended = true;
              node.appendChild(appendParser.firstChild);
            }
            break;
          case 'html':
            node.innerHTML = this.tr(key, params);
            break;
          default:
            node.setAttribute(attr, this.tr(key, params));
            break;
        }
      }
    };

    return I18N;
  }();
});
define('i18next/i18next',['require','exports','module','./logger','./EventEmitter','./ResourceStore','./Translator','./LanguageUtils','./PluralResolver','./Interpolator','./BackendConnector','./CacheConnector','./defaults','./postProcessor','./compatibility/v1'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _ResourceStore = require('./ResourceStore');

var _ResourceStore2 = _interopRequireDefault(_ResourceStore);

var _Translator = require('./Translator');

var _Translator2 = _interopRequireDefault(_Translator);

var _LanguageUtils = require('./LanguageUtils');

var _LanguageUtils2 = _interopRequireDefault(_LanguageUtils);

var _PluralResolver = require('./PluralResolver');

var _PluralResolver2 = _interopRequireDefault(_PluralResolver);

var _Interpolator = require('./Interpolator');

var _Interpolator2 = _interopRequireDefault(_Interpolator);

var _BackendConnector = require('./BackendConnector');

var _BackendConnector2 = _interopRequireDefault(_BackendConnector);

var _CacheConnector = require('./CacheConnector');

var _CacheConnector2 = _interopRequireDefault(_CacheConnector);

var _defaults2 = require('./defaults');

var _postProcessor = require('./postProcessor');

var _postProcessor2 = _interopRequireDefault(_postProcessor);

var _v = require('./compatibility/v1');

var compat = _interopRequireWildcard(_v);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var I18n = function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var callback = arguments[1];

    _classCallCheck(this, I18n);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.options = (0, _defaults2.transformOptions)(options);
    _this.services = {};
    _this.logger = _logger2.default;
    _this.modules = {};

    if (callback && !_this.isInitialized) _this.init(options, callback);
    return _this;
  }

  I18n.prototype.init = function init(options, callback) {
    var _this2 = this;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) options = {};

    if (options.compatibilityAPI === 'v1') {
      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertAPIOptions(options)), {});
    } else if (options.compatibilityJSON === 'v1') {
      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertJSONOptions(options)), {});
    } else {
      this.options = _extends({}, (0, _defaults2.get)(), this.options, (0, _defaults2.transformOptions)(options));
    }
    if (!callback) callback = function callback() {};

    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    }

    // init services
    if (!this.options.isClone) {
      if (this.modules.logger) {
        _logger2.default.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        _logger2.default.init(null, this.options);
      }

      var lu = new _LanguageUtils2.default(this.options);
      this.store = new _ResourceStore2.default(this.options.resources, this.options);

      var s = this.services;
      s.logger = _logger2.default;
      s.resourceStore = this.store;
      s.resourceStore.on('added removed', function (lng, ns) {
        s.cacheConnector.save();
      });
      s.languageUtils = lu;
      s.pluralResolver = new _PluralResolver2.default(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON });
      s.interpolator = new _Interpolator2.default(this.options);

      s.backendConnector = new _BackendConnector2.default(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      s.backendConnector.on('loaded', function (loaded) {
        s.cacheConnector.save();
      });

      s.cacheConnector = new _CacheConnector2.default(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.cacheConnector.on('*', function (event) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        s.languageDetector.init(s, this.options.detection, this.options);
      }

      this.translator = new _Translator2.default(this.services, this.options);
      // pipe events from translator
      this.translator.on('*', function (event) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });
    }

    // append api
    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
    storeApi.forEach(function (fcName) {
      _this2[fcName] = function () {
        return this.store[fcName].apply(this.store, arguments);
      };
    });

    // TODO: COMPATIBILITY remove this
    if (this.options.compatibilityAPI === 'v1') compat.appendBackwardsAPI(this);

    var load = function load() {
      _this2.changeLanguage(_this2.options.lng, function (err, t) {
        _this2.emit('initialized', _this2.options);
        _this2.logger.log('initialized', _this2.options);

        callback(err, t);
      });
    };

    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }

    return this;
  };

  I18n.prototype.loadResources = function loadResources(callback) {
    var _this3 = this;

    if (!callback) callback = function callback() {};

    if (!this.options.resources) {
      var _ret = function () {
        if (_this3.language && _this3.language.toLowerCase() === 'cimode') return {
            v: callback()
          }; // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        append(_this3.language);

        if (_this3.options.preload) {
          _this3.options.preload.forEach(function (l) {
            append(l);
          });
        }

        _this3.services.cacheConnector.load(toLoad, _this3.options.ns, function () {
          _this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
        });
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
      callback(null);
    }
  };

  I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    this.services.backendConnector.reload(lngs, ns);
  };

  I18n.prototype.use = function use(module) {
    if (module.type === 'backend') {
      this.modules.backend = module;
    }

    if (module.type === 'cache') {
      this.modules.cache = module;
    }

    if (module.type === 'logger' || module.log && module.warn && module.warn) {
      this.modules.logger = module;
    }

    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }

    if (module.type === 'postProcessor') {
      _postProcessor2.default.addPostProcessor(module);
    }

    return this;
  };

  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
    var _this4 = this;

    var done = function done(err) {
      if (lng) {
        _this4.emit('languageChanged', lng);
        _this4.logger.log('languageChanged', lng);
      }

      if (callback) callback(err, function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this4.t.apply(_this4, args);
      });
    };

    if (!lng && this.services.languageDetector) lng = this.services.languageDetector.detect();

    if (lng) {
      this.language = lng;
      this.languages = this.services.languageUtils.toResolveHierarchy(lng);

      this.translator.changeLanguage(lng);

      if (this.services.languageDetector) this.services.languageDetector.cacheUserLanguage(lng);
    }

    this.loadResources(function (err) {
      done(err);
    });
  };

  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
    var _this5 = this;

    var fixedT = function fixedT(key, options) {
      options = options || {};
      options.lng = options.lng || fixedT.lng;
      options.ns = options.ns || fixedT.ns;
      return _this5.t(key, options);
    };
    fixedT.lng = lng;
    fixedT.ns = ns;
    return fixedT;
  };

  I18n.prototype.t = function t() {
    return this.translator && this.translator.translate.apply(this.translator, arguments);
  };

  I18n.prototype.exists = function exists() {
    return this.translator && this.translator.exists.apply(this.translator, arguments);
  };

  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  };

  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
    var _this6 = this;

    if (!this.options.ns) return callback && callback();
    if (typeof ns === 'string') ns = [ns];

    ns.forEach(function (n) {
      if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
    });

    this.loadResources(callback);
  };

  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
    if (typeof lngs === 'string') lngs = [lngs];
    var preloaded = this.options.preload || [];

    var newLngs = lngs.filter(function (lng) {
      return preloaded.indexOf(lng) < 0;
    });
    // Exit early if all given languages are already preloaded
    if (!newLngs.length) return callback();

    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(callback);
  };

  I18n.prototype.dir = function dir(lng) {
    if (!lng) lng = this.language;

    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

    return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
  };

  I18n.prototype.createInstance = function createInstance() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var callback = arguments[1];

    return new I18n(options, callback);
  };

  I18n.prototype.cloneInstance = function cloneInstance() {
    var _this7 = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var callback = arguments[1];

    var clone = new I18n(_extends({}, options, this.options, { isClone: true }), callback);
    var membersToCopy = ['store', 'translator', 'services', 'language'];
    membersToCopy.forEach(function (m) {
      clone[m] = _this7[m];
    });

    return clone;
  };

  return I18n;
}(_EventEmitter3.default);

exports.default = new I18n();
});

define('i18next/logger',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var consoleLogger = {
  type: 'logger',

  log: function log(args) {
    this._output('log', args);
  },
  warn: function warn(args) {
    this._output('warn', args);
  },
  error: function error(args) {
    this._output('error', args);
  },
  _output: function _output(type, args) {
    if (console && console[type]) console[type].apply(console, Array.prototype.slice.call(args));
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Logger);

    this.subs = [];
    this.init(concreteLogger, options);
  }

  Logger.prototype.init = function init(concreteLogger) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug === false ? false : true;
  };

  Logger.prototype.setDebug = function setDebug(bool) {
    this.debug = bool;
    this.subs.forEach(function (sub) {
      sub.setDebug(bool);
    });
  };

  Logger.prototype.log = function log() {
    this.forward(arguments, 'log', '', true);
  };

  Logger.prototype.warn = function warn() {
    this.forward(arguments, 'warn', '', true);
  };

  Logger.prototype.error = function error() {
    this.forward(arguments, 'error', '');
  };

  Logger.prototype.deprecate = function deprecate() {
    this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', true);
  };

  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return;
    if (typeof args[0] === 'string') args[0] = prefix + this.prefix + ' ' + args[0];
    this.logger[lvl](args);
  };

  Logger.prototype.create = function create(moduleName) {
    var sub = new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));
    this.subs.push(sub);

    return sub;
  };

  // createInstance(options = {}) {
  //   return new Logger(options, callback);
  // }

  return Logger;
}();

;

exports.default = new Logger();
});

define('i18next/EventEmitter',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.observers = {};
	}

	EventEmitter.prototype.on = function on(events, listener) {
		var _this = this;

		events.split(' ').forEach(function (event) {
			_this.observers[event] = _this.observers[event] || [];
			_this.observers[event].push(listener);
		});
	};

	EventEmitter.prototype.off = function off(event, listener) {
		var _this2 = this;

		if (!this.observers[event]) {
			return;
		}

		this.observers[event].forEach(function () {
			if (!listener) {
				delete _this2.observers[event];
			} else {
				var index = _this2.observers[event].indexOf(listener);
				if (index > -1) {
					_this2.observers[event].splice(index, 1);
				}
			}
		});
	};

	EventEmitter.prototype.emit = function emit(event) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		if (this.observers[event]) {
			this.observers[event].forEach(function (observer) {
				observer.apply(undefined, args);
			});
		}

		if (this.observers['*']) {
			this.observers['*'].forEach(function (observer) {
				var _ref;

				observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
			});
		}
	};

	return EventEmitter;
}();

exports.default = EventEmitter;
});

define('i18next/ResourceStore',['require','exports','module','./EventEmitter','./utils'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore() {
    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? { ns: ['translation'], defaultNS: 'translation' } : arguments[1];

    _classCallCheck(this, ResourceStore);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.data = data;
    _this.options = options;
    return _this;
  }

  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  };

  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
    var index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  };

  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var keySeparator = options.keySeparator || this.options.keySeparator;
    if (keySeparator === undefined) keySeparator = '.';

    var path = [lng, ns];
    if (key && typeof key !== 'string') path = path.concat(key);
    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    }

    return utils.getPath(this.data, path);
  };

  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
    var options = arguments.length <= 4 || arguments[4] === undefined ? { silent: false } : arguments[4];

    var keySeparator = this.options.keySeparator;
    if (keySeparator === undefined) keySeparator = '.';

    var path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    utils.setPath(this.data, path, value);

    if (!options.silent) this.emit('added', lng, ns, key, value);
  };

  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
    for (var m in resources) {
      if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
    }
    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
    var path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    var pack = utils.getPath(this.data, path) || {};

    if (deep) {
      utils.deepExtend(pack, resources, overwrite);
    } else {
      pack = _extends({}, pack, resources);
    }

    utils.setPath(this.data, path, pack);

    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);

    this.emit('removed', lng, ns);
  };

  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  };

  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;

    // TODO: COMPATIBILITY remove extend in v2.1.0
    if (this.options.compatibilityAPI === 'v1') return _extends({}, this.getResource(lng, ns));

    return this.getResource(lng, ns);
  };

  ResourceStore.prototype.toJSON = function toJSON() {
    return this.data;
  };

  return ResourceStore;
}(_EventEmitter3.default);

exports.default = ResourceStore;
});

define('i18next/utils',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeString = makeString;
exports.copy = copy;
exports.setPath = setPath;
exports.pushPath = pushPath;
exports.getPath = getPath;
exports.deepExtend = deepExtend;
exports.regexEscape = regexEscape;
exports.escape = escape;
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}

function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (!object) return {};

    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (!object) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object);

  var obj = _getLastOfPath.obj;
  var k = _getLastOfPath.k;


  obj[k] = newValue;
}

function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object);

  var obj = _getLastOfPath2.obj;
  var k = _getLastOfPath2.k;


  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}

function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path);

  var obj = _getLastOfPath3.obj;
  var k = _getLastOfPath3.k;


  if (!obj) return undefined;
  return obj[k];
}

function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }return target;
}

function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/* eslint-disable */
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  } else {
    return data;
  }
}
});

define('i18next/Translator',['require','exports','module','./logger','./EventEmitter','./postProcessor','./compatibility/v1','./utils'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _postProcessor = require('./postProcessor');

var _postProcessor2 = _interopRequireDefault(_postProcessor);

var _v = require('./compatibility/v1');

var compat = _interopRequireWildcard(_v);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Translator = function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  function Translator(services) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Translator);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    utils.copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

    _this.options = options;
    _this.logger = _logger2.default.create('translator');
    return _this;
  }

  Translator.prototype.changeLanguage = function changeLanguage(lng) {
    if (lng) this.language = lng;
  };

  Translator.prototype.exists = function exists(key) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? { interpolation: {} } : arguments[1];

    if (this.options.compatibilityAPI === 'v1') {
      options = compat.convertTOptions(options);
    }

    return this.resolve(key, options) !== undefined;
  };

  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';

    var namespaces = options.ns || this.options.defaultNS;
    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
      var parts = key.split(nsSeparator);
      namespaces = parts[0];
      key = parts[1];
    }
    if (typeof namespaces === 'string') namespaces = [namespaces];

    return {
      key: key,
      namespaces: namespaces
    };
  };

  Translator.prototype.translate = function translate(keys) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      options = this.options.overloadTranslationOptionHandler(arguments);
    } else if (this.options.compatibilityAPI === 'v1') {
      options = compat.convertTOptions(options);
    }

    // non valid keys handling
    if (keys === undefined || keys === null || keys === '') return '';
    if (typeof keys === 'number') keys = String(keys);
    if (typeof keys === 'string') keys = [keys];

    // return key on CIMode
    var lng = options.lng || this.language;
    if (lng && lng.toLowerCase() === 'cimode') return keys[keys.length - 1];

    // separators
    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

    // get namespace(s)

    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options);

    var key = _extractFromKey.key;
    var namespaces = _extractFromKey.namespaces;

    var namespace = namespaces[namespaces.length - 1];

    // resolve from store
    var res = this.resolve(keys, options);

    var resType = Object.prototype.toString.apply(res);
    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

    // object
    if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
      if (!options.returnObjects && !this.options.returnObjects) {
        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
      }

      var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

      for (var m in res) {
        copy[m] = this.translate('' + key + keySeparator + m, _extends({ joinArrays: false, ns: namespaces }, options));
      }
      res = copy;
    }
    // array special treatment
    else if (joinArrays && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, key, options);
      }
      // string, empty or null
      else {
          var usedDefault = false,
              usedKey = false;

          // fallback value
          if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
            usedDefault = true;
            res = options.defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }

          // save missing
          if (usedKey || usedDefault) {
            this.logger.log('missingKey', lng, namespace, key, res);

            var lngs = [];
            if (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng && this.options.fallbackLng[0]) {
              for (var i = 0; i < this.options.fallbackLng.length; i++) {
                lngs.push(this.options.fallbackLng[i]);
              }
            } else if (this.options.saveMissingTo === 'all') {
              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
            } else {
              //(this.options.saveMissingTo === 'current' || (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng[0] === false) ) {
              lngs.push(options.lng || this.language);
            }

            if (this.options.saveMissing) {
              if (this.options.missingKeyHandler) {
                this.options.missingKeyHandler(lngs, namespace, key, res);
              } else if (this.backendConnector && this.backendConnector.saveMissing) {
                this.backendConnector.saveMissing(lngs, namespace, key, res);
              }
            }

            this.emit('missingKey', lngs, namespace, key, res);
          }

          // extend
          res = this.extendTranslation(res, key, options);

          // append namespace if still key
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

          // parseMissingKeyHandler
          if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
        }

    // return
    return res;
  };

  Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
    var _this2 = this;

    if (options.interpolation) this.interpolator.init(options);

    // interpolate
    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
    if (this.options.interpolation.defaultVariables) data = _extends({}, this.options.interpolation.defaultVariables, data);
    res = this.interpolator.interpolate(res, data, this.language);

    // nesting
    res = this.interpolator.nest(res, function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _this2.translate.apply(_this2, args);
    }, options);

    if (options.interpolation) this.interpolator.reset();

    // post process
    var postProcess = options.postProcess || this.options.postProcess;
    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

    if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = _postProcessor2.default.handle(postProcessorNames, res, key, options, this);
    }

    return res;
  };

  Translator.prototype.resolve = function resolve(keys) {
    var _this3 = this;

    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var found = void 0;

    if (typeof keys === 'string') keys = [keys];

    // forEach possible key
    keys.forEach(function (k) {
      if (_this3.isValidLookup(found)) return;

      var _extractFromKey2 = _this3.extractFromKey(k, options);

      var key = _extractFromKey2.key;
      var namespaces = _extractFromKey2.namespaces;

      if (_this3.options.fallbackNS) namespaces = namespaces.concat(_this3.options.fallbackNS);

      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

      var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

      namespaces.forEach(function (ns) {
        if (_this3.isValidLookup(found)) return;

        codes.forEach(function (code) {
          if (_this3.isValidLookup(found)) return;

          var finalKey = key;
          var finalKeys = [finalKey];

          var pluralSuffix = void 0;
          if (needsPluralHandling) pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count);

          // fallback for plural if context not found
          if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

          // get key for context if needed
          if (needsContextHandling) finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context);

          // get key for plural if needed
          if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);

          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
          var possibleKey = void 0;
          while (possibleKey = finalKeys.pop()) {
            if (_this3.isValidLookup(found)) continue;
            found = _this3.getResource(code, ns, possibleKey, options);
          }
        });
      });
    });

    return found;
  };

  Translator.prototype.isValidLookup = function isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  };

  Translator.prototype.getResource = function getResource(code, ns, key) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    return this.resourceStore.getResource(code, ns, key, options);
  };

  return Translator;
}(_EventEmitter3.default);

exports.default = Translator;
});

define('i18next/postProcessor',['require','exports','module'],function (require, exports, module) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  processors: {},

  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });

    return value;
  }
};
});

define('i18next/compatibility/v1',['require','exports','module','../logger'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertAPIOptions = convertAPIOptions;
exports.convertJSONOptions = convertJSONOptions;
exports.convertTOptions = convertTOptions;
exports.appendBackwardsAPI = appendBackwardsAPI;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertInterpolation(options) {

  options.interpolation = {
    unescapeSuffix: 'HTML'
  };

  options.interpolation.prefix = options.interpolationPrefix || '__';
  options.interpolation.suffix = options.interpolationSuffix || '__';
  options.interpolation.escapeValue = options.escapeInterpolation || false;

  options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
  options.interpolation.nestingSuffix = options.reuseSuffix || ')';

  return options;
}

function convertAPIOptions(options) {
  if (options.resStore) options.resources = options.resStore;

  if (options.ns && options.ns.defaultNs) {
    options.defaultNS = options.ns.defaultNs;
    options.ns = options.ns.namespaces;
  } else {
    options.defaultNS = options.ns || 'translation';
  }

  if (options.fallbackToDefaultNS && options.defaultNS) options.fallbackNS = options.defaultNS;

  options.saveMissing = options.sendMissing;
  options.saveMissingTo = options.sendMissingTo || 'current';
  options.returnNull = options.fallbackOnNull ? false : true;
  options.returnEmptyString = options.fallbackOnEmpty ? false : true;
  options.returnObjects = options.returnObjectTrees;
  options.joinArrays = '\n';

  options.returnedObjectHandler = options.objectTreeKeyHandler;
  options.parseMissingKeyHandler = options.parseMissingKey;
  options.appendNamespaceToMissingKey = true;

  options.nsSeparator = options.nsseparator;
  options.keySeparator = options.keyseparator;

  if (options.shortcutFunction === 'sprintf') {
    options.overloadTranslationOptionHandler = function (args) {
      var values = [];

      for (var i = 1; i < args.length; i++) {
        values.push(args[i]);
      }

      return {
        postProcess: 'sprintf',
        sprintf: values
      };
    };
  }

  options.whitelist = options.lngWhitelist;
  options.preload = options.preload;
  if (options.load === 'current') options.load = 'currentOnly';
  if (options.load === 'unspecific') options.load = 'languageOnly';

  // backend
  options.backend = options.backend || {};
  options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
  options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
  options.backend.allowMultiLoading = options.dynamicLoad;

  // cache
  options.cache = options.cache || {};
  options.cache.prefix = 'res_';
  options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
  options.cache.enabled = options.useLocalStorage ? true : false;

  options = convertInterpolation(options);
  if (options.defaultVariables) options.interpolation.defaultVariables = options.defaultVariables;

  // TODO: deprecation
  // if (options.getAsync === false) throw deprecation error

  return options;
}

function convertJSONOptions(options) {
  options = convertInterpolation(options);
  options.joinArrays = '\n';

  return options;
}

function convertTOptions(options) {
  if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation) {
    options = convertInterpolation(options);
  }

  options.nsSeparator = options.nsseparator;
  options.keySeparator = options.keyseparator;

  options.returnObjects = options.returnObjectTrees;

  return options;
}

function appendBackwardsAPI(i18n) {
  i18n.lng = function () {
    _logger2.default.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
    return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
  };

  i18n.preload = function (lngs, cb) {
    _logger2.default.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
    i18n.loadLanguages(lngs, cb);
  };

  i18n.setLng = function (lng, options, callback) {
    _logger2.default.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) options = {};

    if (options.fixLng === true) {
      if (callback) return callback(null, i18n.getFixedT(lng));
    }

    i18n.changeLanguage(lng, callback);
  };

  i18n.addPostProcessor = function (name, fc) {
    _logger2.default.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
    i18n.use({
      type: 'postProcessor',
      name: name,
      process: fc
    });
  };
}
});

define('i18next/LanguageUtils',['require','exports','module','./logger'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;

    this.whitelist = this.options.whitelist || false;
    this.logger = _logger2.default.create('languageUtils');
  }

  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    if (code.indexOf('-') < 0) return code;

    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
    var p = code.split('-');
    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
  };

  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      var p = code.split('-');

      if (this.options.lowerCaseLng) {
        p = p.map(function (part) {
          return part.toLowerCase();
        });
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();

        // if lenght 2 guess it's a country
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }

      return p.join('-');
    } else {
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  };

  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code, exactMatch) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist && !exactMatch) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1 ? true : false;
  };

  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
    var _this = this;

    fallbackCode = fallbackCode || this.options.fallbackLng || [];
    if (typeof fallbackCode === 'string') fallbackCode = [fallbackCode];

    var codes = [];
    var addCode = function addCode(code) {
      var exactMatch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (_this.isWhitelisted(code, exactMatch)) {
        codes.push(code);
      } else {
        _this.logger.warn('rejecting non-whitelisted language code: ' + code);
      }
    };

    if (typeof code === 'string' && code.indexOf('-') > -1) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code), true);
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }

    fallbackCode.forEach(function (fc) {
      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
    });

    return codes;
  };

  return LanguageUtil;
}();

;

exports.default = LanguageUtil;
});

define('i18next/PluralResolver',['require','exports','module','./logger'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* eslint-disable */
var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  }
};
/* eslint-enable */

function createRules() {
  var l,
      rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      return rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;

    this.logger = _logger2.default.create('pluralResolver');

    this.rules = createRules();
  }

  PluralResolver.prototype.addRule = function addRule(lng, obj) {
    this.rules[lng] = obj;
  };

  PluralResolver.prototype.getRule = function getRule(code) {
    return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  };

  PluralResolver.prototype.needsPlural = function needsPlural(code) {
    var rule = this.getRule(code);

    return rule && rule.numbers.length <= 1 ? false : true;
  };

  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
    var _this = this;

    var rule = this.getRule(code);

    if (rule) {
      var _ret = function () {
        if (rule.numbers.length === 1) return {
            v: ''
          }; // only singular

        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        // special treatment for lngs only having singular and plural
        if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this.options.prepend && suffix.toString() ? _this.options.prepend + suffix.toString() : suffix.toString();
        };

        // COMPATIBILITY JSON
        // v1
        if (_this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return {
              v: ''
            };
          if (typeof suffix === 'number') return {
              v: '_plural_' + suffix.toString()
            };
          return {
            v: returnSuffix()
          };
        }
        // v2
        else if (_this.options.compatibilityJSON === 'v2' || rule.numbers.length === 2 && rule.numbers[0] === 1) {
            return {
              v: returnSuffix()
            };
          }
          // v3 - gettext index
          else if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
              return {
                v: returnSuffix()
              };
            }
        return {
          v: _this.options.prepend && idx.toString() ? _this.options.prepend + idx.toString() : idx.toString()
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } else {
      this.logger.warn('no plural rule found for: ' + code);
      return '';
    }
  };

  return PluralResolver;
}();

;

exports.default = PluralResolver;
});

define('i18next/Interpolator',['require','exports','module','./utils','./logger'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Interpolator);

    this.logger = _logger2.default.create('interpolator');

    this.init(options, true);
  }

  Interpolator.prototype.init = function init() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var reset = arguments[1];

    if (reset) {
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };
    }
    if (!options.interpolation) options.interpolation = { escapeValue: true };

    var iOpts = options.interpolation;

    this.escapeValue = iOpts.escapeValue;

    this.prefix = iOpts.prefix ? utils.regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
    this.suffix = iOpts.suffix ? utils.regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
    this.formatSeparator = iOpts.formatSeparator ? utils.regexEscape(iOpts.formatSeparator) : iOpts.formatSeparator || ',';

    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

    this.nestingPrefix = iOpts.nestingPrefix ? utils.regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || utils.regexEscape('$t(');
    this.nestingSuffix = iOpts.nestingSuffix ? utils.regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || utils.regexEscape(')');

    // the regexp
    var regexpStr = this.prefix + '(.+?)' + this.suffix;
    this.regexp = new RegExp(regexpStr, 'g');

    var regexpUnescapeStr = this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
  };

  Interpolator.prototype.reset = function reset() {
    if (this.options) this.init(this.options);
  };

  Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
    var _this = this;

    var match = void 0,
        value = void 0;

    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }

    var handleFormat = function handleFormat(key) {
      if (key.indexOf(_this.formatSeparator) < 0) return utils.getPath(data, key);

      var p = key.split(_this.formatSeparator);
      var k = p.shift().trim();
      var f = p.join(_this.formatSeparator).trim();

      return _this.format(utils.getPath(data, k), f, lng);
    };

    // unescape if has unescapePrefix/Suffix
    while (match = this.regexpUnescape.exec(str)) {
      var _value = handleFormat(match[1].trim());
      str = str.replace(match[0], _value);
      this.regexpUnescape.lastIndex = 0;
    }

    // regular escape on demand
    while (match = this.regexp.exec(str)) {
      value = handleFormat(match[1].trim());
      if (typeof value !== 'string') value = utils.makeString(value);
      if (!value) {
        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
        value = '';
      }
      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };

  Interpolator.prototype.nest = function nest(str, fc) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var match = void 0,
        value = void 0;

    var clonedOptions = JSON.parse(JSON.stringify(options));
    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }

    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
    function handleHasOptions(key) {
      if (key.indexOf(',') < 0) return key;

      var p = key.split(',');
      key = p.shift();
      var optionsString = p.join(',');
      optionsString = this.interpolate(optionsString, clonedOptions);

      try {
        clonedOptions = JSON.parse(optionsString);
      } catch (e) {
        this.logger.error('failed parsing options string in nesting for key ' + key, e);
      }

      return key;
    }

    // regular escape on demand
    while (match = this.nestingRegexp.exec(str)) {
      value = fc(handleHasOptions.call(this, match[1].trim()), clonedOptions);
      if (typeof value !== 'string') value = utils.makeString(value);
      if (!value) {
        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
        value = '';
      }
      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };

  return Interpolator;
}();

exports.default = Interpolator;
});

define('i18next/BackendConnector',['require','exports','module','./utils','./logger','./EventEmitter'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    _classCallCheck(this, Connector);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = _logger2.default.create('backendConnector');

    _this.state = {};
    _this.queue = [];

    _this.backend && _this.backend.init && _this.backend.init(services, options.backend, options);
    return _this;
  }

  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
    var _this2 = this;

    // find what needs to be loaded
    var toLoad = [],
        pending = [],
        toLoadLanguages = [],
        toLoadNamespaces = [];

    languages.forEach(function (lng) {
      var hasAllNamespaces = true;

      namespaces.forEach(function (ns) {
        var name = lng + '|' + ns;

        if (_this2.store.hasResourceBundle(lng, ns)) {
          _this2.state[name] = 2; // loaded
        } else if (_this2.state[name] < 0) {
            // nothing to do for err
          } else if (_this2.state[name] === 1) {
              if (pending.indexOf(name) < 0) pending.push(name);
            } else {
              _this2.state[name] = 1; // pending

              hasAllNamespaces = false;

              if (pending.indexOf(name) < 0) pending.push(name);
              if (toLoad.indexOf(name) < 0) toLoad.push(name);
              if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
            }
      });

      if (!hasAllNamespaces) toLoadLanguages.push(lng);
    });

    if (toLoad.length || pending.length) {
      this.queue.push({
        pending: pending,
        loaded: {},
        errors: [],
        callback: callback
      });
    }

    return {
      toLoad: toLoad,
      pending: pending,
      toLoadLanguages: toLoadLanguages,
      toLoadNamespaces: toLoadNamespaces
    };
  };

  Connector.prototype.loaded = function loaded(name, err, data) {
    var _this3 = this;

    var _name$split = name.split('|');

    var _name$split2 = _slicedToArray(_name$split, 2);

    var lng = _name$split2[0];
    var ns = _name$split2[1];


    if (err) this.emit('failedLoading', lng, ns, err);

    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }

    // set loaded
    this.state[name] = err ? -1 : 2;
    // callback if ready
    this.queue.forEach(function (q) {
      utils.pushPath(q.loaded, [lng], ns);
      remove(q.pending, name);

      if (err) q.errors.push(err);

      if (q.pending.length === 0 && !q.done) {
        q.errors.length ? q.callback(q.errors) : q.callback();
        _this3.emit('loaded', q.loaded);
        q.done = true;
      }
    });

    // remove done load requests
    this.queue = this.queue.filter(function (q) {
      return !q.done;
    });
  };

  Connector.prototype.read = function read(lng, ns, fcName, tried, wait, callback) {
    var _this4 = this;

    if (!tried) tried = 0;
    if (!wait) wait = 250;

    if (!lng.length) return callback(null, {}); // noting to load

    this.backend[fcName](lng, ns, function (err, data) {
      if (err && data /* = retryFlag */ && tried < 5) {
        setTimeout(function () {
          _this4.read.call(_this4, lng, ns, fcName, ++tried, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    });
  };

  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this5 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    var options = _extends({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    var toLoad = this.queueLoad(languages, namespaces, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
      return; // pendings will trigger callback
    }

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
        if (err) _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err);
        if (!err && data) _this5.logger.log('loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data);

        toLoad.toLoad.forEach(function (name) {
          var _name$split3 = name.split('|');

          var _name$split4 = _slicedToArray(_name$split3, 2);

          var l = _name$split4[0];
          var n = _name$split4[1];


          var bundle = utils.getPath(data, [l, n]);
          if (bundle) {
            _this5.loaded(name, err, bundle);
          } else {
            var _err = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
            _this5.loaded(name, _err);
            _this5.logger.error(_err);
          }
        });
      });
    }

    // load one by one
    else {
        (function () {
          var readOne = function readOne(name) {
            var _this6 = this;

            var _name$split5 = name.split('|');

            var _name$split6 = _slicedToArray(_name$split5, 2);

            var lng = _name$split6[0];
            var ns = _name$split6[1];


            this.read(lng, ns, 'read', null, null, function (err, data) {
              if (err) _this6.logger.warn('loading namespace ' + ns + ' for language ' + lng + ' failed', err);
              if (!err && data) _this6.logger.log('loaded namespace ' + ns + ' for language ' + lng, data);

              _this6.loaded(name, err, data);
            });
          };

          ;

          toLoad.toLoad.forEach(function (name) {
            readOne.call(_this5, name);
          });
        })();
      }
  };

  Connector.prototype.reload = function reload(languages, namespaces) {
    var _this7 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
    }
    var options = _extends({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(languages, namespaces, 'readMulti', null, null, function (err, data) {
        if (err) _this7.logger.warn('reloading namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading failed', err);
        if (!err && data) _this7.logger.log('reloaded namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading', data);

        languages.forEach(function (l) {
          namespaces.forEach(function (n) {
            var bundle = utils.getPath(data, [l, n]);
            if (bundle) {
              _this7.loaded(l + '|' + n, err, bundle);
            } else {
              var _err2 = 'reloading namespace ' + n + ' for language ' + l + ' via multiloading failed';
              _this7.loaded(l + '|' + n, _err2);
              _this7.logger.error(_err2);
            }
          });
        });
      });
    }

    // load one by one
    else {
        (function () {
          var readOne = function readOne(name) {
            var _this8 = this;

            var _name$split7 = name.split('|');

            var _name$split8 = _slicedToArray(_name$split7, 2);

            var lng = _name$split8[0];
            var ns = _name$split8[1];


            this.read(lng, ns, 'read', null, null, function (err, data) {
              if (err) _this8.logger.warn('reloading namespace ' + ns + ' for language ' + lng + ' failed', err);
              if (!err && data) _this8.logger.log('reloaded namespace ' + ns + ' for language ' + lng, data);

              _this8.loaded(name, err, data);
            });
          };

          ;

          languages.forEach(function (l) {
            namespaces.forEach(function (n) {
              readOne.call(_this7, l + '|' + n);
            });
          });
        })();
      }
  };

  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
    if (this.backend && this.backend.create) this.backend.create(languages, namespace, key, fallbackValue);

    // write to store to avoid resending
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  };

  return Connector;
}(_EventEmitter3.default);

exports.default = Connector;
});

define('i18next/CacheConnector',['require','exports','module','./utils','./logger','./EventEmitter'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _EventEmitter2 = require('./EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Connector = function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(cache, store, services) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    _classCallCheck(this, Connector);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.cache = cache;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = _logger2.default.create('cacheConnector');

    _this.cache && _this.cache.init && _this.cache.init(services, options.cache, options);
    return _this;
  }

  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this2 = this;

    if (!this.cache) return callback && callback();
    var options = _extends({}, this.cache.options, this.options.cache);

    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    if (options.enabled) {
      this.cache.load(languages, function (err, data) {
        if (err) _this2.logger.error('loading languages ' + languages.join(', ') + ' from cache failed', err);
        if (data) {
          for (var l in data) {
            for (var n in data[l]) {
              if (n === 'i18nStamp') continue;
              var bundle = data[l][n];
              if (bundle) _this2.store.addResourceBundle(l, n, bundle);
            }
          }
        }
        if (callback) callback();
      });
    } else {
      if (callback) callback();
    }
  };

  Connector.prototype.save = function save() {
    if (this.cache && this.options.cache && this.options.cache.enabled) this.cache.save(this.store.data);
  };

  return Connector;
}(_EventEmitter3.default);

exports.default = Connector;
});

define('i18next/defaults',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.transformOptions = transformOptions;
function get() {
  return {
    debug: false,
    initImmediate: true,

    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false, // string or array of namespaces

    whitelist: false, // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all', // | currentOnly | languageOnly
    preload: false, // array with preload languages

    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',

    saveMissing: false, // enable to send missing values
    saveMissingTo: 'fallback', // 'current' || 'all'
    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

    postProcess: false, // string or array of postProcessor names
    returnNull: true, // allows null value as valid translation
    returnEmptyString: true, // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false, // or string to join array
    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
      return { defaultValue: args[1] };
    },

    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',

      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
    }
  };
}

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  // extend whitelist with cimode
  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) options.whitelist.push('cimode');

  return options;
}
});

define('aurelia-i18n/relativeTime',['exports', './i18n', './defaultTranslations/relative.time', 'aurelia-event-aggregator'], function (exports, _i18n, _relative, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RelativeTime = undefined;

  

  var RelativeTime = exports.RelativeTime = function () {
    RelativeTime.inject = function inject() {
      return [_i18n.I18N, _aureliaEventAggregator.EventAggregator];
    };

    function RelativeTime(i18n, ea) {
      var _this = this;

      

      this.service = i18n;
      this.ea = ea;

      this.service.i18nextReady().then(function () {
        _this.setup();
      });
      this.ea.subscribe('i18n:locale:changed', function (locales) {
        _this.setup(locales);
      });
    }

    RelativeTime.prototype.setup = function setup(locales) {
      var trans = _relative.translations.default || _relative.translations;
      var key = locales && locales.newValue ? locales.newValue : this.service.getLocale();
      var fallbackLng = this.service.i18next.fallbackLng;
      var index = 0;

      if ((index = key.indexOf('-')) >= 0) {
        var baseLocale = key.substring(0, index);

        if (trans[baseLocale]) {
          this.addTranslationResource(baseLocale, trans[baseLocale].translation);
        }
      }

      if (trans[key]) {
        this.addTranslationResource(key, trans[key].translation);
      }
      if (trans[fallbackLng]) {
        this.addTranslationResource(key, trans[fallbackLng].translation);
      }
    };

    RelativeTime.prototype.addTranslationResource = function addTranslationResource(key, translation) {
      var options = this.service.i18next.options;

      if (options.interpolation && options.interpolation.prefix !== '__' || options.interpolation.suffix !== '__') {
        for (var subkey in translation) {
          translation[subkey] = translation[subkey].replace('__count__', options.interpolation.prefix + 'count' + options.interpolation.suffix);
        }
      }

      this.service.i18next.addResources(key, 'translation', translation);
    };

    RelativeTime.prototype.getRelativeTime = function getRelativeTime(time) {
      var now = new Date();
      var diff = now.getTime() - time.getTime();

      var timeDiff = this.getTimeDiffDescription(diff, 'year', 31104000000);
      if (!timeDiff) {
        timeDiff = this.getTimeDiffDescription(diff, 'month', 2592000000);
        if (!timeDiff) {
          timeDiff = this.getTimeDiffDescription(diff, 'day', 86400000);
          if (!timeDiff) {
            timeDiff = this.getTimeDiffDescription(diff, 'hour', 3600000);
            if (!timeDiff) {
              timeDiff = this.getTimeDiffDescription(diff, 'minute', 60000);
              if (!timeDiff) {
                timeDiff = this.getTimeDiffDescription(diff, 'second', 1000);
                if (!timeDiff) {
                  timeDiff = this.service.tr('now');
                }
              }
            }
          }
        }
      }

      return timeDiff;
    };

    RelativeTime.prototype.getTimeDiffDescription = function getTimeDiffDescription(diff, unit, timeDivisor) {
      var unitAmount = (diff / timeDivisor).toFixed(0);
      if (unitAmount > 0) {
        return this.service.tr(unit, { count: parseInt(unitAmount, 10), context: 'ago' });
      } else if (unitAmount < 0) {
        var abs = Math.abs(unitAmount);
        return this.service.tr(unit, { count: abs, context: 'in' });
      }

      return null;
    };

    return RelativeTime;
  }();
});
define('aurelia-i18n/defaultTranslations/relative.time',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var translations = exports.translations = {
    ar: {
      translation: {
        'now': 'الآن',
        'second_ago': 'منذ __count__ ثانية',
        'second_ago_plural': 'منذ __count__ ثواني',
        'second_in': 'في __count__ ثانية',
        'second_in_plural': 'في __count__ ثواني',
        'minute_ago': 'منذ __count__ دقيقة',
        'minute_ago_plural': 'منذ __count__ دقائق',
        'minute_in': 'في __count__ دقيقة',
        'minute_in_plural': 'في __count__ دقائق',
        'hour_ago': 'منذ __count__ ساعة',
        'hour_ago_plural': 'منذ __count__ ساعات',
        'hour_in': 'في __count__ ساعة',
        'hour_in_plural': 'في __count__ ساعات',
        'day_ago': 'منذ __count__ يوم',
        'day_ago_plural': 'منذ __count__ أيام',
        'day_in': 'في __count__ يوم',
        'day_in_plural': 'في __count__ أيام'
      }
    },
    en: {
      translation: {
        'now': 'just now',
        'second_ago': '__count__ second ago',
        'second_ago_plural': '__count__ seconds ago',
        'second_in': 'in __count__ second',
        'second_in_plural': 'in __count__ seconds',
        'minute_ago': '__count__ minute ago',
        'minute_ago_plural': '__count__ minutes ago',
        'minute_in': 'in __count__ minute',
        'minute_in_plural': 'in __count__ minutes',
        'hour_ago': '__count__ hour ago',
        'hour_ago_plural': '__count__ hours ago',
        'hour_in': 'in __count__ hour',
        'hour_in_plural': 'in __count__ hours',
        'day_ago': '__count__ day ago',
        'day_ago_plural': '__count__ days ago',
        'day_in': 'in __count__ day',
        'day_in_plural': 'in __count__ days',
        'month_ago': '__count__ month ago',
        'month_ago_plural': '__count__ months ago',
        'month_in': 'in __count__ month',
        'month_in_plural': 'in __count__ months',
        'year_ago': '__count__ year ago',
        'year_ago_plural': '__count__ years ago',
        'year_in': 'in __count__ year',
        'year_in_plural': 'in __count__ years'
      }
    },
    it: {
      translation: {
        'now': 'adesso',
        'second_ago': '__count__ secondo fa',
        'second_ago_plural': '__count__ secondi fa',
        'second_in': 'in __count__ secondo',
        'second_in_plural': 'in __count__ secondi',
        'minute_ago': '__count__ minuto fa',
        'minute_ago_plural': '__count__ minuti fa',
        'minute_in': 'in __count__ minuto',
        'minute_in_plural': 'in __count__ minuti',
        'hour_ago': '__count__ ora fa',
        'hour_ago_plural': '__count__ ore fa',
        'hour_in': 'in __count__ ora',
        'hour_in_plural': 'in __count__ ore',
        'day_ago': '__count__ giorno fa',
        'day_ago_plural': '__count__ giorni fa',
        'day_in': 'in __count__ giorno',
        'day_in_plural': 'in __count__ giorni',
        'month_ago': '__count__ mese fa',
        'month_ago_plural': '__count__ mesi fa',
        'month_in': 'in __count__ mese',
        'month_in_plural': 'in __count__ mesi',
        'year_ago': '__count__ anno fa',
        'year_ago_plural': '__count__ anni fa',
        'year_in': 'in __count__ anno',
        'year_in_plural': 'in __count__ anni'
      }
    },
    de: {
      translation: {
        'now': 'jetzt gerade',
        'second_ago': 'vor __count__ Sekunde',
        'second_ago_plural': 'vor __count__ Sekunden',
        'second_in': 'in __count__ Sekunde',
        'second_in_plural': 'in __count__ Sekunden',
        'minute_ago': 'vor __count__ Minute',
        'minute_ago_plural': 'vor __count__ Minuten',
        'minute_in': 'in __count__ Minute',
        'minute_in_plural': 'in __count__ Minuten',
        'hour_ago': 'vor __count__ Stunde',
        'hour_ago_plural': 'vor __count__ Stunden',
        'hour_in': 'in __count__ Stunde',
        'hour_in_plural': 'in __count__ Stunden',
        'day_ago': 'vor __count__ Tag',
        'day_ago_plural': 'vor __count__ Tagen',
        'day_in': 'in __count__ Tag',
        'day_in_plural': 'in __count__ Tagen',
        'month_ago': 'vor __count__ Monat',
        'month_ago_plural': 'vor __count__ Monaten',
        'month_in': 'in __count__ Monat',
        'month_in_plural': 'in __count__ Monaten',
        'year_ago': 'vor __count__ Jahr',
        'year_ago_plural': 'vor __count__ Jahren',
        'year_in': 'in __count__ Jahr',
        'year_in_plural': 'in __count__ Jahren'
      }
    },
    nl: {
      translation: {
        'now': 'zonet',
        'second_ago': '__count__ seconde geleden',
        'second_ago_plural': '__count__ seconden geleden',
        'second_in': 'in __count__ seconde',
        'second_in_plural': 'in __count__ seconden',
        'minute_ago': '__count__ minuut geleden',
        'minute_ago_plural': '__count__ minuten geleden',
        'minute_in': 'in __count__ minuut',
        'minute_in_plural': 'in __count__ minuten',
        'hour_ago': '__count__ uur geleden',
        'hour_ago_plural': '__count__ uren geleden',
        'hour_in': 'in __count__ uur',
        'hour_in_plural': 'in __count__ uren',
        'day_ago': '__count__ dag geleden',
        'day_ago_plural': '__count__ dagen geleden',
        'day_in': 'in __count__ dag',
        'day_in_plural': 'in __count__ dagen',
        'month_ago': '__count__ maand geleden',
        'month_ago_plural': '__count__ maanden geleden',
        'month_in': 'in __count__ maand',
        'month_in_plural': 'in __count__ maanden',
        'year_ago': '__count__ jaar geleden',
        'year_ago_plural': '__count__ jaren geleden',
        'year_in': 'in __count__ jaar',
        'year_in_plural': 'in __count__ jaren'
      }
    },
    fr: {
      translation: {
        'now': 'juste',
        'second_ago': '__count__ seconde passé',
        'second_ago_plural': '__count__ secondes passé',
        'second_in': 'en __count__ seconde',
        'second_in_plural': 'en __count__ secondes',
        'minute_ago': '__count__ minute passé',
        'minute_ago_plural': '__count__ minutes passé',
        'minute_in': 'en __count__ minute',
        'minute_in_plural': 'en __count__ minutes',
        'hour_ago': '__count__ heure passé',
        'hour_ago_plural': '__count__ heures passé',
        'hour_in': 'en __count__ heure',
        'hour_in_plural': 'en __count__ heures',
        'day_ago': '__count__ jour passé',
        'day_ago_plural': '__count__ jours passé',
        'day_in': 'en __count__ jour',
        'day_in_plural': 'en __count__ jours'
      }
    },
    th: {
      translation: {
        'now': 'เมื่อกี้',
        'second_ago': '__count__ วินาที ที่ผ่านมา',
        'second_ago_plural': '__count__ วินาที ที่ผ่านมา',
        'second_in': 'อีก __count__ วินาที',
        'second_in_plural': 'อีก __count__ วินาที',
        'minute_ago': '__count__ นาที ที่ผ่านมา',
        'minute_ago_plural': '__count__ นาที ที่ผ่านมา',
        'minute_in': 'อีก __count__ นาที',
        'minute_in_plural': 'อีก __count__ นาที',
        'hour_ago': '__count__ ชั่วโมง ที่ผ่านมา',
        'hour_ago_plural': '__count__ ชั่วโมง ที่ผ่านมา',
        'hour_in': 'อีก __count__ ชั่วโมง',
        'hour_in_plural': 'อีก __count__ ชั่วโมง',
        'day_ago': '__count__ วัน ที่ผ่านมา',
        'day_ago_plural': '__count__ วัน ที่ผ่านมา',
        'day_in': 'อีก __count__ วัน',
        'day_in_plural': 'อีก __count__ วัน'
      }
    },
    sv: {
      translation: {
        'now': 'just nu',
        'second_ago': '__count__ sekund sedan',
        'second_ago_plural': '__count__ sekunder sedan',
        'second_in': 'om __count__ sekund',
        'second_in_plural': 'om __count__ sekunder',
        'minute_ago': '__count__ minut sedan',
        'minute_ago_plural': '__count__ minuter sedan',
        'minute_in': 'om __count__ minut',
        'minute_in_plural': 'om __count__ minuter',
        'hour_ago': '__count__ timme sedan',
        'hour_ago_plural': '__count__ timmar sedan',
        'hour_in': 'om __count__ timme',
        'hour_in_plural': 'om __count__ timmar',
        'day_ago': '__count__ dag sedan',
        'day_ago_plural': '__count__ dagar sedan',
        'day_in': 'om __count__ dag',
        'day_in_plural': 'om __count__ dagar'
      }
    },
    da: {
      translation: {
        'now': 'lige nu',
        'second_ago': '__count__ sekunder siden',
        'second_ago_plural': '__count__ sekunder siden',
        'second_in': 'om __count__ sekund',
        'second_in_plural': 'om __count__ sekunder',
        'minute_ago': '__count__ minut siden',
        'minute_ago_plural': '__count__ minutter siden',
        'minute_in': 'om __count__ minut',
        'minute_in_plural': 'om __count__ minutter',
        'hour_ago': '__count__ time siden',
        'hour_ago_plural': '__count__ timer siden',
        'hour_in': 'om __count__ time',
        'hour_in_plural': 'om __count__ timer',
        'day_ago': '__count__ dag siden',
        'day_ago_plural': '__count__ dage siden',
        'day_in': 'om __count__ dag',
        'day_in_plural': 'om __count__ dage'
      }
    },
    no: {
      translation: {
        'now': 'akkurat nå',
        'second_ago': '__count__ sekund siden',
        'second_ago_plural': '__count__ sekunder siden',
        'second_in': 'om __count__ sekund',
        'second_in_plural': 'om __count__ sekunder',
        'minute_ago': '__count__ minutt siden',
        'minute_ago_plural': '__count__ minutter siden',
        'minute_in': 'om __count__ minutt',
        'minute_in_plural': 'om __count__ minutter',
        'hour_ago': '__count__ time siden',
        'hour_ago_plural': '__count__ timer siden',
        'hour_in': 'om __count__ time',
        'hour_in_plural': 'om __count__ timer',
        'day_ago': '__count__ dag siden',
        'day_ago_plural': '__count__ dager siden',
        'day_in': 'om __count__ dag',
        'day_in_plural': 'om __count__ dager'
      }
    },
    jp: {
      translation: {
        'now': 'たった今',
        'second_ago': '__count__ 秒前',
        'second_ago_plural': '__count__ 秒前',
        'second_in': 'あと __count__ 秒',
        'second_in_plural': 'あと __count__ 秒',
        'minute_ago': '__count__ 分前',
        'minute_ago_plural': '__count__ 分前',
        'minute_in': 'あと __count__ 分',
        'minute_in_plural': 'あと __count__ 分',
        'hour_ago': '__count__ 時間前',
        'hour_ago_plural': '__count__ 時間前',
        'hour_in': 'あと __count__ 時間',
        'hour_in_plural': 'あと __count__ 時間',
        'day_ago': '__count__ 日間前',
        'day_ago_plural': '__count__ 日間前',
        'day_in': 'あと __count__ 日間',
        'day_in_plural': 'あと __count__ 日間'
      }
    },
    pt: {
      translation: {
        'now': 'neste exato momento',
        'second_ago': '__count__ segundo atrás',
        'second_ago_plural': '__count__ segundos atrás',
        'second_in': 'em __count__ segundo',
        'second_in_plural': 'em __count__ segundos',
        'minute_ago': '__count__ minuto atrás',
        'minute_ago_plural': '__count__ minutos atrás',
        'minute_in': 'em __count__ minuto',
        'minute_in_plural': 'em __count__ minutos',
        'hour_ago': '__count__ hora atrás',
        'hour_ago_plural': '__count__ horas atrás',
        'hour_in': 'em __count__ hora',
        'hour_in_plural': 'em __count__ horas',
        'day_ago': '__count__ dia atrás',
        'day_ago_plural': '__count__ dias atrás',
        'day_in': 'em __count__ dia',
        'day_in_plural': 'em __count__ dias',
        'month_ago': '__count__ mês atrás',
        'month_ago_plural': '__count__ meses atrás',
        'month_in': 'em __count__ mês',
        'month_in_plural': 'em __count__ meses',
        'year_ago': '__count__ ano atrás',
        'year_ago_plural': '__count__ anos atrás',
        'year_in': 'em __count__ ano',
        'year_in_plural': 'em __count__ anos'
      }
    }
  };
});
define('aurelia-i18n/df',['exports', 'aurelia-logging', './i18n'], function (exports, _aureliaLogging, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DfValueConverter = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  

  var DfValueConverter = exports.DfValueConverter = function () {
    DfValueConverter.inject = function inject() {
      return [_i18n.I18N];
    };

    function DfValueConverter(i18n) {
      

      this.service = i18n;
    }

    DfValueConverter.prototype.toView = function toView(value, dfOrOptions, locale, df) {
      if (value === null || typeof value === 'undefined' || typeof value === 'string' && value.trim() === '') {
        return value;
      }

      if (dfOrOptions && typeof dfOrOptions.format === 'function') {
        return dfOrOptions.format(value);
      } else if (df) {
        var i18nLogger = LogManager.getLogger('i18n');
        i18nLogger.warn('This ValueConverter signature is depcrecated and will be removed in future releases. Please use the signature [dfOrOptions, locale]');
      } else {
        df = this.service.df(dfOrOptions, locale || this.service.getLocale());
      }

      return df.format(value);
    };

    return DfValueConverter;
  }();
});
define('aurelia-i18n/nf',['exports', 'aurelia-logging', './i18n'], function (exports, _aureliaLogging, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NfValueConverter = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  

  var NfValueConverter = exports.NfValueConverter = function () {
    NfValueConverter.inject = function inject() {
      return [_i18n.I18N];
    };

    function NfValueConverter(i18n) {
      

      this.service = i18n;
    }

    NfValueConverter.prototype.toView = function toView(value, nfOrOptions, locale, nf) {
      if (value === null || typeof value === 'undefined' || typeof value === 'string' && value.trim() === '') {
        return value;
      }

      if (nfOrOptions && typeof nfOrOptions.format === 'function') {
        return nfOrOptions.format(value);
      } else if (nf) {
        var i18nLogger = LogManager.getLogger('i18n');
        i18nLogger.warn('This ValueConverter signature is depcrecated and will be removed in future releases. Please use the signature [nfOrOptions, locale]');
      } else {
        nf = this.service.nf(nfOrOptions, locale || this.service.getLocale());
      }

      return nf.format(value);
    };

    return NfValueConverter;
  }();
});
define('aurelia-i18n/rt',['exports', './relativeTime'], function (exports, _relativeTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RtValueConverter = undefined;

  

  var RtValueConverter = exports.RtValueConverter = function () {
    RtValueConverter.inject = function inject() {
      return [_relativeTime.RelativeTime];
    };

    function RtValueConverter(relativeTime) {
      

      this.service = relativeTime;
    }

    RtValueConverter.prototype.toView = function toView(value) {
      return this.service.getRelativeTime(value);
    };

    return RtValueConverter;
  }();
});
define('aurelia-i18n/t',['exports', './i18n', 'aurelia-event-aggregator', 'aurelia-templating', 'aurelia-templating-resources', 'aurelia-binding', './utils'], function (exports, _i18n, _aureliaEventAggregator, _aureliaTemplating, _aureliaTemplatingResources, _aureliaBinding, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TBindingBehavior = exports.TCustomAttribute = exports.TParamsCustomAttribute = exports.TValueConverter = undefined;

  var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _class5, _temp3;

  

  var TValueConverter = exports.TValueConverter = function () {
    TValueConverter.inject = function inject() {
      return [_i18n.I18N];
    };

    function TValueConverter(i18n) {
      

      this.service = i18n;
    }

    TValueConverter.prototype.toView = function toView(value, options) {
      return this.service.tr(value, options);
    };

    return TValueConverter;
  }();

  var TParamsCustomAttribute = exports.TParamsCustomAttribute = (_dec = (0, _aureliaTemplating.customAttribute)('t-params'), _dec(_class = (_temp = _class2 = function () {
    function TParamsCustomAttribute(element) {
      

      this.element = element;
    }

    TParamsCustomAttribute.prototype.valueChanged = function valueChanged() {};

    return TParamsCustomAttribute;
  }(), _class2.inject = [Element], _temp)) || _class);
  var TCustomAttribute = exports.TCustomAttribute = (_dec2 = (0, _aureliaTemplating.customAttribute)('t'), _dec2(_class3 = (_temp2 = _class4 = function () {
    function TCustomAttribute(element, i18n, ea, tparams) {
      

      this.element = element;
      this.service = i18n;
      this.ea = ea;
      this.lazyParams = tparams;
    }

    TCustomAttribute.prototype.bind = function bind() {
      var _this = this;

      this.params = this.lazyParams();

      if (this.params) {
        this.params.valueChanged = function (newParams, oldParams) {
          _this.paramsChanged(_this.value, newParams, oldParams);
        };
      }

      var p = this.params !== null ? this.params.value : undefined;
      this.subscription = this.ea.subscribe('i18n:locale:changed', function () {
        _this.service.updateValue(_this.element, _this.value, p);
      });

      this.service.updateValue(this.element, this.value, p);
    };

    TCustomAttribute.prototype.paramsChanged = function paramsChanged(newValue, newParams) {
      this.service.updateValue(this.element, newValue, newParams);
    };

    TCustomAttribute.prototype.valueChanged = function valueChanged(newValue) {
      var p = this.params !== null ? this.params.value : undefined;
      this.service.updateValue(this.element, newValue, p);
    };

    TCustomAttribute.prototype.unbind = function unbind() {
      if (this.subscription) {
        this.subscription.dispose();
      }
    };

    return TCustomAttribute;
  }(), _class4.inject = [Element, _i18n.I18N, _aureliaEventAggregator.EventAggregator, _utils.LazyOptional.of(TParamsCustomAttribute)], _temp2)) || _class3);
  var TBindingBehavior = exports.TBindingBehavior = (_temp3 = _class5 = function () {
    function TBindingBehavior(signalBindingBehavior) {
      

      this.signalBindingBehavior = signalBindingBehavior;
    }

    TBindingBehavior.prototype.bind = function bind(binding, source) {
      this.signalBindingBehavior.bind(binding, source, 'aurelia-translation-signal');

      var sourceExpression = binding.sourceExpression;

      if (sourceExpression.rewritten) {
        return;
      }
      sourceExpression.rewritten = true;

      var expression = sourceExpression.expression;
      sourceExpression.expression = new _aureliaBinding.ValueConverter(expression, 't', sourceExpression.args, [expression].concat(sourceExpression.args));
    };

    TBindingBehavior.prototype.unbind = function unbind(binding, source) {
      this.signalBindingBehavior.unbind(binding, source);
    };

    return TBindingBehavior;
  }(), _class5.inject = [_aureliaTemplatingResources.SignalBindingBehavior], _temp3);
});
define('aurelia-i18n/utils',['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LazyOptional = exports.assignObjectToKeys = exports.extend = undefined;

  

  var _dec, _class;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var extend = exports.extend = function extend(destination, source) {
    for (var property in source) {
      destination[property] = source[property];
    }

    return destination;
  };

  var assignObjectToKeys = exports.assignObjectToKeys = function assignObjectToKeys(root, obj) {
    if (obj === undefined || obj === null) {
      return obj;
    }

    var opts = {};

    Object.keys(obj).map(function (key) {
      if (_typeof(obj[key]) === 'object') {
        extend(opts, assignObjectToKeys(key, obj[key]));
      } else {
        opts[root !== '' ? root + '.' + key : key] = obj[key];
      }
    });

    return opts;
  };

  var LazyOptional = exports.LazyOptional = (_dec = (0, _aureliaDependencyInjection.resolver)(), _dec(_class = function () {
    function LazyOptional(key) {
      

      this.key = key;
    }

    LazyOptional.prototype.get = function get(container) {
      var _this = this;

      return function () {
        if (container.hasResolver(_this.key, false)) {
          return container.get(_this.key);
        }
        return null;
      };
    };

    LazyOptional.of = function of(key) {
      return new LazyOptional(key);
    };

    return LazyOptional;
  }()) || _class);
});
define('aurelia-i18n/base-i18n',['exports', './i18n', 'aurelia-event-aggregator'], function (exports, _i18n, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BaseI18N = undefined;

  

  var _class, _temp;

  var BaseI18N = exports.BaseI18N = (_temp = _class = function () {
    function BaseI18N(i18n, element, ea) {
      var _this = this;

      

      this.i18n = i18n;
      this.element = element;

      this.__i18nDisposer = ea.subscribe('i18n:locale:changed', function () {
        _this.i18n.updateTranslations(_this.element);
      });
    }

    BaseI18N.prototype.attached = function attached() {
      this.i18n.updateTranslations(this.element);
    };

    BaseI18N.prototype.detached = function detached() {
      this.__i18nDisposer.dispose();
    };

    return BaseI18N;
  }(), _class.inject = [_i18n.I18N, Element, _aureliaEventAggregator.EventAggregator], _temp);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"component/core/nav-bar.html\"></require>\n  <require from=\"humane-js/themes/jackedup.css\"></require>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  \n  <nav-bar router.bind=\"router\" username.bind=\"username\" authenticated.bind=\"authenticated\"></nav-bar>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h1 class=\"page-header\" t=\"${router.currentInstruction.config.title}\"></h1>\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!page/index.html', ['module'], function(module) { module.exports = "<template>\n  <h2>\n    <span t=\"Hello developer\"></span>\n    <small t=\"(I'd say world, but you are my world <3)\"></small>\n  </h2>\n\n  <p t=\"Welcome to your todo application\"></p>\n</template>\n"; });
define('text!component/core/nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router,username,authenticated\">\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" t=\"Swan\"></a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li repeat.for=\"row of router.navigation | authFilter: authenticated\" class=\"${row.isActive ? 'active' : ''}\">\n            <a href.bind=\"row.href\"><span t=\"${row.title}\"></span></a>\n          </li>\n        </ul>\n\n        <p class=\"navbar-text navbar-right\">\n          <span t=\"Signed in as\"></span> ${username} <a href=\"#/logout\" class=\"navbar-link\">(<span t=\"logout\"></span>)</a>\n        </p>\n      </div>\n    </div>\n  </nav>\n</template>\n"; });
define('text!page/association-select/demo.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" t=\"Association select from database 'todo'\"></div>\n    <div class=\"panel-body\">\n      <association-select\n        resource=\"list\"\n        property=\"name\"\n        error.bind=\"listError\"\n        value.bind=\"listId\"\n        if.bind=\"!listError\"\n      ></association-select>\n      <div class=\"alert alert-warning\" if.bind=\"!!listError\">\n        <span t=\"Error loading lists: \"></span>${listError.statusText}\n      </div>\n\n      <div if.bind=\"!listError\">\n        <association-select\n          resource=\"todo\"\n          property=\"todo\"\n          error.bind=\"todoError\"\n          value.bind=\"todoId\"\n          criteria.bind=\"listId ? {where:{list:listId}} : {}\"\n          if.bind=\"!todoError\"\n        ></association-select>\n        <div class=\"alert alert-warning\" if.bind=\"!!todoError\">\n          <span t=\"Error loading lists: \"></span>${todoError.statusText}\n        </div>\n      </div>\n\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-body\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n            <span t=\"Selected: \"></span>${listId} :  ${todoId}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!page/auth/login.html', ['module'], function(module) { module.exports = "<template>\n  <form submit.delegate=\"login()\">\n    <div class=\"form-group\">\n      <label for=\"username\" t=\"Username\"></label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" t=\"[placeholder]Username\" value.bind=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\" t=\"Password\"></label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" t=\"[placeholder]Password\" value.bind=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-default\">Login</button>\n  </form>\n</template>\n"; });
define('text!page/auth/logout.html', ['module'], function(module) { module.exports = "<template></template>\n"; });
define('text!page/datatable/demo.html', ['module'], function(module) { module.exports = "<template>\n  <p t=\"This example reads the todos to fill the datatable\"></p>\n\n  <datatable\n    destroyed.delegate=\"myEventCallback($event)\"\n    columns=\"id, todo as title, list.name as List, done as checked, createdAt as date | dateFormat:'M/D/YYYY'\"\n    repository.bind=\"todoRepository\"\n    search-column=\"todo\"\n    searchable\n    sortable\n    edit.call=\"myFunctionCallback($event)\"\n    destroy\n    actions.bind=\"actions\"\n    populate=\"list\"\n  ></datatable>\n\n</template>\n"; });
define('text!page/form/demo.html', ['module'], function(module) { module.exports = "<template>\n\n  <section class=\"row fluid-container\">\n\n    <div class=\"col-xs-4\">\n      <h3 t=\"feedback\">Feedback</h3>\n      <schema-form\n        schema.bind=\"feedbackForm.schema\"\n        model.bind =\"feedbackForm.model\">\n      </schema-form>\n    </div>\n\n    <div class=\"col-xs-4\">\n      <h3>${loginForm.model.email}</h3>\n      <schema-form\n        schema.bind=\"loginForm.schema\"\n        model.bind =\"loginForm.model\">\n      </schema-form>\n    </div>\n\n    <div class=\"col-xs-4\">\n      <h3 t=\"pet.owner\"></h3>\n      <schema-form\n        schema.bind=\"petOwnerForm.schema\"\n        model.bind =\"petOwnerForm.model\">\n      </schema-form>\n    </div>\n\n    <div class=\"col-xs-4\">\n      <h3 t=\"product\"></h3>\n      <schema-form\n        schema.bind=\"productForm.schema\"\n        model.bind =\"productForm.model\">\n      </schema-form>\n    </div>\n\n    <div class=\"col-xs-4\">\n      <h3 t=\"todo\">Todo</h3>\n      <entity-form entity.bind=\"entity\"></entity-form>\n    </div>\n\n  </section>\n\n</template>\n"; });
define('text!page/paged/demo.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" t=\"Database from todo: page:2 limit:2\"></div>\n    <div class=\"panel-body\">\n      <paged repository.bind=\"todoRepository\" data.bind=\"data\" limit=2 page=2 error.bind=\"error\">\n        <div repeat.for=\"todo of data\" if.bind=\"!error\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">${todo.todo}</div>\n            <div class=\"col-xs-4\">${todo.list.name}</div>\n            <div class=\"col-xs-4\"><a href=mailto:${todo.user.username}>${todo.user.username}</a></div>\n          </div>\n        </div>\n\n        <div class=\"alert alert-warning\" if.bind=\"!!error\">\n          <span t=\"Yeah, that didn't work!\"></span>\n          <p><span t=\"Error: \"></span>${error.statusText}</p>\n        </div>\n      </paged>\n    </div>\n  </div>\n\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" t=\"Database error\"></div>\n    <div class=\"panel-body\">\n      <paged repository.bind=\"notARepository\" data.bind=\"noData\" error.bind=\"otherError\">\n        <div repeat.for=\"todo of noData\" if.bind=\"!otherError\">\n          This shouldn't be visible\n        </div>\n\n        <div class=\"alert alert-warning\" if.bind=\"!!otherError\">\n          <span t=\"Yeah, that didn't work!\"></span>\n          <p><span t=\"Error: \"></span>${otherError.statusText}</p>\n        </div>\n      </paged>\n    </div>\n  </div>\n</template>\n"; });
define('text!page/pager/demo.html', ['module'], function(module) { module.exports = "<template>\n  <p t=\"User generated data\"></p>\n  <pager resource.bind=\"pagerData\"></pager>\n\n  <p t=\"Database generated data (from todo)\"></p>\n  <pager resource.bind=\"todoRepository\"></pager>\n\n  <p t=\"Setting the limit and pagerange\"></p>\n  <pager resource.bind=\"pagerData\" limit.bind=\"1\" pagerange.bind=\"1\"></pager>\n</template>\n"; });
define('text!page/todo/create-list.html', ['module'], function(module) { module.exports = "<template>\n  <form submit.delegate=\"save()\">\n    <div class=\"form-group\">\n      <input type=\"text\" required class=\"form-control\" t=\"[placeholder]What todo, what todo...\" value.bind=\"list.name\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" t=\"Create list\"></button>\n  </form>\n</template>\n"; });
define('text!page/todo/list.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"row\">\n    <div class=\"col-md-3\" repeat.for=\"list of lists\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <span\n            class=\"panel-title pull-left\"\n            contenteditable=\"true\"\n            textcontent.bind=\"list.name\"\n            keypress.delegate=\"keypress($event, list)\"\n          ></span>\n          <a class=\"pointer panel-title pull-right\" click.delegate=\"destroy($index)\">\n            <span class=\"fa fa-trash\"></span>\n          </a>\n          <span class=\"clearfix\"></span>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"panel panel-default\" repeat.for=\"todo of list.todos\">\n            <div class=\"panel-body\">\n              ${todo.todo}\n            </div>\n            <div class=\"panel-footer\">\n              <span class=\"pull-left\">\n                <input type=\"checkbox\" checked.bind=\"todo.done\" click.trigger=\"updated(todo)\">\n              </span>\n              <span class=\"pull-right\">\n                <a class=\"pointer panel-title pull-right\" click.delegate=\"destroyTodo(list, $index)\">\n                  <span class=\"fa fa-trash\"></span>\n                </a>\n              </span>\n              <span class=\"clearfix\"></span>\n            </div>\n          </div>\n          <button class=\"btn btn-default btn-block\" t=\"Add todo\" click.trigger=\"addTodo(list)\"></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\" if.bind=\"lists.length < 4\">\n      <a class=\"btn-block btn btn-primary pull-right\" t=\"Create list\" href=\"#/lists/create\"></a>\n    </div>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map
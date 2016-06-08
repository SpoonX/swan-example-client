export default [
  {
    route   : '',
    name    : 'index',
    moduleId: 'page/index',
    nav     : true,
    auth    : true,
    title   : 'Home'
  },
  {
    route   : '/login',
    name    : 'login',
    moduleId: 'page/auth/login',
    nav     : true,
    auth    : false,
    title   : 'Login'
  },
  {
    route: 'logout',
    name: 'logout',
    moduleId: 'page/auth/logout',
    title: 'Logout'
  },
  {
    route   : '/lists',
    name    : 'lists',
    moduleId: 'page/todo/list',
    nav     : true,
    auth    : true,
    title   : 'Todo lists'
  },
  {
    route   : '/lists/create',
    name    : 'lists/create',
    auth    : true,
    moduleId: 'page/todo/create-list',
    title   : 'Create list'
  },
  {
    route   : '/viewmanager',
    name    : 'viewmanager',
    moduleId: 'page/viewmanager/demo',
    nav     : true,
    auth    : true,
    title   : 'Viewmanager'
  },
];

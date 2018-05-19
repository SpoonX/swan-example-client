import {PLATFORM} from 'aurelia-pal'

export default [
  {
    route   : '',
    name    : 'index',
    moduleId: PLATFORM.moduleName('page/index'),
    nav     : true,
    auth    : true,
    title   : 'Home'
  },
  {
    route   : '/login',
    name    : 'login',
    moduleId: PLATFORM.moduleName('page/auth/login'),
    nav     : true,
    auth    : false,
    title   : 'Login'
  },
  {
    route   : 'logout',
    name    : 'logout',
    moduleId: PLATFORM.moduleName('page/auth/logout'),
    title   : 'Logout'
  },
  {
    route   : '/lists',
    name    : 'lists',
    moduleId: PLATFORM.moduleName('page/todo/list'),
    nav     : true,
    auth    : true,
    title   : 'Todo lists'
  },
  {
    route   : '/lists/create',
    name    : 'lists/create',
    auth    : true,
    moduleId: PLATFORM.moduleName('page/todo/create-list'),
    title   : 'Create list'
  },
  {
    route   : '/datatable',
    name    : 'datatable',
    moduleId: PLATFORM.moduleName('page/datatable/demo'),
    nav     : true,
    auth    : true,
    title   : 'Datatable'
  },
  {
    route   : '/pager',
    name    : 'pager',
    moduleId: PLATFORM.moduleName('page/pager/demo'),
    nav     : true,
    auth    : true,
    title   : 'Pager'
  },
  {
    route   : '/association-select',
    name    : 'association-select',
    moduleId: PLATFORM.moduleName('page/association-select/demo'),
    nav     : true,
    auth    : true,
    title   : 'Association select'
  },
  {
    route   : '/paged',
    name    : 'paged',
    moduleId: PLATFORM.moduleName('page/paged/demo'),
    nav     : true,
    auth    : true,
    title   : 'Paged'
  },
  {
    route   : '/form',
    name    : 'form',
    moduleId: PLATFORM.moduleName('page/form/demo'),
    nav     : true,
    auth    : true,
    title   : 'Form'
  },
  {
    route   : '/charts',
    name    : 'charts',
    moduleId: PLATFORM.moduleName('page/charts/demo'),
    nav     : true,
    auth    : true,
    title   : 'Charts'
  }
];

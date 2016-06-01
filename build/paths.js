var root = 'src/';
var appRoot = root + 'scripts/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  less: root + 'styles/main.less',
  styles: outputRoot + '/styles',
  style: root + 'styles/**/*.css',
  output: outputRoot + 'scripts/',
  clean: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const project = require('./aurelia_project/aurelia.json');
const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
  condition ? ensureArray(config) : ensureArray(negativeConfig);

// primary config:
const title = 'Aurelia Navigation Skeleton';
const outDir = path.resolve(__dirname, project.platform.output);
const srcDir = path.resolve(__dirname, 'src');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const baseUrl = '/';

const cssRules = [
  { loader: 'css-loader', 
  options: {name:'csschunk'}}
];

module.exports = ({production, server, extractCss, coverage, analyze} = {}) => ({
  resolve: {
    extensions: ['.js'],
    modules: [srcDir, 'node_modules']
  },
  entry: {
    app: ['aurelia-bootstrapper'],
    vendor: ['bluebird', 'jquery', 'bootstrap']
  },
  mode: production ? 'production' : 'development',
  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: production ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js',
    sourceMapFilename: production ? '[name].[chunkhash].bundle.map' : '[name].[hash].bundle.map',
    chunkFilename: production ? '[name].[chunkhash].chunk.js' : '[name].[hash].chunk.js'
  },
  performance: { hints: false },
  devServer: {
    contentBase: outDir,
    // serve index.html for all 404 (required for push-state)
    historyApiFallback: true
  },
  devtool: production ? 'nosources-source-map' : 'cheap-module-eval-source-map',
  module: {
    rules: [
      // CSS required in JS/TS files should use the style-loader that auto-injects it into the website
      // only when the issuer is a .js/.ts file, so the loaders are not applied inside html templates
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: extractCss ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssRules
        }) : ['style-loader', ...cssRules]
      },
      {
        test: /\.css$/i,
        issuer: [{ test: /\.html$/i }],
        // CSS required in templates cannot be extracted safely
        // because Aurelia would try to require it again in runtime
        use: cssRules
      },
      {
        test: /\.less$/i,
        use: [{loader :'style-loader'},{loader :'css-loader',options: { name: 'less2'}}, {loader:'less-loader',options: { name: 'less2'}}],
        issuer: /\.[tj]s$/i,
      },
      {
        test: /\.less$/i,
        use: [{loader :'css-loader',options: { name: 'less2'}}, {loader:'less-loader',options: { name: 'less2'}}],
        issuer: /\.html?$/i,
      },
      { test: /\.html$/i, loader: 'html-loader' },
      { test: /\.js$/i, loader: 'babel-loader', exclude: nodeModulesDir,
        options: coverage ? { sourceMap: 'inline', plugins: [ 'istanbul' ] } : {}
      },
      {
        test: /\.bundle\.json$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: 'my-chunk'
          }
        }
      },
      { test: /\.json$/i, loader: 'json-loader', options: {name: 'locale'} },
      // use Bluebird as the global Promise implementation:
      { test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
      // exposes jQuery globally as $ and as jQuery:
      { test: require.resolve('jquery'), loader: 'expose-loader?$!expose-loader?jQuery' },
      // embed small images and fonts as Data Urls and larger ones as files:
      { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      // load these fonts normally, as files:
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
    ]
  },
  plugins: [
    new AureliaPlugin(),
    new ProvidePlugin({
      'Promise': 'bluebird',
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ModuleDependenciesPlugin({
      'aurelia-testing': [ './compile-spy', './view-spy' ],
      'aurelia-charts': [
        './component/chart-element',
        './component/chart-picker',
        './component/dimensions-picker'
      ],
      'aurelia-authentication': ['./authFilterValueConverter'],
      'aurelia-form': [
        './attribute/prefixed',
        './component/aurelia-form',
        './component/entity-form',
        './component/form-association',
        './component/form-button',
        './component/form-checkbox',
        './component/form-element',
        './component/form-error',
        './component/form-group',
        './component/form-help',
        './component/form-input',
        './component/form-label',
        './component/form-radio',
        './component/form-select',
        './component/form-textarea',
        './component/view/bootstrap/aurelia-form.html',
        './component/view/bootstrap/entity-form.html',
        './component/view/bootstrap/form-association.html',
        './component/view/bootstrap/form-button.html',
        './component/view/bootstrap/form-checkbox.html',
        './component/view/bootstrap/form-element.html',
        './component/view/bootstrap/form-error.html',
        './component/view/bootstrap/form-group.html',
        './component/view/bootstrap/form-help.html',
        './component/view/bootstrap/form-input.html',
        './component/view/bootstrap/form-label.html',
        './component/view/bootstrap/form-radio.html',
        './component/view/bootstrap/form-select.html',
        './component/view/bootstrap/form-textarea.html'
      ],
      'aurelia-datatable': [
        './columns-filter',
        './convert-manager',
        './datatable',
        './bootstrap/datatable.html'
      ],
      'aurelia-pager': ['./pager', './bootstrap/pager.html'],
      'aurelia-orm': [
        './component/association-select',
        './component/paged',
      ],
      'aurelia-validation': [
        'aurelia-validation/validate-binding-behavior',
        "aurelia-validation/validation-errors-custom-attribute",
        "aurelia-validation/validation-renderer-custom-attribute"
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      metadata: {
        // available in index.ejs //
        title, server, baseUrl
      }
    }),
    ...when(extractCss, new ExtractTextPlugin({
      filename: production ? '[contenthash].css' : '[id].css',
      allChunks: true
    })),
    ...when(production, new CopyWebpackPlugin([
      { from: 'static/favicon.ico', to: 'favicon.ico' }])),
    ...when(analyze, new BundleAnalyzerPlugin())
  ]
});

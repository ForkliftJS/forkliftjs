/* eslint-disable no-var */
var webpack = require('webpack');
var config = require('./webpack.config.base');
var toolingConfig = require('./config');
var paths = toolingConfig.paths;

config.entry = config.entry.concat([
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/dev-server'
]);

// Generate source maps using eval. (Way better performance than in-line or file).
config.devtool = 'cheap-eval-source-map';

config.plugins = config.plugins.concat([
  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),

  // Defines globals across all modules
  new webpack.DefinePlugin({

    // Environment global (production/development)
    'process.env.NODE_ENV': JSON.stringify('development')
  })
]);

// Dev server configuration
// Reference: http://webpack.github.io/docs/configuration.html#devserver
// Reference: http://webpack.github.io/docs/webpack-dev-server.html
config.devServer = {
  // Serve the dist directory.
  contentBase: paths.dist,

  // Enable HOT Module Replacement (works like LiveReload).
  hot: true,

  stats: 'minimal'
};

module.exports = config;
/* eslint-enable no-var */

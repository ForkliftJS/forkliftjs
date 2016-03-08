/* eslint-disable no-var */
var webpack = require('webpack');
var config = require('./webpack.config.base');

// Generate source maps as files.
config.devtool = 'source-map';

config.plugins = config.plugins.concat([

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode.
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      // Disable UglifyJS warnings
      warnings: false
    },

    mangle: {
      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged.
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),

  // Defines globals across all modules.
  new webpack.DefinePlugin({

    // Environment global (production/development).
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]);

module.exports = config;
/* eslint-enable no-var */

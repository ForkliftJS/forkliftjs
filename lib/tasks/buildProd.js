module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');
  var webpackProdConfig = path.join(paths.forklift, 'webpack.config.prod.js');

  if (!utils.fileExists(webpackProdConfig)) {
    return utils.fileNotFound(webpackProdConfig);
  }

  require('./cleanDist').run();

  var args = [
    '--config', webpackProdConfig
  ];
  utils.execModule('webpack', args.join(' '));
};

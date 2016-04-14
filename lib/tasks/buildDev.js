module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');
  var webpackDevConfig = path.join(paths.forklift, 'webpack.config.dev.js');

  if (!utils.fileExists(webpackDevConfig)) {
    return utils.fileNotFound(webpackDevConfig);
  }

  require('./cleanDist').run();

  var args = [
    '--config', webpackDevConfig
  ];
  utils.execModule('webpack', args.join(' '));
};

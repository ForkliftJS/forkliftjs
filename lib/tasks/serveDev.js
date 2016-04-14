module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');

  var args = [
    '--config', path.join(paths.forklift, 'webpack.config.dev.js'),
    '--inline'
  ];
  utils.execModule('webpack-dev-server', args.join(' '));
};

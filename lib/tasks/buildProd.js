module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');

  require('./cleanDist').run();

  var args = [
    '--config', path.join(paths.forklift, 'webpack.config.prod.js')
  ];
  utils.execModule('webpack', args.join(' '));
};

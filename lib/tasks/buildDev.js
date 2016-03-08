module.exports.run = function() {
  var utils = require('../../config').utils;

  require('./cleanDist').run();

  var args = [
    '--config', utils.getConfigPath('webpack.config.dev.js')
  ];
  utils.execModule('webpack', args.join(' '));
};

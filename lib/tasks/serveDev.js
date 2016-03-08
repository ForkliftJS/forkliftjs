module.exports.run = function() {
  var utils = require('../../config').utils;

  var args = [
    '--config', utils.getConfigPath('webpack.config.dev.js')
  ];
  utils.execModule('webpack-dev-server', args.join(' '));
};

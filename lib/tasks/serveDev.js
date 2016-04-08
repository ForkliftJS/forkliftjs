module.exports.run = function() {
  var utils = require('../../utils');

  var args = [
    '--config', utils.getConfigPath('webpack.config.dev.js'),
    '--inline'
  ];
  utils.execModule('webpack-dev-server', args.join(' '));
};

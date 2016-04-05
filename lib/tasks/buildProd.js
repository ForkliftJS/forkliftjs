module.exports.run = function() {
  var utils = require('../../utils');

  require('./cleanDist').run();

  var args = [
    '--config', utils.getConfigPath('webpack.config.prod.js')
  ];
  utils.execModule('webpack', args.join(' '));
};

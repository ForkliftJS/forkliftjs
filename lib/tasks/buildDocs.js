module.exports.run = function() {
  var utils = require('../../utils');

  require('./cleanDocs').run();

  var args = [
    '--config', utils.getConfigPath('yuidoc.json')
  ];
  utils.execModule('yuidoc', args.join(' '));
};

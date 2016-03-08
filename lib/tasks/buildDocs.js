module.exports.run = function() {
  var utils = require('../../config').utils;

  require('./cleanDocs').run();

  var args = [
    '--config', utils.getConfigPath('yuidoc.json')
  ];
  utils.execModule('yuidoc', args.join(' '));
};

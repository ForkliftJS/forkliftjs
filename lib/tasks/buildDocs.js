module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');
  var yuiDocConfig = path.join(paths.project, 'yuidoc.json');

  if (!utils.fileExists(yuiDocConfig)) {
    return utils.fileNotFound(yuiDocConfig);
  }

  require('./cleanDocs').run();

  var args = [
    '--config', yuiDocConfig
  ];
  utils.execModule('yuidoc', args.join(' '));
};

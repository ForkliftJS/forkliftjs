module.exports.run = function() {
  var utils = require('../../utils');
  var config = require('../../config');
  var paths = config.paths;
  var path = require('path');

  require('./cleanDocs').run();

  var args = [
    '--config', path.join(paths.project, 'yuidoc.json')
  ];
  utils.execModule('yuidoc', args.join(' '));
};

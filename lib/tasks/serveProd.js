module.exports.run = function() {
  var config = require('../../config');
  var utils = require('../../utils');
  var distPath = config.paths.dist;

  if (!utils.dirExists(distPath)) {
    return utils.dirNotFound(distPath);
  }

  var args = [
    distPath,
    '-c-1 -s -o -p 8080'
  ];
  utils.execModule('http-server', args.join(' '));
};

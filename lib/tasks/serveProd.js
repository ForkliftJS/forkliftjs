module.exports.run = function() {
  var config = require('../../config');
  var utils = require('../../utils');
  var distPath = config.paths.dist;

  var args = [
    distPath,
    '-c-1 -s -o -p 8080'
  ];
  utils.execModule('http-server', args.join(' '));
};

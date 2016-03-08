module.exports.run = function() {
  var config = require('../../config');
  var utils = config.utils;
  var docsPath = config.paths.docs;

  var args = [
    docsPath,
    '-c-1 -s -o -p 3000'
  ];
  utils.execModule('http-server', args.join(' '));
};

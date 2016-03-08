module.exports.run = function() {
  var config = require('../../config');
  var sourcePath = config.paths.source;
  var utils = config.utils;

  utils.execModule('eslint', sourcePath);
};

module.exports.run = function() {
  var utils = require('../../config').utils;

  utils.execModule('karma', 'start');
};

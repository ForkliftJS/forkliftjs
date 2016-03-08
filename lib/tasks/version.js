module.exports.run = function() {
  var echo = require('shelljs').echo;
  var version = require('../../package.json').version;

  echo(['ForkliftJS version', version].join(' '));
};

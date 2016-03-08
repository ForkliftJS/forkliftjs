module.exports.run = function() {
  var rm = require('shelljs').rm;
  var bowerPath = require('../../config').paths.bower;

  rm('-rf', bowerPath);
};

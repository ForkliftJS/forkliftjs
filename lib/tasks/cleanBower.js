module.exports.run = function() {
  var rm = require('shelljs').rm;
  var bowerPath = require('../../config').paths.bower;
  var utils = require('../../utils');

  if (!utils.dirExists(bowerPath)) {
    return utils.dirSkippedDeletion(bowerPath);
  }

  rm('-rf', bowerPath);
};

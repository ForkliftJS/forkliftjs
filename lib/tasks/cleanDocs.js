module.exports.run = function() {
  var path = require('path');
  var rm = require('shelljs').rm;
  var generatedDocsPath = require('../../config').paths.generatedDocs;
  var generatedDocsFiles = path.join(generatedDocsPath, '*');
  var utils = require('../../utils');

  if (!utils.dirExists(generatedDocsPath)) {
    return utils.dirSkippedDeletion(generatedDocsPath);
  }

  rm('-r', generatedDocsFiles);
};

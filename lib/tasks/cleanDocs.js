module.exports.run = function() {
  var path = require('path');
  var rm = require('shelljs').rm;
  var generatedDocsPath = require('../../config').paths.generatedDocs;
  var generatedDocsFiles = path.join(generatedDocsPath, '*');

  rm('-r', generatedDocsFiles);
};

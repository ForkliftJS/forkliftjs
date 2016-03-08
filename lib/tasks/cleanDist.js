module.exports.run = function() {
  var path = require('path');
  var rm = require('shelljs').rm;
  var distPath = require('../../config').paths.dist;
  var distFiles = path.join(distPath, '*');

  rm('-r', distFiles);
};

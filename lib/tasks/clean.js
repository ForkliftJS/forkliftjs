module.exports.run = function() {
  require('./cleanDocs').run();
  require('./cleanDist').run();
};

module.exports.run = function() {
  require('./buildDocs').run();
  require('./serveDocs').run();
};

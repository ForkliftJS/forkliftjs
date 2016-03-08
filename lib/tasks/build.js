module.exports.run = function() {
  require('./clean').run();
  require('./buildDocs').run();
  require('./buildProd').run();
};

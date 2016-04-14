module.exports.run = function() {
  require('./clean').run();
  require('./buildProd').run();
};

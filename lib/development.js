/**
 * Logic exclusive to the `production` environment.
 */

/**
 * Adds webpack HMR support. It act's like livereload,
 * reloading page after webpack rebuilt modules.
 * It also updates stylesheets and inline assets without page reloading.
 */
function addWebpackHMRSupport() {
  if (module.hot) {
    module.hot.accept();
  }

  var sourcePath = require('../config').paths.source;
  var path = require('path');
  var index = path.join(sourcePath, 'index.html');
  require('raw!' + index);
}

/**
 * Runs all logic exclusive to the `production` environment.
 */
module.exports = function() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  addWebpackHMRSupport();
};

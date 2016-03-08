/**
 * Logic exclusive to the `production` environment.
 */

/**
 * Runs all logic exclusive to the `production` environment.
 */
module.exports = function() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
};

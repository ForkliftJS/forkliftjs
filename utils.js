var path = require('path');
var paths = require('./config').paths;
var sh = require('shelljs');

module.exports.getModulePath = function getModulePath(moduleName) {
  return path.join(paths.modulesBin, moduleName);
};

module.exports.execModule = function execModule(moduleName, args) {
  if (!moduleExists(moduleName)) {
    return moduleNotFound(moduleName);
  }

  var modulePath = getModulePath(moduleName);
  var command = [modulePath, args].join(' ');
  sh.exec(command, { silent: false });
};

module.exports.moduleExists = function moduleExists(moduleName) {
  return fileExists(getModulePath(moduleName));
};

module.exports.moduleNotFound = function moduleNotFound(moduleName) {
  sh.echo(['The module', moduleName, 'cannot be found.'].join(' '));
  sh.echo('Please make sure the module has been installed.');
};

module.exports.getTaskPath = function getTaskPath(taskName) {
  return path.join(paths.tasks, taskName);
};

module.exports.dirExists = function dirExists(path) {
  return sh.test('-d', path);
};

module.exports.fileExists = function fileExists(path) {
  return sh.test('-f', path);
};

module.exports.fileNotFound = function fileNotFound(file) {
  sh.echo(['The file', file, 'cannot be found.'].join(' '));
};

module.exports.dirNotFound = function dirNotFound(dir) {
  sh.echo(['The directory', dir, 'cannot be found.'].join(' '));
};

module.exports.dirSkippedDeletion = function dirSkippedDeletion(dir) {
  return sh.echo(['Skipped deletion of', dir, 'because it does not exist.'].join(' '));
};

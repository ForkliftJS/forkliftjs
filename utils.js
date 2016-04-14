var path = require('path');
var paths = require('./config').paths;
var sh = require('shelljs');

exports.getModulePath = function getModulePath(moduleName) {
  return path.join(paths.modulesBin, moduleName);
};

exports.moduleExists = function moduleExists(moduleName) {
  return exports.fileExists(exports.getModulePath(moduleName));
};

exports.moduleNotFound = function moduleNotFound(moduleName) {
  sh.echo(['The module', moduleName, 'cannot be found.'].join(' '));
  sh.echo('Please make sure the module has been installed.');
};

exports.execModule = function execModule(moduleName, args) {
  if (!exports.moduleExists(moduleName)) {
    return exports.moduleNotFound(moduleName);
  }

  var modulePath = exports.getModulePath(moduleName);
  var command = [modulePath, args].join(' ');
  sh.exec(command, { silent: false });
};

exports.getTaskPath = function getTaskPath(taskName) {
  return path.join(paths.tasks, taskName);
};

exports.dirExists = function dirExists(path) {
  return sh.test('-d', path);
};

exports.fileExists = function fileExists(path) {
  return sh.test('-f', path);
};

exports.fileNotFound = function fileNotFound(file) {
  sh.echo(['The file', file, 'cannot be found.'].join(' '));
};

exports.dirNotFound = function dirNotFound(dir) {
  sh.echo(['The directory', dir, 'cannot be found.'].join(' '));
};

exports.dirSkippedDeletion = function dirSkippedDeletion(dir) {
  return sh.echo(['Skipped deletion of', dir, 'because it does not exist.'].join(' '));
};

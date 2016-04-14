var path = require('path');
var paths = require('./config').paths;
var shell = require('shelljs');

function execModule(moduleName, args) {
  var modulePath = path.join(paths.modulesBin, moduleName);
  var command = [modulePath, args].join(' ');
  shell.exec(command, { silent: false });
}

function getTaskPath(taskName) {
  return path.join(paths.tasks, taskName);
}

module.exports = {};
module.exports.execModule = execModule;
module.exports.getTaskPath = getTaskPath;

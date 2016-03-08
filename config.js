var path = require('path');
var shell = require('shelljs');

var project = process.cwd();
var source = path.join(project, 'src');
var vendor = path.join(source, 'vendor');
var bower = path.join(vendor, 'bower');
var dist = path.join(project, 'dist');
var docs = path.join(project, 'docs');
var generatedDocs = path.join(project, 'docs', 'api');
var modules = path.join(project, 'node_modules');
var modulesBin = path.join(modules, '.bin');
var forklift = __dirname;
var bin = path.join(forklift, 'bin');
var lib = path.join(forklift, 'lib');
var tasks = path.join(lib, 'tasks');

function execModule(moduleName, args) {
  var modulePath = path.join(modulesBin, moduleName);
  var command = [modulePath, args].join(' ');
  shell.exec(command, { silent: false });
}

function getConfigPath(configFileName) {
  return path.join(forklift, configFileName);
}

function getTaskPath(taskName) {
  return path.join(tasks, taskName);
}

module.exports = {};

module.exports.paths = {};
module.exports.paths.project = project;
module.exports.paths.modules = modules;
module.exports.paths.modulesBin = modulesBin;
module.exports.paths.source = source;
module.exports.paths.vendor = vendor;
module.exports.paths.bower = bower;
module.exports.paths.dist = dist;
module.exports.paths.docs = docs;
module.exports.paths.generatedDocs = generatedDocs;
module.exports.paths.forklift = forklift;
module.exports.paths.bin = bin;
module.exports.paths.lib = lib;
module.exports.paths.tasks = tasks;

module.exports.utils = {};
module.exports.utils.execModule = execModule;
module.exports.utils.getConfigPath = getConfigPath;
module.exports.utils.getTaskPath = getTaskPath;

function readProjectConfig(config) {
  var path = require('path');
  var cwd = process.cwd();
  var configFilePath = path.join(cwd, 'forklift.conf.js');
  var configFile = require(configFilePath);
  
  return configFile;
}

module.exports.readProjectConfig = readProjectConfig;
module.exports.projectConfig = readProjectConfig();
module.exports.forkliftConfig = require('./config');
module.exports.initDevelopmentEnvironment = require('./lib/development.js');
module.exports.initProductionEnvironment = require('./lib/production.js');

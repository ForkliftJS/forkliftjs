/* eslint-disable no-var, vars-on-top */
module.exports.runTask = function(taskName) {
  if (!taskName) {
    require('shelljs').echo('ERROR: Please specify a task name.');
    return;
  }

  var path = require('path');
  var tasksPath = require('../config').paths.tasks;
  var taskPath = path.join(tasksPath, taskName);
  var task = require(taskPath);

  task.run();
};
/* eslint-enable no-var, vars-on-top */

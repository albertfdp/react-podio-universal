#!/usr/bin/env node

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');

var changeCase = require('change-case');

var COMPONENT_PATH = 'src/components/';
var CONTAINER_PATH = 'src/containers/';

function validateName(name, callback) {

  if (!name) {
    callback(new Error('Name must be defined'));
    return false;
  }

  if (!changeCase.isUpperCase(name.slice(0, 1))) {
    callback(new Error('Name must be CamelCased'));
    return false;
  }

  fs.readdir(COMPONENT_PATH, function(error, files) {
    if (error) {
      throw error;
    }

    var fileAlreadyExists = files.some(function(fileName) {
      return fileName === name;
    });

    if (fileAlreadyExists) {
      callback(new Error(name + ' already exists: ' + path.join(COMPONENT_PATH, name)));
      return false;
    }

    return callback(void 0, name);

  });

}

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Component name',
    validate: function(name) {
      var done = this.async();

      validateName(name, function(error, validatedName) {
        if (validatedName) {
          return done(true);
        } else {
          return done(error.message);
        }
      });

    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type do you want?',
    choices: ['Component', 'Container']
  }
], function(answers) {
  var componentName = answers.name;

  var rootPath = (answers.type === 'Component' ? COMPONENT_PATH : CONTAINER_PATH);

  var scaffoldPath = path.join(COMPONENT_PATH, '__SCAFFOLD__/');

  fs.readdir(scaffoldPath, function(error, files) {

    files.forEach(function(file) {
      fs.readFile(scaffoldPath + file, 'utf8', function(err, data) {
        if (err) {
          throw err;
        }

        var newComponentDirectory = path.join(rootPath, componentName);
        fs.mkdir(newComponentDirectory, function() {

          file = file.replace(/__NAME__/g, componentName);

          data = data
            .replace(/__NAME__/g, componentName)
            .replace(/__NAME-PARAMCASE__/g, changeCase.paramCase(componentName));

          fs.writeFile(path.join(newComponentDirectory, file), data, 'utf8', function(fileErr) {
            if (fileErr) {
              throw fileErr;
            }
          });

        });

      });
    });
    console.log('New component: ' + path.join(rootPath, componentName));
  });

});

#!/usr/bin/env node
/**
 * Bradley Taniguchi
 * 5/10/17
 *
 * Developed for CitentCloud development projects
 *
 * sotto.js is a straight foward boilerplate generator for angularjs 1.5+
 * for an ES6 webpack project.
 * Following Todd Motto's style guide as specified here:
 * https://github.com/toddmotto/angularjs-styleguide
 */ 
var fs = require('fs');
var config = require('./sotto.config.js');
var caseHandler = require('./bin/case-handler.js');
var args = process.argv;
var banner = require('./bin/banner.js');
var path = require('path');
var pjson = require('./package.json');

console.log(banner);
console.log('v ' + pjson.version + '\n');

if(args.length < 3) {
  console.log('Not enough args!');
  process.exit(1);
}
args.forEach(function(filename, index, arr){
  if (index >= 2) {
    if (!checkArg(filename)) {
      console.log('Creating boilerplate for: ' + filename);
      // NOTE: this is blocking!
      if(!fs.existsSync(filename)) {
        console.log('Creating folder: ' + filename);
        fs.mkdirSync(filename);
        config.files.forEach(function(file){
          buildFiles(filename, file);
        });
      } else {
        console.log('  Folder ' + filename + ' already exists!');
      }
    }
  }
});
/**
 * Checks the args for a special tag
 * This is used mainly to get the two currently supported flags, help and
 * verison.
 * @param {string} arg the arg to parse.
 * @return {boolean} if the arg is a special arg, thus do not process it.
 */
function checkArg(arg) {
  if (arg === '-h' || arg === '--help') {
    console.log('Hold on buddy help is on the way ;D');
    return true;
  }
  if (arg === '-v' || arg === '--version') {
    console.log('v ' + pjson.version);
    return true;
  }
  return false;
}
/**
 * Calls the neccessary functions to take a file object given  by the config
 * file and build all the boilerplate files.
 * @param {string} filename - name of the file to create, without the extension, 
 * expected to be in supported lisp-case format
 * @param {object} file - the file object that specifies the parts of the file
 *                        to create.                       
 */
function buildFiles(filename, file) {
  if(!caseHandler.isLispCase(filename)) {
    console.error('  Error: Please provide lisp-case input!\nIE: navbar-button OR homepage OR homepage-sidebar');
    return;
  }
  var fullname = filename + file.extension;
  var pathname = './'+filename+'/'+fullname;
  var fileTemplatePath = path.join(__dirname, file.template);
  fs.readFile(fileTemplatePath, config.encoding, function(err, template) {
    if(err) { 
      console.log(err);
      return;
    }
    var parseData = {
      username: config.username,
      date : new Date(Date.now()).toLocaleString(), 
      name : filename, //TODO: remove
      titleName: caseHandler.lispCaseToTitleCase(filename), 
      camelName: caseHandler.toCamelCase(filename),
      lispName : filename //should be default
    };
    var parsedTemplate = parse(template, parseData);
    write(pathname, parsedTemplate);
  });
  
}
/**
 * writes the given template string to the given file
 * @param {string} filename - the name of the file to create
 * @param {string} template - the string template to write into the file.
 */ 
function write(filename, template) {
  fs.writeFile(filename, template, function(err) {
    if(err) {
      return console.error(err);
    }
    console.log('  Created file: ', filename);
  });
}

/**
 * Replace the variables in the template file with the provided
 * data.
 * @param {string} template - the template string with the variables specified
 *                            in the data param.
 * @param {object} data - object with the corrsponding keys in the template.
 */
function parse(template, data) {
  var regex = /\{{2}\s*((\w|\.)+)\s*\}{2}/g;
  return template.replace(regex, function(match, group) {
    var path = group.split('.');
    var current = data;
    while(path.length && current){
      current = current[path.shift()];
    }
    return current || match;
  });
}

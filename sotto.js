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
var messages = require('./bin/messages.js');
var path = require('path');
var pjson = require('./package.json');
var depHandler = require('./bin/dependency-handler.js');

console.log(messages.banner());
console.log('v ' + pjson.version + '\n');

if(args.length < 3) {
  console.log(messages.notEnoughArgs());
  process.exit(1);
}

// parse the given args
var length = args.length;
for (var i = 2; i < length; i++) {
  var arg = args[i];
  var deps = []; // array of dependencies
  
  
  if (arg === '-h' || arg === '--help') {
    console.log(messages.help());
    continue;
  }
  if (arg === '-v' || arg === '--version') {
    console.log('v ' + pjson.version);
    continue;
  }
  if ((arg === '-d' || arg === '--dependencies') && i < length-1) {
    var nextIndex = i+1;
    deps = args.splice(nextIndex, length - nextIndex);
    console.log('deps: ');
    console.log(deps);
    break;
  }
  // ADD other filtering here!
  
  //now we build the file, as it doesn't meet any of the above
  buildFolder(arg, function(builtFolder){
    if (builtFolder) {
      // create the files for said folder
      config.files.forEach(function(file) {
        buildFiles(arg, file, deps);
      });
    }
  });
}

/**
 * Builds the given folder synchronously
 * @param {string} folderName the name of the folder to check, and create
 * @param {function} callback, callback function to call after we create,
 *  or fail to create the folder. We pass true if we were able to create the
 *  folder, and false if we were not able to.
 */ 
function buildFolder(folderName, callback) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    if (typeof callback === 'function') {
      callback(true);
    }
  } else {
    if(typeof callback === 'function') {
      callback(false);
    }
  }
}

/**
 * Checks the args for a special tag
 * This is used mainly to get the two currently supported flags, help and
 * verison.
 * @param {string} arg the arg to parse.
 * @param {string} 
 * @return {boolean} returns true if the arg is a special arg, and this
 *  functio took action.
 */
function parseArgs(arg, index, arr) {
  if (arg === '-h' || arg === '--help') {
    console.log(messages.help());
    return true;
  }
  if (arg === '-v' || arg === '--version') {
    console.log('v ' + pjson.version);
    return true;
  }
  if (arg === '-d' || arg === '--dependencies' && index < arr.length-1) {
    // any following strings are dependencies
    var nextIndex = index+1;
    var deps = arr.splice(nextIndex, arr.length - nextIndex);
    console.log('deps: ');
    console.log(deps);
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
 * @param {string[]} deps - file dependencies to add to the given file
 */
function buildFiles(filename, file, deps) {
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
      lispName : filename, //should be default
      depString: depHandler.getString(deps), // list of deps
      depInjectors: depHandler.getInjects(deps) // injects for deps
      
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
 * Converter function, takes a list of strings and returns a 
 * command seperate 
function depStringGenerator(deps) {
  
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

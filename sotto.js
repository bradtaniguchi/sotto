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
var args = process.argv;
var banner = require('./bin/banner.js');

console.log(banner);

if(args.length < 3) {
  console.log('Not enough args!');
  process.exit(1);
}
args.forEach(function(filename, index, arr){
  if(index >= 2) {
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
});
console.log('done!');

/**
 * Calls the neccessary functions to take a file object given  by the config
 * file and build all the boilerplate files.
 * @param {string} filename - name of the file to create, without the extension
 * @param {object} file - the file object that specifies the parts of the file
 *                        to create.                       
 */
function buildFiles(filename, file) {
  var fullname = filename + file.extension;
  var pathname = './'+filename+'/'+fullname;
  console.log(filename);


  fs.readFile(file.template, config.encoding, function(err, template) {
    if(err) { 
      console.log(err);
      return;
    }
    write(pathname, template);
  });
  /*TODO: work from here!*/
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

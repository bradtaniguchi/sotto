/**
 * Bradley Taniguchi
 * 5/10/17
 *
 * This file defines what files to make for a default build,
 * what extension the given file has, and the template to use.
 * global variables are also configured here.
 * 
 */ 
module.exports = {
  // Global Variables
  username: 'USER_NAME',
  encoding: 'utf8',

  // File Objects, this attribute is special and MUST exist
  files: [
    {
      extension: '.component.js',
      template: './templates/component.txt'
    },
    {
      extension: '.module.js',
      template: './templates/module.txt'
    },
    {
      extension: '.scss',
      template: './templates/scss.txt'
    },
    {
      extension: '.html',
      template: './templates/html.txt'
    }, 
    {
      extension: '.spec.js',
      template: './templates/spec.txt'
    }
  ]
};

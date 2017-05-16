/**
 * @author Bradley Taniguchi
 * 
 * Type utility functions. Used to check, validate, and create
 * File types. File types utilize different template configs
 * and injectable variables.
 * 
 * This file is still in the design stage, beware complete changes!
 */
module.exports = {
  getTypes: getTypes,
  isType : isType
}

var COMPONENT_FILES = [
  'component',
  'scss',
  'module',
  'html',
  'spec'
];
/**
 * returns all the types in an array.
 * Do not use this to check if a given string is a valid filetype.
 * Use the isType function instead.
 * @return {string[]} array of string types.
 */
function getTypes() {
     
}

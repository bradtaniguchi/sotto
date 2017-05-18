/**
 * Bradley Taniguchi
 * 5/17/17
 * 
 * The dependency handler module provides functions to generate
 * common strings that will be placed into a module.
 */
module.exports ={
 getString : getString,
 getInjects : getInjects
};

/**
 * Generates a comma seperate list from the provided
 * dependencies list
 * @param {string[]} deps a list of dependencies to inject 
 * @return {string} a comma seperate list of dependencies.
 */ 
function getString(deps) {
  var str = '';
  deps.forEach(function(deps) {
    str += deps + ', ';
  });
  return str;
}

/**
 * Generates a multi-line string to handle the dependency injections
 * @param {string[]} deps a list of dependencies to inject 
 * @return {string} a multi-line string that will be used in
 */
function getInjects(deps) {
  var str = '';
  deps.forEach(function(dep){
    str += 'this.' + dep + ' = ' + deps +';\n';
  });
  return deps;
}
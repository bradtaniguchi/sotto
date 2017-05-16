/**
 * @author Bradley Taniguchi
 *
 * @class FileObject
 * @description Class for a FileObject.
 * @param {string} filename the name of the file to create
 * @param {string} type the type of the file to create
 * @param {string[]} array of dependecies to inject
 *
 */
module.exports = function(filename, type, dependencies) {
  if (filename === undefined) {
    return null;
  }
  if (type === undefined) {
    type = '';
  }
  return {
    filename : filename,
    type : type,
    
  };
}

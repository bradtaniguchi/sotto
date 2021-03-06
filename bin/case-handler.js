/**
 * Bradley Taniguchi
 * 5/11/17
 * 
 * case-handler provides utility functions to handle camelCase to-from
 * lisp-case. I will use the term lisp-case, for what is essentiall dashes
 * with all lower-case words.
 */
module.exports = {
  toCamelCase: toCamelCase,
  toLispCase : toLispCase,
  // toTitleCase : toTitleCase, //work in progress
  isCamelCase : isCamelCase,
  isLispCase : isLispCase,
  lispCaseToTitleCase : lispCaseToTitleCase //work in progress
};
/**
 * Transfers a lisp-case string to camel case. If the string is not in 
 * lisp-case then the string is given back with no change.
 * @param {string} str the string to change
 * 
 * @return {string} the modified string, or the same string
 * if the given string could not be parsed.
 */ 
function toCamelCase(str) {
  if(!isCamelCase(str)) {
    return str.replace(/-+([^-])/g, function(a, b) {
      return b.toUpperCase();
    });
  }
}
/**
 * Transfers a camelCase string to lisp-case. If the string is not in
 * camelCase then the given string is given back with no change
 * @param {string} str the string to change
 * 
 * @return {string} the modified string, or the same string
 * if the given string could not be parsed.
 */
function toLispCase(str) {
  if(!isLispCase(str)) {
    return str.replace(/^[a-z]+([A-Z])/g, function(a, b){
      a = a.slice(0, -1);
      return a + '-'+b.toLowerCase();
    });
  }
}
/**
 * Transfers lispCase to TitleCase without dashes.
 * This is neccessary to create modules
 * @param {string} str the string to change
 */
function lispCaseToTitleCase(str) {
  var words = str.split('-');
  var newWords = [];
  words.map(function(word) {
    var newWord = word.charAt(0).toUpperCase() + word.slice(1);
    newWords.push(newWord);
  });
  return newWords.join('');
}
/**
 * Transfer a camel-case string, or list-case string to a TitleCase.
 * TitleCase is similar to camelCase, but the first letter is also capitalized.
 * @param {string} str the string to change
 * 
 * @return {string} the modified string, or the same string if the
 * given string could not be parsed, or is already in TitleCase.
 * NOTE: this can be depreciated.
 */ 
function toTitleCase(str) {
  
}
/**
 * If the given string is in camelCase
 * @param {string} str - the string to check
 * 
 * @param {boolean} if the given string is in camelCase
 */ 
function isCamelCase(str) {
  if (typeof str === 'string') {
    var regex = /^(?:[a-z]+[1-9]*([A-Z])*)+[a-z]*[1-9]*$/g;
    return regex.test(str);
  }
  return false;
}
/**
 * Checks if the given string is in lisp-case
 * @param {string} str - the string to check
 * 
 * @returns {boolean} if the given string is in lisp-case
 */ 
function isLispCase(str) {
  if (typeof str === 'string') {
    var regex = /^(?:[a-z]+[1-9]*-*)+[a-z]*[1-9]*$/g;
    return regex.test(str);
  }
}

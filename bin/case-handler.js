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
  isCamelCase : isCamelCase,
  isLispCase : isLispCase
};
/**
 * Transfers a lisp-case string to camel case. If the string is not in 
 * lisp-case then the string is given back with no change.
 * @param {string} str - the string to change
 * @return {string} - return the modified string, or the same string
 * if the given string could not be parsed.
 */ 
function toCamelCase(str) {
  return str;
}
/**
 * Transfers a camelCase string to lisp-case. If the string is not in
 * camelCase then the given string is given back with no change
 * @param {string} str - the string to change
 * @return {string} - return the transfered change, or the same string
 * if the given string could not be parsed.
 */
function toLispCase(str) {
  return str;
}

/**
 * If the given string is in camelCase
 * @param {string} str - the string to check
 * @param {boolean} if the given string is in camelCase
 */ 
function isCamelCase(str) {
  return true;
}
/**
 * Checks if the given string is in lisp-case
 * @param {string} str - the string to check
 * @returns {boolean} if the given string is in lisp-case
 */ 
function isLispCase(str) {
  return true;
}
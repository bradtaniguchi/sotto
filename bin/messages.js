/**
 * @author Bradley Taniguchi
 * @description
 * The messages module holds references to a few important messagese to display 
 * on the page.
 * Also I use functions to house the strings, so they are 'hoisted' to the
 * top, only to keep the module export definition clean
 * 
 * 
 */
module.exports = {
  banner: banner,
  help : help,
  notEnoughArgs: notEnoughArgs
  // add more messages
};

/**
 * Returns the help text to be displayed on the console
 * @returns {string} the help text to display
 */
function help() {
  return 'Help is on the way!';
}

/**
 * Returns the banner text to be displayed on the console
 * @returns {string} the banner text to display 
 */
function banner() {
  var str = 
    " _______  _______  _______  _______  _______            ___  _______ \n" +
    "|       ||       ||       ||       ||       |          |   ||       |\n" +
    "|  _____||   _   ||_     _||_     _||   _   |          |   ||  _____|\n" +
    "| |_____ |  | |  |  |   |    |   |  |  | |  |          |   || |_____\n" +
    "|_____  ||  |_|  |  |   |    |   |  |  |_|  | ___   ___|   ||_____  |\n" +
    " _____| ||       |  |   |    |   |  |       ||   | |       | _____| |\n" +
    "|_______||_______|  |___|    |___|  |_______||___| |_______||_______|\n" +
    "=====================================================================\n";
  return str;
}

/**
 * Returns the not Enough Args error message.
 * @returns {string} an error message to display
 */
function notEnoughArgs() {
  return 'Not enough arguments given';
}
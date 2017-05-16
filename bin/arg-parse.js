/**
 * Bradley Taniguchi
 * 5/15/17
 *
 * Handles any generic parse commands
 */
module.exports = {
  parse : parse
}
// Global file variables
var VERBOSE = false;

/**
 * Parses all flags given to the application. 
 * @param {array} args a list of strings given to the application when called.
 * @return {array} array of fileObjects to create
 */
function parseFlags(args) {
  var flags = [];
  args.forEach(function(arg) {
  
    if (arg === '-h' || arg === '--help') {
      if(VERBOSE) console.log();
      printHelp();
    }
    if (arg === '-v' || arg === '--verbose') {
      VERBOSE = true;
    }
    if (arg === '-c' || arg === '--config') {

    }
  });
  return flags
}

/**
 * Prints the help menu, along with the banner page
 */
function printHelp() {
  // print banner
  console.log('');
}



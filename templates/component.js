/**
 * {{username}}
 * {{date}}
 */

import template from './{{lispName}}.html';
import './{{lispName}}.scss';
export default {
  restrict: 'E',
  template,
  bindings: {
  
  },
  controller: class {
    constructor($log) {
      'ngInject';
      
      // Injected Dependencies
      this.$log = $log;
      
      // variables
    }
    
    $onInit() {
      
    }
  }
};

/*{{camelCase}} specjs boilerplate*/
import {{titleName}}Module from './{{lispName)).module.js';

describe('{{titleName}}', () => {
  let $rootScope, $state, $location, $componentController, $compile, $inject;
  
  beforeEach(window.module({{titleName}}));
  
  beforeEach(inject(($inject)=>{
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));
  
  describe('Module', () => {
    it('pass', () => {
      expect(1).to.eq(1);
    });
  });
  
  describe('Controller',() => {
    let controller;
    beforeEach(() => {
      controller = $componentController('{{camelName}}', {
        $scope : $rootScope.$new();
      });
    });
    
    // it('has a name property', () => { // erase if removing this.name from the controller
    //   expect(controller).to.have.property('name');
    // });
    
  });
  describe('View', () => {
    // view layer specs.
    let scope, template;
    //not currently supported
    // beforeEach(() => {
    //   scope = $rootScope.$new();
    //   template = $compile('<about></about>')(scope);
    //   scope.$apply();
    // });

    // it('has name in template', () => {
    //   expect(template.find('h1').html()).to.eq('about');
    // });
    it('pass', () => {
      expect(1).to.eq(1);
    });
  });
});//end describe
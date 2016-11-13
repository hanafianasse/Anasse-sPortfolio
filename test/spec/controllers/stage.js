'use strict';

describe('Controller: StageCtrl', function () {

  // load the controller's module
  beforeEach(module('projetApp'));

  var StageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StageCtrl = $controller('StageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StageCtrl.awesomeThings.length).toBe(3);
  });
});

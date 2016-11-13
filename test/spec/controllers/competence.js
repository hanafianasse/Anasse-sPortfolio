'use strict';

describe('Controller: CompetenceCtrl', function () {

  // load the controller's module
  beforeEach(module('projetApp'));

  var CompetenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetenceCtrl = $controller('CompetenceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompetenceCtrl.awesomeThings.length).toBe(3);
  });
});

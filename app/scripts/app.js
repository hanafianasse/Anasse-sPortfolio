'use strict';

/**
 * @ngdoc overview
 * @name projetApp
 * @description
 * # projetApp
 *
 * Main module of the application.
 */
angular
  .module('projetApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/competence', {
        templateUrl: 'views/competence.html',
        controller: 'CompetenceCtrl',
        controllerAs: 'competence'
      })
      .when('/stage', {
        templateUrl: 'views/stage.html',
        controller: 'StageCtrl',
        controllerAs: 'stage'
      });
  });

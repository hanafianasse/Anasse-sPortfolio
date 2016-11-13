'use strict';

/**
 * @ngdoc function
 * @name projetApp.controller:CompetenceCtrl
 * @description
 * # CompetenceCtrl
 * Controller of the projetApp
 */
angular.module('projetApp').controller('CompetenceCtrl',['$scope', function ($scope) {

	$scope.competences = [];

	// init niveaux
	var niveux = [];
	for(var i= 1;i < 6 ; i++){
		niveux.push(i);
	}
	$scope.niveaux = niveux;

	// init types
	var types = [];
	types.push("Informatique");
	types.push("Managériale");
	types.push("savoir être");
	$scope.types = types;

	//init copetence
	var nouvelleCompetences = {nom: "angularJS", type: "Informatique", niveau: "5", desc: "faire des appliations web"};
	$scope.competences.push(nouvelleCompetences);


	$scope.AjouterCompetence = function(){
		alert($scope.nomCompetence);
		var nouvelleCompetences = {nom: $scope.nomCompetence, type: $scope.typeCompetence, niveau: $scope.niveauCompetence, desc: $scope.descCompetence};
		$scope.competences.push(nouvelleCompetences);
		$scope.fermerModal();
	};

	$scope.fermerModal = function(){
		$scope.nomCompetence = "";
		$scope.typeCompetence = "";
		$scope.niveauCompetence = "";
		$scope.descCompetence = "";
	};
}]);

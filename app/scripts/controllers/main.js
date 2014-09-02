'use strict';

angular.module('nutnexApp.controllers')
  .controller('MainCtrl', ['$scope', 'GraphFactory', 'Person', 'Cycle', 'Day', 'CardioTraining', function ($scope, GraphFactory, Person, Cycle, Day, CardioTraining) {
	$scope.chartObject = GraphFactory.data;
	$scope.person = Person;
	$scope.person.gender = 'male';
	$scope.cycle = new Cycle();
	$scope.day = new Day();
	$scope.cardio = new CardioTraining();

	$scope.recalculateBodyFat = function () {
		Person.deleteCustomBodyFat();
	};
  }]);

'use strict';

angular.module('nutnexApp.controllers')
  .controller('MainCtrl', ['$scope', 'GraphFactory', 'Person', 'CalculationFactory', function ($scope, GraphFactory, Person, CalculationFactory) {
	$scope.chartObject = GraphFactory.data;
	$scope.person = Person;
	$scope.person.gender = 'male';

	$scope.recalculateBodyFat = function () {
		Person.deleteCustomBodyFat();
	};
  }]);

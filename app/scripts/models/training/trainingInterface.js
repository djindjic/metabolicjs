'use strict';

angular.module('nutnexApp.models')
  .factory('TrainingInterface', ['InterfaceUtil', function (InterfaceUtil) {
	return new InterfaceUtil( "TrainingInterface",
		["burnEnergy"]);
  }]);

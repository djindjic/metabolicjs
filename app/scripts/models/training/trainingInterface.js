'use strict';

angular.module('nutnexApp.models')
  .factory('TrainingInterface', ['InterfaceUtil', function (InterfaceUtil) {
  	var methods = ['burnEnergy'],
  	    properties = ['time'];
	return new InterfaceUtil( 'TrainingInterface', methods, properties);
  }]);
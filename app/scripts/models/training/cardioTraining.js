'use strict';

angular.module('nutnexApp.models')
  .factory('CardioTraining', function () {
  	/*
	interface TrainingInterface {
		function burnEnergy(person);
		}
	*/
	var CardioTraining = function(){
		var _time;

		Object.defineProperty(this, "time", {
			get: function() { return _time; },
			set: function(val) { _time = val; }
		});
	};

	CardioTraining.prototype = {
	  burnEnergy: function(person) {

	  }
	};

	return CardioTraining;
  });

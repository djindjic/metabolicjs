'use strict';

angular.module('nutnexApp.models')
  .factory('Day', ['InterfaceUtil', 'TrainingInterface', function (InterfaceUtil, TrainingInterface) {
    	function Day() {
    	  	var _meals = [],
	            _trainings = [];

	        Object.defineProperty(this, "meals", {
				get: function() { return _meals; },
				set: function(val) { _meals = val; }
			});

	     	Object.defineProperty(this, "trainings", {
				get: function() { return _trainings; },
				set: function(val) { _trainings = val; }
			});
    	};
	  
    	Day.prototype = {
	  		addTraining: function(training) {
	  		  InterfaceUtil.ensureImplements(training, TrainingInterface);
	  		  this.trainings.push(training);
	  		}
	  	};
  
  
    	return Day;
    }]);
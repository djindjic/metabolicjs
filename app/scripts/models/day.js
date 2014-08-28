'use strict';

angular.module('nutnexApp.models')
  .factory('Day', ['InterfaceUtil', 'TrainingInterface', function (InterfaceUtil, TrainingInterface) {
    	function Day() {
    	  this.meals = [],
        this.trainings = [],
        this.works = [];
    	};
  
    	Day.prototype = {
  		addTraining: function(training) {
  			InterfaceUtil.ensureImplements(training, TrainingInterface);
  			this.trainings.push(training);
  		}
  	};
  
  
    	return Day;
    }]);
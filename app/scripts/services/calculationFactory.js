'use strict';

angular.module('nutnexApp.services')
  .factory('CalculationFactory', function () {
  	return {
  		//http://en.wikipedia.org/wiki/Body_mass_index
  		bmi: function(person) {
  			return person.weight / Math.pow(person.height/100, 2);
  		},
  		//http://www.ncbi.nlm.nih.gov/pubmed/2043597
  		bf: function(person) {
  			var sex = person.gender === 'male' ? 1 : 0;
  			return 1.20 * person.bmi + 0.23 * person.age - 10.8 * sex - 5.4;
  		}
  	};
  });
'use strict';

angular.module('nutnexApp.models')
  .factory('Person', ['CalculationFactory', function (CalculationFactory) {
  	var person = {
  		deleteCustomBodyFat: function() {
  			console.log(this);
  			delete this._bfCustom;
  		}
  	};

	Object.defineProperty(person, 'gender', {
		get: function() { return this._gender; },
		set: function(val) { this._gender = val; }
	});

	Object.defineProperty(person, 'age', {
		get: function() { return this._age; },
		set: function(val) { this._age = val; }
	});

	Object.defineProperty(person, 'height', {
		get: function() { return this._height; },
		set: function(val) { this._height = val; }
	});

	Object.defineProperty(person, 'weight', {
		get: function() { return this._weight; },
		set: function(val) { this._weight = val; }
	});

	Object.defineProperty(person, 'bmi', {
		get: function() {
			var bmi = CalculationFactory.bmi(this);
			if (bmi) {
				return bmi;
			}
		}
	});

	Object.defineProperty(person, 'bf', {
		get: function() {
			if (this._bfCustom) {
				return this._bfCustom;
			}
			else {
				return CalculationFactory.bf(this);
			}
		},
		set: function(val) { this._bfCustom = val; }
	});

  	return person;
  }]);
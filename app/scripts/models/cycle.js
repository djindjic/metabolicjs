'use strict';

angular.module('nutnexApp.models')
  .factory('Cycle', function () {
  	function Cycle() {
  		this.days = [];
  	};

  	return Cycle;
  });
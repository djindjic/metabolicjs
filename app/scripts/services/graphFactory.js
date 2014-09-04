'use strict';

angular.module('nutnexApp.services')
  .factory('GraphFactory', ['Progress', function (Progress) {
  	return {
  		data: Progress.data
  	};
  }]);
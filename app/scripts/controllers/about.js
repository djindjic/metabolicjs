'use strict';

/**
 * @ngdoc function
 * @name nutnexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nutnexApp
 */
angular.module('nutnexApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

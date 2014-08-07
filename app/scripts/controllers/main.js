'use strict';

/**
 * @ngdoc function
 * @name nutnexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nutnexApp
 */
angular.module('nutnexApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

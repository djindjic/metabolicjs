'use strict';

/**
 * @ngdoc overview
 * @name nutnexApp
 * @description
 * # nutnexApp
 *
 * Main module of the application.
 */
angular.module('nutnexApp.controllers', []);
angular.module('nutnexApp.services', []);
angular.module('nutnexApp.models', []);
angular.module('nutnexApp.utils', []);

angular
  .module('nutnexApp', [
    'nutnexApp.controllers',
    'nutnexApp.services',
    'nutnexApp.models',
    'nutnexApp.utils',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'vr.directives.slider',
    'googlechart',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

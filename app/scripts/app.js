'use strict';

/**
 * @ngdoc overview
 * @name nutnexApp
 * @description
 * # nutnexApp
 *
 * Main module of the application.
 */
angular
  .module('nutnexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'vr.directives.slider',
    "googlechart"
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

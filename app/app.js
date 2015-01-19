/* 
 * app.js
 * Declare module and configure routes
 */

// Declare app module
var app = angular.module('app', ['ngRoute']);

// Declare app routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // set up routing and controller
        .when('/', {
            templateUrl :   'pages/home.html',
            controller  :   'homeCtrl'
        })
        .when('/home', {
            templateUrl :   'pages/home.html',
            controller  :   'homeCtrl'
        })
        .otherwise({
		redirectTo: '/'
	})
    // set HTML5 mode for clean URL
    $locationProvider.html5Mode(true);
});

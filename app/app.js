/* 
 * app.js
 * Declare module and configure routes
 */

// Declare app module
var app = angular.module('app', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap']);

// Declare app routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // set up routing and controller
        .when('/', {
            templateUrl :   'views/home.html',
            controller  :   'homeCtrl'
        })
        .when('/home', {
            templateUrl :   'views/home.html',
            controller  :   'homeCtrl'
        })
        .when('/about', {
            templateUrl :   'views/about.html',
            controller  :   'aboutCtrl'
        })
        .when('/resume', {
            templateUrl :   'views/resume.html',
            controller  :   'resumeCtrl'
        })
        .when('/projects', {
            templateUrl :   'views/projects.html',
            controller  :   'projectsCtrl'
        })
        .when('/contact', {
            templateUrl :   'views/contact.html',
            controller  :   'contactCtrl'
        })
        .otherwise({
		redirectTo: '/'
	})
    // set HTML5 mode for clean URL
    $locationProvider.html5Mode(true);
});

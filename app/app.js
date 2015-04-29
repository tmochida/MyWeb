/* 
 * app.js
 * Declare module and configure routes
 */

// Declare app module
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngCookies']);

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
        .when('/about', {
            templateUrl :   'pages/about.html',
            controller  :   'aboutCtrl'
        })
        .when('/resume', {
            templateUrl :   'pages/resume.html',
            controller  :   'resumeCtrl'
        })
        .when('/projects', {
            templateUrl :   'pages/projects.html',
            controller  :   'projectsCtrl'
        })
        .when('/contact', {
            templateUrl :   'pages/contact.html',
            controller  :   'contactCtrl'
        })
        .otherwise({
		redirectTo: '/'
	})
    // set HTML5 mode for clean URL
    $locationProvider.html5Mode(true);
});

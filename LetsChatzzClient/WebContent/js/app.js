var app = angular.module("myApp", [ 'ngRoute', 'ngCookies' ])
app.config(function($routeProvider) {
	console.log("**********From App.js => Entering myApp");

	$routeProvider

	// loads this page first - home
	.when('/', {
		templateUrl : '_home/home.html'
	})
	// Home
	.when('/home', {
		templateUrl : '_home/home.html'
	})

	// Login
	.when('/login', {
		controller : 'UserController',
		templateUrl : '_user/login.html'
	})

	// for a new user to register
	.when('/register', {
		controller : 'UserController',
		templateUrl : '_user/register.html'
	})
	
	
	}

)

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

	// to create a new blog
	.when('/createBlog', {
		controller : 'BlogController',
		templateUrl : '_blog/createBlog.html'
	})
	// to view all blogs
	.when('/getAllBlogs', {
		controller : 'BlogController',
		templateUrl : '_blog/listOfBlogs.html'
	})


})
app.run(function($cookieStore,$rootScope,$location,UserService){
	
	
	   if($rootScope.currentUser==undefined){
		   $rootScope.currentUser = $cookieStore.get('currentUser');
		   
	   }
	   
	   $rootScope.logout=function(){
			console.log('logout function')
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			UserService.logout()
			.then(function(response){
				console.log("logged out successfully..");
				/* $rootScope.message="Logged out Successfully"; */
				$location.path('/login')
			},
			function(response){
				console.log(response.status);
			})
			
		}	
		
})
	

app.controller('UserController', function($scope, $rootScope, $location,$cookieStore, UserService) {

	console.log('**********From usercontroller.js => Entering UserController');

	//Blank user object
	$scope.user = {
		id : '',
		name : '',
		password : '',
		email : '',
		role : '',
		isOnline : '',
		enabled : ''
	}
	
	$scope.message;
	
	// register button in register.html
	$scope.registerUser = function(){
		console.log('**********From UserController.js => registerUser() => Entering the registerUser function')
		UserService.registerUser($scope.user)
		.then(
		function(response){
			console.log("**********From UserController.js => registerUser() => success - Entering success function for registerUser")
			console.log("**********response.status => " + response.status)
			$scope.message = "Registration Successful. Please login."
			$location.path("/login")
		}
		,function(response){
			console.log("**********From UserController.js => registerUser() => failure - Entering failure function for registerUser")
			console.log("**********response.status => " + response.status)
			console.log($scope.user)
			$scope.errorMessage = "Registration Failed."
			$location.path("/register")
		})
	}
	
	// login button in login.html
	$scope.login = function() {
		console.log('**********From UserController.js => login() => Entering the login function')
		UserService.login($scope.user)
		.then(
		function(response){
			console.log("**********From UserController.js => login() => success - Entering success function for login")
			console.log("**********response.status => " + response.status)
			$scope.user = response.data
			$rootScope.currentUser=$scope.user
			$cookieStore.put('currentUser',$rootScope.currentUser)
			$location.path("/home")
		}, 
		function(response) {
			console.log("**********From UserController.js => login() => failure - Entering failure function for login")
			console.log("**********response.status => " + response.status)
			$scope.message = "Invalid Username or Password"
			$scope.user.username=''
			$scope.user.password=''
			$location.path("/login")
		})
	}

	
	
	
	

});
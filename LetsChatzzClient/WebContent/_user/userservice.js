app.factory('UserService', function($http) {
	
	console.log('**********From userservice.js => Entering UserService');
	var userService = {};
	var BASE_URL = "http://localhost:2020/LetsChattzz"
	
	
	userService.registerUser = function(user) {
		console.log('**********From UserService.js => registerUser() => calling REST CONTROLLER for /register')
		return $http.post(BASE_URL   +"/register", user)
	}
	
	
	
	userService.login = function(user) {
		console.log('**********From UserService.js => login() => calling REST CONTROLLER for /login')
		return $http.post(BASE_URL + "/login", user)
	}
	
	userService.logout=function(){
		console.log('**********From UserService.js => logout() => calling REST CONTROLLER for /logout')
		return $http.put(BASE_URL + "/logout")
	}
	
	userService.getAllUsers=function(){
		console.log('**********From UserService.js => getAllUsers() => calling REST CONTROLLER for /getUsers')
		return $http.get(BASE_URL +"/getAllUsers")
	}
	
	userService.friendRequest=function(username){
		console.log('**********From UserService.js => friendRequest() => calling REST CONTROLLER for /friendRequest');
		return $http.post(BASE_URL+ '/friendRequest',username);
	}
	
	
   return userService;
	
});
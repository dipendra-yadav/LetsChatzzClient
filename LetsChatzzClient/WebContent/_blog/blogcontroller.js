app.controller('BlogController', function($scope, $location, BlogService) {
	
	console.log('**********From blogcontroller.js => Entering BlogController');
	$scope.blog = {}

	$scope.blogs = []
	
	// create blog button in createBlog.html
	$scope.createBlog = function() {
		console.log('**********From blogcontroller.js => createBlog() => Entering the createBlog function')
		BlogService.createBlog($scope.blog).then(function(response) {
			console.log("**********From blogcontroller.js => createBlog() => success - Entering success function for createBlog")
			console.log("**********response.data => " + response.data)
			console.log("**********response.status => " + response.status)
			alert("Blog Added Successfully!")
			$location.path('/getAllBlogs')

		}, function(response) {
			console.log("**********From blogcontroller.js => createBlog() => failure - Entering failure function for createBlog")
			console.log("**********response.data => " + response.data)
			console.log("**********response.status => " + response.status)
		})
	}
	
	
	
	

})
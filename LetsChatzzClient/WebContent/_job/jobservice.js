app.factory('JobService', function($http) {

	console.log('**********From JobService.js => Entering JobService')
	var jobService = {};
	var BASE_URL = "http://localhost:1010/LetsChattzz"
	
	jobService.saveJob = function(job) {
		console.log('**********From JobService.js => saveJob() => calling backend for /postJob')
		return $http.post(BASE_URL + "/postJob", job)
	}

	jobService.getAllJobs = function() {
		console.log('**********From JobService.js => getAllJobs() => calling backend for /getAllJobs')
		return $http.get(BASE_URL + "/getAllJobs")
	}
	
	jobService.getJobDetail = function(jobId) {
		console.log('**********From JobService.js => getJobDetail() => calling backend for /getJobDetail')
		return $http.get(BASE_URL + "/getJobDetail/" + jobId)
	}
	
	return jobService;
})

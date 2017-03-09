

'job strict'; /* strictly case sensitive*/

app.service('JobService', [
		'$http',
		'$q',
		'$rootScope',
		function($http, $q, $rootScope) {
			console.log("Job services")
			var BASE_URL = 'http://localhost:9082/ChatifyBackend'
			return {
								
				applyForJob:function(jobId){
					return $http.post(BASE_URL+'/applyForJob/'+jobId)
					.then(
							function(response){
								console.log('Apply for a job')
								return response.data;
							},
							function(errResponse){
								console.error('Error while applying job');
								return $q.reject(errResponse);
							}				
			);
		},
		getJobDetails:function(jobId){
			return $http.get(BASE_URL+'/getJobDetails/'+jobId)
			.then(
					function(response){
						console.log('Invoke getjobdetails ');
						$rootScope.selectedJob=response.data;
						return response.data;
					},
					function(errResponse){
						console.error('Error while getting job details');
						return $q.reject(errResponse);
					}				
		);
		},
				

		getMyAppliedJobs : function() {
					console.log("Applied jobs")
					return $http.get(BASE_URL + '/getMyAppliedJobs/' ).then(
							function(response) {
								return response.data;
							},function(errResponse){
								console.error('Error while displaying applied jobs');
								return $q.reject(errResponse);
							}	

					);
				},

				postAJob : function(job) {
					console.log("Invoke rejection")
					return $http
							.post(BASE_URL + '/postAJob/',job)
							.then(function(response) {
								return response.data;
							},function(errResponse){
								console.error('Error while posting a job');
								return $q.reject(errResponse);
							}	


							);
				},

			

				rejectJobApplication : function(userId,jobId) {
					console.log("Reject Job Application")
					return $http.put(BASE_URL + '/rejectJobApplication/'+userId+"/"+ jobId).then(
							function(response) {
								console.error(' Application rejected');
								return response.data;
							},function(errResponse){
								console.error('Error while rejecting an application');
								return $q.reject(errResponse);
							}	

					);
				},

				callForInterview : function(userId,jobId) {
					console.log("Call for an interview")
					return $http.put(BASE_URL + '/callForInterview/'+userId, jobId).then(
							function(response) {
								return response.data;
							}, null

					);
				},

				selectUser : function(userId,jobId) {
					console.log("Authenticate valid users")
					return $http.put(BASE_URL + '/selectUser/'+userId, jobId).then(
						
							function(response) {
								console.log("Select user")
								return response.data;
							}, function(errResponse) {
								console.error('Error while selecting user');
								return $q.reject(errResponse);
							}

					);
				},

				
				getAllJobs : function() {
					console.log("Job List")
					return $http.get(BASE_URL + '/getAllJobs/').then(
							function(response) {
								console.error(' Display job list');
								return response.data;
							},function(errResponse){
								console.error('Error while displaying job list');
								return $q.reject(errResponse);
							}	

					);
				},
			}
		}
		
		]

);


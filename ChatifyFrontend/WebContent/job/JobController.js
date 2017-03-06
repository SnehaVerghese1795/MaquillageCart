

	
'use strict';

app
		.controller(
				'JobController',
				[
						
						'JobService','UserService',
						'$location',
						'$rootScope',
						
						function(JobService,UserService, $location, $rootScope) {
						
							console.log("Job Controller")
							var self = this;
							
							self.job = {
								jobid : '',
								title : '',
								qualification : '',
								created_date : '',
								description : '',
								status : '',
								errorCode : '',
								errorMessage : '',
							};
							self.jobs = [];
							
							self.applyForJob = applyForJob
							
							
							//To apply for a job
							
							function applyForJob(jobId){
								console.log("Apply for job");
								var currentUser = $rootScope.currentUser
								console.log("currentUser.id:"+currentUser.userid)
								
								if(typeof currentUser.userid == 'undefined')
									{
									alert("Please login to apply for job")
									console.log("User is not logged in")
									return
									}
								console.log("UserId"+currentUser.jobId+"applying for job"+jobId)
								JobService
										.applyForJob(jobId)
										.then(
												function(d){
														self.job=d;
														alert(self.job.errorMessage)
												},
												function(errResponse){
													console.log('Error while applying for job request')
												});
														
							}						
										
											 
							


							//Displays job list
							self.getMyAppliedJobs = function() {
								JobService
										.getMyAppliedJobs()
										.then(
												function(d) {
													self.jobs = d;
													console.log("Jobs List")
												},
												function(errResponse) {
													console
															.error('Error while fetching jobs');
												});
							};
							

							//Create a job
							self.rejectJobApplication = function(userId) {
								var jobID=$rootScope.selectedJob.jobId;
								JobService
										.rejectJobApplication(userId,jobId)
										.then(
												function(d) {
													self.jobs = d;
													alert("Job application rejected"+userId+"..."+jobId)
												},
												
												function(errResponse) {
													console
															.error('Error while rejecting an application');
												});
								
							};

							self.callForInterview = function() {
								var jobID=$rootScope.selectedJob.jobId;
								console.log("Call for an interview")
								JobService
										.callForInterview()
										.then(
												function(d) {
													self.job = d;
													alert("Status to call for an interview")

												},
												function(errResponse) {
													console
															.error('Error while changing status call for interview.');
												});
							};

							self.selectUser = function(userId) {
								var jobID=$rootScope.selectedJob.jobId;
								console.log("Select User")
								JobService
										.selectUser(userId,jobID)
										.then(
												function(d) {
													self.job = d;
													self.getMyAppliedJobs
													alert("Status changed for selected user")
													

												},

												function(errResponse) {
													console
															.error('Error while selecting user status');
												});
							};
							
							
							self.getAllJobs = function() {
								
								console.log("All the available jobs")
								JobService
										.getAllJobs()
										.then(
												function(d) {
													self.jobs = d;
													
													
												},

												function(errResponse) {
													console
															.error('Error while fetching all the jobs');
												});
							};


							self.getAllJobs();
							
							self.submit = function() {
								{
									console.log('Saving New job', self.job);
									self.postAJob(self.job);
								}
								self.reset();
							};
							
							self.postAJob = function(job) {
								console.log("Post a job",self.job);
								
								JobService.postAJob(job).then(
										function(d) {
											
											alert(self.job.errorMessage)

										}, function(errResponse) {
											console
											.error('Error while posting a job');
								});
							};

							
							
							self.getJobDetails = getJobDetails
							
							function getJobDetails(jobId)
							{
								console.log('Get job details for this id',jobId)
								JobService.getJobDetails(jobId)
											.then(function(d)
													{
												self.jobs=d;
												$location.path('/view_job_details');
													},
													 function(errResponse) {
														console
														.error('Error while getting  job details');
													});
							};
							

							self.reset = function() {
								console.log('Reset job',self.job);
								self.job = {
										jobid : '',
										title : '',
										qualification : '',
										created_date : '',
										description : '',
										status : '',
										errorCode : '',
										errorMessage : '',
								};
								
							};

						} ]);


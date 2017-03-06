'use strict';
console.log(" Beginning of Blog Controller")
app
		.controller(
				'BlogController',
				[
						'$scope',
						'BlogService',
						'$location',
						'$rootScope',
						'$http',
						function($scope, BlogService, $location, $rootScope,
								$http) {
							console.log("Blog Controller...")
							var self = this;
							self.Blog = {
								userid : '',
								title: '',
								description: '',
								status : '',
								reason : '',
								errorcode : '',
								errormessage : ''
							};
							self.blogs = [];

							self.fetchAllBlogs = function() {
								console.log("Fetch All Blogs...")
								BlogService
										.fetchAllBlogs()
										.then(
												function(d) {
													self.blogs = d;
												},
												function(errResponse) {
													console
															.error('Error while fetching Users');
												});
							};
							
							

							self.createBlog = function(Blog) {
								console.log("Create User...")
								BlogService
										.createBlog(Blog)
										.then(
												self.fetchAllUsers,
												function(errResponse) {
													console
															.error('Error while creating Blog.');
												});
							};
							
							
							self.submit = function() {
								{
									console.log('Saving New User', self.Blog);
									self.createBlog(self.Blog);
								}
								self.reset();
							};

							self.reset = function() {
								self.Blog = {
										userid : '',
										id : '',
										title: '',
										description: '',
										status : '',
										reason : '',
										errorcode : '',
										errormessage : ''
					};
								$scope.myForm.$setPristine(); // used for resetting form
							};

							self.fetchAllBlogs();
						} ]);
'use strict';
 
app.factory('BlogService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("Blog Service...")
	
	var BASE_URL='http://localhost:9080/ChatifyBackend'
		
    return {
         
            fetchAllBlogs: function() {
            	console.log("Invoking Fetch All Blogs ")
                    return $http.get(BASE_URL+'/blogs')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching UserDetailss');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
             
            createBlog: function(Blog){
            	console.log("Invoking create User")
                    return $http.post(BASE_URL+'/createblogs/', Blog)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
        
            
           
         
    };
 
}]);
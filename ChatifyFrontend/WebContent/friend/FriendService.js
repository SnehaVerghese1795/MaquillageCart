'use strict';
 console.log("Beginning of Friend Service")
app.factory('FriendService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("Friend Service")
	
	var BASE_URL='http://localhost:9082/ChatifyBackend'
    return {
         
		getMyFriends: function() {
                    return $http.get(BASE_URL+'/myFriends')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                   null
                            );
            },
             
            sendFriendRequest: function(friendid){
                    return $http.get(BASE_URL+'/addfriend/'+friendid)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            updateFriendRequest: function(friend, id){
                    return $http.put(BASE_URL+'/friend/'+id, friend)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
                         }
                           
 
}]);
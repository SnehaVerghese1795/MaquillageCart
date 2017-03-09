var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'UserController'
  })
.when('/chat', {
    templateUrl : 'chat/chat.html',
    controller  : 'ChatController'
  })
 
  .when('/list_blog', {
    templateUrl : 'blog/list_blog.html',
    controller  : 'BlogController'
  })
  .when('/view_blog', {
    templateUrl : 'blog/view_blog.html',
    controller  : 'BlogController'
  })
  .when('/create_blog', {
    templateUrl : 'blog/create_blog.html',
    controller  : 'BlogController'
  })
  .when('/post_job', {
    templateUrl : 'job/post_job.html',
    controller  : 'JobController'
  })
  .when('/search_job', {
    templateUrl : 'job/search_job.html',
    controller  : 'JobController'
  })
  .when('/login', {
    templateUrl : 'pages/login.html',
    controller  : 'UserController'
  })
 .when('/register', {
    templateUrl : 'pages/register.html',
    controller  : 'UserController'
  })
  .when('/search_friend', {
    templateUrl : 'friend/search_friend.html',
    controller  : 'FriendController'
  })
  .when('/view_friend', {
    templateUrl : 'friend/view_friend.html',
    controller  : 'FriendController'
  })


  .otherwise({redirectTo: '/'});
});

app.run(function ($rootScope, $location, $cookieStore, $http){

	$rootScope.$on('$locationChangeStart', function(event, next, current){
	console.log("$locationChangeStart")
	

	var restrictedPage=$.inArray($location.path(), ['/login','/register']) ===-1;
	console.log("restrictedPage:" +restrictedPage)
	var loggedIn=$rootScope.currentUser.userid;
	console.log("loggedIn:"+loggedIn)
	if(restrictedPage & !loggedIn){
	console.log("Navigating to login page:")
	alert("You are not logged in")
	$location.path('/login');
	}
	});

	//keep user logged in after page refresh
	$rootScope.currentUser = $cookieStore.get('currentUser') || {};
	if($rootScope.currentUser){
	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.currentUser;
	
	}
	});         
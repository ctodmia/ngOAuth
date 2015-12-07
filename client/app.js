angular.module('myapp', [
	'ui.router',
	'ui.bootstrap', 
	'ui.bootstrap',
	'satellizer',
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('signup', {
			url: '/signup',
			templateUrl: 'signup/signup.html',
			controller: 'SignupController as signup'
			})
			.state('profile', {
			url: '/profile',
			templateUrl: 'profile/profileView.html',
			controller: 'ProfileController as profile'
			})
})
.controller('SignupController', function SignupController() {

	var signup = this;

	signup.greeting = "First"

})

.controller('ProfileController', function ProfileController() {

	var profile = this;

	profile.greeting = "First"

})

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

.service('greeting', function Greeting() {
	var greeting = this;

	greeting.message = "Default"
})
.controller('SignupController', function SignupController(greeting) {

	var signup = this;

	signup.greeting = greeting

})

.controller('ProfileController', function ProfileController(greeting) {

	var profile = this;

	profile.greeting = greeting

})

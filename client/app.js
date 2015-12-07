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
			.state('login', {
				url: '/login',
				templateUrl: 'login/loginView.html',
				controller: 'LoginController as loggedin'
			})
			.state('logout', {
				url: '/logout',
				templateUrl: 'logout/logoutView.html',
				controller: 'LogoutController as logout'
			})
	$authProvider.github({
	  url: '/auth/github',
	  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
	  clientId: '304203305a7274b64eda',
	  redirectUri: window.location.origin,  
	  optionalUrlParams: ['scope'],
	  scope: ['user'],
	  scopeDelimiter: ' ',
	  type: '2.0',
	  popupOptions: { width: 1020, height: 618 }
	});
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

.controller('LogoutController', function LogoutController(){
	var logout = this;
	console.log('your totally out of here')
})
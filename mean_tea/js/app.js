var app = angular.module('mean_teaApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/index.html',
					controller: 'MainController'
				})
				.otherwise({redirectTo : '/'})
		})

var app = angular.module('mean_teaApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/list.html',
					controller: 'MainController'
				})
				.otherwise({redirectTo : '/'})
		})

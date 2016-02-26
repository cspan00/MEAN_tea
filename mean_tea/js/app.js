var app = angular.module('mean_teaApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/list.html',
					controller: 'MainController'
				})
				.when('/cart', {
					templateUrl: '../partials/cart.html',
					controller: 'CartController'
				})
				.otherwise({redirectTo : '/'})
		})

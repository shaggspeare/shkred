angular
	.module('shkredApp')
	.controller('bestsellersController', function($scope, bestsellersFactory) {

		bestsellersFactory.getBestsellers().success(function(data) {
			$scope.bestsellers = data;
		}).error(function(error) {
			console.log(error);
		});

	});
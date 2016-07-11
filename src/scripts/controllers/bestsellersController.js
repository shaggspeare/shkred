angular
	.module('shkredApp')
	.controller('bestsellersController', function($scope, bestsellersFactory) {

		$scope.bestsellers;

		
		bestsellersFactory.getBestsellers().success(function(data) {
			$scope.bestsellers = data;
		}).error(function(error) {
			console.log(error);
		});

	});
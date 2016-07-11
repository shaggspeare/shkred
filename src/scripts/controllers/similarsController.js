angular
	.module('shkredApp')
	.controller('similarsController', function($scope, similarsFactory) {

		$scope.similars;

		
		similarsFactory.getSimilars().success(function(data) {
			$scope.similars = data;
		}).error(function(error) {
			console.log(error);
		});

	});
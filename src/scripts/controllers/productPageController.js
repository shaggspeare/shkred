angular
	.module('shkredApp')
	.controller('productPageController', function($scope, similarsFactory) {

		similarsFactory.getSimilars().success(function(data) {
			$scope.similars = data;
		}).error(function(error) {
			console.log(error);
		});

	});
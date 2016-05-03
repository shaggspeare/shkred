angular.module('shkredApp')
	   .controller('headerController', function($scope){

	   		$scope.categories = ['Бокалы', 'Стаканы', 'Кружки', 'Вазы', 'Креманки', 'Салатники', 'Рюмки', 'Акции'];
	   
	   		$scope.openState = false;
	   		$scope.changeOpenState = function(){
	   			$scope.openState = !$scope.openState;
	   		}

	   		
	   });
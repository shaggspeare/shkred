shkredApp.controller('navCtrl', function($scope){

	   		$scope.categories = ['Бокалы', 'Стаканы', 'Кружки', 'Вазы', 'Креманки', 'Салатники', 'Рюмки', 'Акции'];

	   		//SIDENAV opening
	   		$scope.openState = false;
	   		$scope.changeOpenState = function(){
	   			$scope.openState = !$scope.openState;
	   		}
	   });
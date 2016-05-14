angular.module('shkredApp', []);
// angular.module('shkredApp').directive('navigation', function(){
// 	return {
// 		restrict: 'E',
// 		templateUrl: '<div ng-include="views/sidenav.html"></div>'
// 	}
// });
angular
	.module('shkredApp')
	.controller('bestsellersController', function($scope, bestsellersFactory) {

		$scope.bestsellers;

		
		bestsellersFactory.getBestsellers().success(function(data) {
			$scope.bestsellers = data;
		}).error(function(error) {
			console.log(error);
		});

	});;
angular.module('shkredApp')
	   .controller('headerController', function($scope){

	   		$scope.categories = ['Бокалы', 'Стаканы', 'Кружки', 'Вазы', 'Креманки', 'Салатники', 'Рюмки', 'Акции'];
	   
	   		$scope.openState = false;
	   		$scope.changeOpenState = function(){
	   			$scope.openState = !$scope.openState;
	   		}

	   		
	   });
angular
   .module('shkredApp')
   .factory('bestsellersFactory', function($http) {

      function getBestsellers() {
         return $http.get('data/bestsellersData.json');
      }

      return {
         getBestsellers: getBestsellers
      }
   });
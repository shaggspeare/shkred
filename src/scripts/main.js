var shkredApp = angular.module('shkredApp',
    ['ui.router']);
angular
	.module('shkredApp')
	.controller('bestsellersController', function($scope, bestsellersFactory) {

		bestsellersFactory.getBestsellers().success(function(data) {
			$scope.bestsellers = data;
		}).error(function(error) {
			console.log(error);
		});

	});
shkredApp.controller('navCtrl', function($scope){

	   		$scope.categories = ['Бокалы', 'Стаканы', 'Кружки', 'Вазы', 'Креманки', 'Салатники', 'Рюмки', 'Акции'];

	   		//SIDENAV opening
	   		$scope.openState = false;
	   		$scope.changeOpenState = function(){
	   			$scope.openState = !$scope.openState;
	   		}
	   });
angular
	.module('shkredApp')
	.controller('productPageController', function($scope, similarsFactory) {

		similarsFactory.getSimilars().success(function(data) {
			$scope.similars = data;
		}).error(function(error) {
			console.log(error);
		});

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
angular
   .module('shkredApp')
   .factory('similarsFactory', function($http) {

      function getSimilars() {
         return $http.get('data/similarsData.json');
      }

      return {
         getSimilars: getSimilars
      }
   });
shkredApp.
    config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: './views/home.html'
                    },
                    'header@': {
                        templateUrl: './views/header.html',
                        controller: 'navCtrl'
                    },
                    'footer@': {
                        templateUrl: './views/footer.html',
                        controller: 'navCtrl'
                    }
                }
            })
            .state('home.product', {
                url: 'product/',
                views: {
                    'main@': {
                        templateUrl: './views/product.html'
                    }
                }
            });
    }]);


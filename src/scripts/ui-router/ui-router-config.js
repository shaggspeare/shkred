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


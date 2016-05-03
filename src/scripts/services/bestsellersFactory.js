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
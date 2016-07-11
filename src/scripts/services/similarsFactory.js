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
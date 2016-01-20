angular.module('app.services')
       .service('Cyclists', ['$http', function($http) {
          var getAll = function() {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/cyclists');
          }
          return {
              getAll: getAll
          };
       }]);
angular.module('app.services')
       .service('Days', ['$http', function($http) {
          var getAll = function() {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/program/days');
          }
          return {
              getAll: getAll
          };
       }]);
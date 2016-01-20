angular.module('app.services')
       .service('Day', ['$http', function($http) {
          var getById = function(id) {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/program/days/'+id);
          }
          return {
              getById: getById
          };
       }]);
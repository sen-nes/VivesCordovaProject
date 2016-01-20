angular.module('app.services')
       .service('Team', ['$http', function($http) {
          var getById = function(id) {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/teams/'+id);
          }
          return {
              getById: getById
          };
       }]);
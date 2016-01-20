angular.module('app.services')
       .service('Teams', ['$http', function($http) {
          var getAll = function() {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/teams');
          }
          return {
              getAll: getAll
          };
       }]);
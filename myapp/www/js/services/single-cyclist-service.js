angular.module('app.services')
       .service('Cyclist', ['$http', function($http) {
          var getById = function(id) {
             return $http.get('http://cyclingcompetition.azurewebsites.net/api/cyclists/'+id);
          }
          return {
              getById: getById
          };
       }]);
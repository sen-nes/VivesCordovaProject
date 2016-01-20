angular.module('app.controllers')
    .controller('CyclistsCtrl', ['$scope', 'Cyclists',
        function ($scope, Cyclists) {
            Cyclists.getAll().then(function (result) {
                $scope.cyclists = result.data;
            } ,function(err){
                $scope.noInternetConnection=true;
            });
            $scope.cyclistInfo = {search:""};
            $scope.search = function(cyclist) {
                if ((cyclist.firstName.toUpperCase().indexOf($scope.cyclistInfo.search.toUpperCase()) > -1) ||
                (cyclist.lastName.toUpperCase().indexOf($scope.cyclistInfo.search.toUpperCase()) > -1) ||
                (cyclist.firstName + " " + cyclist.lastName).toUpperCase().indexOf($scope.cyclistInfo.search.toUpperCase()) > -1)  {
                    return true;
                } 
                
                return false;
            };
        }])
       
    
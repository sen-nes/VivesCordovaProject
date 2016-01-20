angular.module('app.controllers')

    .controller('SingleCyclistController',['$scope','$stateParams','Cyclist', 
    function($scope, $stateParams, Cyclist) {
        Cyclist.getById($stateParams.cyclistid).then(function (result) {
            $scope.cyclist = result.data;
        });
}]);
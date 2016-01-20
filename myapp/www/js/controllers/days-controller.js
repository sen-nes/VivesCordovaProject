angular.module('app.controllers')

    .controller('DaysCtrl', ['$scope', 'Days',
        function ($scope, Days) {
            Days.getAll().then(function (result) {
                $scope.days = result.data;
            } ,function(err){
                $scope.noInternetConnection=true;
            });
        }]);
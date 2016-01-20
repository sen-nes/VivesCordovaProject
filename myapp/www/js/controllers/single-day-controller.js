angular.module('app.controllers')

    .controller('SingleDayController', ['$scope', '$stateParams', 'Day', function ($scope, $stateParams, Day) {
        Day.getById($stateParams.dayid).then(function (result) {
            $scope.dayInfo = result.data;
            $scope.dayName = "blahblah";
        })

    }]);
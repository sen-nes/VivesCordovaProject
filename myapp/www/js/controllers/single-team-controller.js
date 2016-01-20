angular.module('app.controllers')

    .controller('SingleTeamController',['$scope','$stateParams','Team', function($scope, $stateParams, Team) {
        Team.getById($stateParams.teamid).then(function (result){
        $scope.teamInfo=result.data;})
}]);
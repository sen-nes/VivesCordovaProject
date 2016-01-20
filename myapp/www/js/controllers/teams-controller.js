angular.module('app.controllers')

    .controller('TeamsCtrl', ['$scope', 'Teams',
        function ($scope, Teams) {
            Teams.getAll().then(function (result) {
                $scope.teams = result.data;
                $scope.teamInfo = { search: "" };
                $scope.search = function (team) {
                    if (team.name.toUpperCase().indexOf($scope.teamInfo.search.toUpperCase()) > -1) {
                        return true;
                    }

                    return false;
                };
            }, function (err) {
                $scope.noInternetConnection = true;
            });
        }]);
/**
 * Created by synder on 16/4/29.
 */


var userApplicationsController = application.controller('UserApplicationsController', function($scope, $http) {

    $scope.applications = [];

    $http.get('/api/user/apps').success(function (body) {
        console.log(body.data);
        $scope.applications = body.data;
    });
});
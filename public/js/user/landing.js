/**
 * Created by synder on 16/4/29.
 */


var landingController = application.controller('LandingController', function($scope, $http) {

    $scope.username = '';
    $scope.password = '';

    $scope.check = function () {
        return $scope.username && $scope.password;
    };
    
    $scope.login = function () {

        if($scope.check()){
            $http.post('/api/user/login', {
                username: $scope.username,
                password: $scope.password
            }).success(function(){
                window.location.href = '/';
            });
        }
    };
});
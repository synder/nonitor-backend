/**
 * Created by synder on 16/4/29.
 */


var registerController = application.controller('RegisterController', function($scope, $http) {

    $scope.username = '';
    $scope.password = '';

    $scope.check = function () {
        return $scope.username && $scope.password;
    };

    $scope.register = function () {

        if($scope.check()){
            $http.post('/api/user/register', {
                username: $scope.username,
                password: $scope.password
            }).success(function(res){
                window.location.href = '/user/login';
            });
        }
    };
});
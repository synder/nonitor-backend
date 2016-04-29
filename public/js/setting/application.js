/**
 * Created by synder on 16/4/29.
 */


application.filter('status' ,function(){
    return function(input){
        if(input == 1){
            return 'Normal';
        }else{
            return 'Locked';
        }
    }
});

var applicationManageController = application.controller('ApplicationManageController', function($scope, $http) {

    $scope.applications = [];

    $scope.load = function () {
        $http.get('/api/user/apps').success(function(body){
            $scope.applications = body.data;
        });
    };

    $scope.$on('$reload', function (event, msg) {
        $scope.load();
    });

    $scope.load();
});


applicationManageController.controller('NewApplicationController', function($scope, $http) {

    $scope.appName = '';
    $scope.appKey = '';
    $scope.appSecret = '';
    
    $scope.generate = function () {
        $http.put('/api/user/app/gen', {appName: $scope.appName}).success(function(body){
            $scope.appKey = body.data.appKey;
            $scope.appSecret = body.data.appSecret;
        });
    };

    $scope.save = function () {

        var body = {
            appName : $scope.appName,
            appKey : $scope.appKey,
            appSecret : $scope.appSecret
        };

        $http.put('/api/user/app/save', body).success(function(body){
            $scope.$emit('$reload', 'name');
            $scope.appName = '';
            $scope.appKey = '';
            $scope.appSecret = '';
        });
    };
});
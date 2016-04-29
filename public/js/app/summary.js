
var summaryController = application.controller('SummaryController', function($scope, $http) {

    $scope.app = null;
    $scope.appName = 'application name';

});

summaryController.controller('WebTransactionSummaryController', function ($scope, $http, $interval) {

    $scope.total = 0;
    $scope.timeout = 0;
    $scope.error = 0;
    $scope.availability = 0;

    $scope.transactions = [];

    $scope.url = '/api/app/web/urls/trans?app=' + $scope.app;

    $scope.draw = function () {

        $scope.total = 0;
        $scope.timeout = 0;
        $scope.error = 0;

        var data = [
            {
                area: false,
                key : 'total',
                values: []
            },
            {
                area: false,
                key : 'timeout',
                values: []
            },
            {
                area: false,
                key : 'error',
                values: []
            },
            {
                area: false,
                key : 'availability',
                values: []
            }
        ];

        $scope.transactions.forEach(function (item) {

            $scope.total += item.count || 0;
            $scope.timeout += item.timeout || 0;
            $scope.error += item.error || 0;

            var minute = item.minutes * 60000;

            data[0].values.push({
                series : 1,
                x : minute,
                y : item.count
            });

            data[1].values.push({
                series : 2,
                x : minute,
                y : item.timeout
            });

            data[2].values.push({
                series : 3,
                x : minute,
                y : item.error
            });

            data[3].values.push({
                series : 4,
                x : minute,
                y : Math.round((item.count - item.timeout - item.error) / item.count * 10000) / 100
            });
        });

        if($scope.total){
            $scope.availability = ($scope.total - $scope.timeout - $scope.error) / $scope.total;
        }

        diagram.line('#webTransactionChart', data);
    };


    $scope.load = function () {
        $http.get($scope.url).success(function(response) {
            $scope.transactions = response.data;
            $scope.draw();
        });
    };

    $scope.load();

    $interval(function () {
        $scope.load();
    }, 30000);
});


application.filter('exception' ,function(){
    return function(input){
        if(input == 3){
            return 'Server Error';
        }else if(input == 2){
            return 'Response Timeout';
        }else if(input == 1){
            return 'Memory Warning';
        }else{
            return 'Response Time Warning';
        }
    }
});

summaryController.controller('TransactionExceptionController', function ($scope, $http, $interval) {

    $scope.errors = [];
    $scope.timeouts = [];
    $scope.warns = [];

    $scope.error = function () {
        var url = '/api/app/web/trans/exception/error?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.errors = body.data;
        });
    };

    $scope.timeout = function () {
        var url = '/api/app/web/trans/exception/timeout?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.timeouts = body.data;
        });
    };

    $scope.warn = function () {
        var url = '/api/app/web/trans/exception/warn?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.warns  = body.data;
        });
    };

    $scope.error();

});


summaryController.controller('NodesInfoController', function ($scope, $http) {

    $scope.nodes = [];

    var url = '/api/app/nodes/system/info?app=' + $scope.app;
    $http.get(url).success(function(body) {
        $scope.nodes = body.data;
    });
});

summaryController.controller('ApplicationEventsController', function ($scope, $http) {
    $scope.crashEvents = [];
    $scope.errorEvents = [];
    $scope.stopEvents = [];
    $scope.startEvents = [];

    $scope.crash = function () {
        var url = '/api/app/nodes/event/crash?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.crashEvents = body.data;
        });
    };

    $scope.error = function () {
        var url = '/api/app/nodes/event/error?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.errorEvents = body.data;
        });
    };

    $scope.stop = function () {
        var url = '/api/app/nodes/event/stop?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.stopEvents = body.data;
        });
    };

    $scope.start = function () {
        var url = '/api/app/nodes/event/start?app=' + $scope.app;
        $http.get(url).success(function(body) {
            $scope.startEvents = body.data;
        });
    };

    $scope.crash();

});




var summaryController = application.controller('SummaryController', function($scope, $http) {

    $scope.appName = 'application name';

});

summaryController.controller('WebTransactionSummaryController', function ($scope, $http, $interval) {

    $scope.total = 0;
    $scope.timeout = 0;
    $scope.error = 0;
    $scope.availability = 0;

    $scope.transactions = [];

    $scope.draw = function () {

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

    $http.get('/statistics/web/transaction').success(function(response) {
        $scope.transactions = response.data;
        $scope.draw();
    });

    $interval(function () {
        $http.get('/statistics/web/transaction').success(function(response) {
            $scope.transactions = response.data;
            $scope.draw();
        });
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
        $http.get('/statistics/web/transaction/error').success(function(body) {
            $scope.errors = body.data;
        });
    };

    $scope.timeout = function () {
        $http.get('/statistics/web/transaction/timeout').success(function(body) {
            $scope.timeouts = body.data;
        });
    };

    $scope.warn = function () {
        $http.get('/statistics/web/transaction/warn').success(function(body) {
            $scope.warns  = body.data;
        });
    };

    $http.get('/statistics/web/transaction/error').success(function(body) {
        $scope.errors = body.data;
    });

});


summaryController.controller('NodesInfoController', function ($scope, $http) {
    $scope.nodes = [];

    $http.get('/statistics/app/nodes/system/info').success(function(body) {
        console.log(body.data);
        $scope.nodes = body.data;
    });
});

summaryController.controller('ApplicationEventsController', function ($scope, $http) {
    $scope.crashEvents = [];
    $scope.errorEvents = [];
    $scope.stopEvents = [];
    $scope.startEvents = [];

    $scope.crash = function () {
        $http.get('/statistics/event/crash').success(function(body) {
            $scope.crashEvents = body.data;
        });
    };

    $scope.error = function () {
        $http.get('/statistics/event/error').success(function(body) {
            $scope.errorEvents = body.data;
        });
    };

    $scope.stop = function () {
        $http.get('/statistics/event/stop').success(function(body) {
            $scope.stopEvents = body.data;
        });
    };

    $scope.start = function () {
        $http.get('/statistics/event/start').success(function(body) {
            $scope.startEvents = body.data;
        });
    };

    $http.get('/statistics/event/crash').success(function(body) {
        $scope.crashEvents = body.data;
    });

});



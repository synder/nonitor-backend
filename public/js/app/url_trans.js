/**
 * Created by synder on 16/4/28.
 */


var summaryController = application.controller('UrlStatisticController', function($scope, $http, $interval) {

    $scope.method = 'GET';
    $scope.url = '/';

    $scope.maxResTime = 0;
    $scope.avgResTime = 0;
    $scope.maxMemUsed = 0;
    $scope.avgMemUsed = 0;

    $scope.transactions = [];

    $scope.draw = function () {

        var responseTimeData = [
            {
                area: false,
                key : 'Response Time(ms)',
                values: []
            }
        ];

        var transactionCountData = [
            {
                area: false,
                key : 'Total',
                values: []
            },
            {
                area: false,
                key : 'Timeout',
                values: []
            },
            {
                area: false,
                key : 'Error',
                values: []
            }
        ];

        var memoryUsedData = [
            {
                area: false,
                key : 'Used Memory(MB)',
                values: []
            }
        ];

        var memoryIncreasedData = [
            {
                area: false,
                key : 'Increased Memory(MB)',
                values: []
            }
        ];

        $scope.transactions.forEach(function (item) {

            var minute = item.minutes * 60000;

            transactionCountData[0].values.push({
                series : 1,
                x : minute,
                y : item.count
            });

            transactionCountData[1].values.push({
                series : 2,
                x : minute,
                y : item.timeout
            });

            transactionCountData[2].values.push({
                series : 3,
                x : minute,
                y : item.error
            });

            item.requests.forEach(function (request) {

                var resTime = request[3] - request[2];

                var inMem = request[5] >> 20;
                var outMem = request[6] >> 20;
                var incMem = outMem - inMem;

                if($scope.maxMemUsed < outMem){
                    $scope.maxMemUsed = outMem;
                }

                if($scope.maxResTime < resTime){
                    $scope.maxResTime = resTime;
                }

                responseTimeData[0].values.push({
                    series : 1,
                    x : request[3],
                    y : resTime
                });

                memoryUsedData[0].values.push({
                    series : 1,
                    x : request[3],
                    y : outMem
                });

                memoryIncreasedData[0].values.push({
                    series : 1,
                    x : request[3],
                    y : incMem
                });
            });
        });


        diagram.line('#responseTime', responseTimeData, [COLORS.GREEN]);
        diagram.line('#memoryUsed', memoryUsedData, [COLORS.RED]);
        diagram.line('#memoryIncreased', memoryIncreasedData, [COLORS.ORANGE]);
        diagram.line('#transactionCount', transactionCountData);
    };

    $scope.load = function () {

        $http.get('/api/app/web/url/trans').success(function(response) {
            $scope.transactions = response.data;
            $scope.draw();
        });

    };

    $scope.load();
});

window.COLORS = {
    LIME : "#8CBF26",
    RED : "#f25118",
    RED_DARK : "#d04f4f",
    BLUE : "#4e91ce",
    GREEN : "#3ecd74",
    ORANGE : "#f2c34d",
    PINK : "#E671B8",
    PURPLE : "#A700AE",
    BROWN : "#A05000",
    TEAL : "#4ab0ce",
    GRAY : "#666",
    WHITE : "#fff",
    TEXT_COLOR : "#666"
};


window.diagram = {

    line : function (container, data, colors) {

        colors = colors || [
            COLORS.BLUE,
            COLORS.ORANGE,
            COLORS.RED,
            COLORS.GREEN
        ];

        var chart = nv.models.lineChart()
            .useInteractiveGuideline(true)
            .margin({
                top: 5,
                bottom: 20,
                left: 25,
                right: 25
            })
            .showLegend(true)
            .color(colors);

        chart.legend.margin({top: 3});

        chart.yAxis.showMaxMin(false);

        chart.xAxis.showMaxMin(false).tickFormat(function (timestamp) {
            return moment(timestamp).format('h:mm');
        });

        d3.select(container)
            .datum(data)
            .transition()
            .call(chart);

        return chart;
    },

    area : function () {
        
    },

    stack: function () {
        
    }

};


window.application = angular.module('application', []);

application.filter('percentage' ,function(){
    return function(input){

        var temp = Math.round(input * 10000) / 100;

        return temp + '%';
    }
});

application.filter('join' ,function(){
    return function(array){
        return array.join(' ');
    }
});

application.filter('slice' ,function(){
    return function(input, number){
        if(input.length < number){
            return input;
        }
        return input.substr(0, number) + '...';
    }
});

application.filter('date' ,function(){
    return function(date){
        return moment(date).format('YYYY-MM-DD hh:mm:ss');
    }
});



application.filter('encode' ,function(){
    return function(input){
        return encodeURIComponent(input);
    }
});

/**
 * Created by synder on 16/4/27.
 */


var convert = require('../../helper/convert');

var conn = require('../../database/monitor').conn;

var AppNodeWebTransInfo = conn.model('AppNodeWebTransInfo');

var getADayBeginTimestamp = function (date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
};

exports.statisticsOneDayWebTransaction = function (app, date, callback) {

    var today = getADayBeginTimestamp(date);
    var after = new Date(date.setDate(date.getDate() + 1));

    after = getADayBeginTimestamp(after);
    after = convert.convertTimestampToMinutes(after);
    today = convert.convertTimestampToMinutes(today);

    AppNodeWebTransInfo.find({app: app, minutes:{$gte : today, $lte: after}}, 'count minutes error timeout -_id', callback);
};

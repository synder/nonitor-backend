/**
 * @author synder
 * @date 16/1/11
 * @desc
 */

var set = [];

for(var i = 0; i < 60; i++){
    set.push(0);
}

var x = [ { ppid: 4147,
    pid: 4147,
    time: 1461565441967,
    uptime: 10.291,
    load: 3.58447265625,
    memory:
    { rss: 48422912,
        heap: 32278048,
        used: 22736008,
        free: 2047860736 } } ];

var temp = [];

for(var i = 0 ; i < x.length; i++){

    var info = x[i];
    var time = new Date(info.time);

    temp.push({
        app     : info.app,
        pid     : info.pid,
        ppid    : info.ppid,
        year    : time.getFullYear(),
        month   : time.getMonth(),
        day     : time.getDate(),
        hour    : time.getHours(),
        minute  : time.getMinutes(),
        second  : time.getSeconds()
    });

}

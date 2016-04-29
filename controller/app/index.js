/**
 * Created by synder on 16/4/27.
 */


exports.summary = function (req, res, next) {
    res.render('app/summary');
};

exports.url = function (req, res, next) {
    var url = req.query.url;
    var method = req.query.method;
    
    res.render('app/url');
};
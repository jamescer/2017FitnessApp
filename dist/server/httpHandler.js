exports.main = function (req, res, next) {
    var path = req.url;
    res.write("Hello World. you requested " + path);
    res.end();
    next();
};
//# sourceMappingURL=httpHandler.js.map
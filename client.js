(function (socket) {
    var padLeft = function (sub, max) {
        var diff = max - sub.length;
        if (diff > 0) {
            return new Array(diff).join(' ') + sub;
        }
        return sub;
    };
    socket.on('connection', function (options) {
        var keys = Object.keys(options.urls);
        var longest = keys.reduce(function (acc, item) {
            if (item.length > acc) return item.length;
            return acc
        }, 0);
        keys.forEach(function (key) {
            console.log(padLeft(key, longest + 1) + ' ' + options.urls[key])
        });
    });
})(window.___browserSync___.socket);

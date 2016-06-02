var PLUGIN_NAME = "Console Info";
module.exports = {
    "plugin:name": PLUGIN_NAME,
    plugin: function (opts, bs) {
        var logger = bs.getLogger(PLUGIN_NAME);
        logger.info('Running, check your console');
    },
    hooks: {
        "client:js": require('fs').readFileSync(__dirname + '/client.js', 'utf8')
    }
};

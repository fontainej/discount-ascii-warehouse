
module.exports = function () {

    'use strict';

    var host = process.env.IP || 'localhost';
    var port = process.env.PORT || 3001;

    var server = {

        browserSyncReloadDelay: 500,

        host: 'http://' + host,

        port: port,

        proxy: 'http://' + host + ':' + port,

        script: 'index.js'
    };

    return server;
};

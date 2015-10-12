
module.exports = function () {

    'use strict';

    var config = require('require-dir')('settings', { recurse: false });

    config.exitOnError = true;

    return config;
};

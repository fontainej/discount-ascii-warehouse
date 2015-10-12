
var module = (function () {

    'use strict';

    var gulp = require('gulp');
    var requireDir = require('require-dir');

    var config = require('./gulp/config/config')();
    var jobs = requireDir('./gulp/jobs/', { recurse: false });
    var tasks = requireDir('./gulp/tasks/', { recurse: false });

    function loadModules(path, modules) {

        for (var m in modules) {

            if (typeof modules[m] === 'function') {

                require(path + m)(gulp, config);
            }
        }
    }

    return {

        run: function () {

            loadModules('./gulp/jobs/', jobs);
            loadModules('./gulp/tasks/', tasks);
        }
    }
}());

module.run();

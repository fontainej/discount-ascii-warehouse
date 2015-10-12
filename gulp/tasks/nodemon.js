
module.exports = function (gulp, config) {

    'use strict';

    var nodemon = require('gulp-nodemon');
    var browserSync = require('browser-sync');

    gulp.task('nodemon', function (cb) {

        var called = false;

        nodemon({

            script: config.server().script,

            watch: config.paths().scripts.src
        })

        .on('start', function onStart() {

            if (!called) {

                cb();
            }

            called = true;
        })

        .on('restart', function onRestart() {

            setTimeout(function reload() {

                browserSync.reload({

                    stream: false
                });

            }, config.server().browserSyncReloadDelay);
        });
    });
};

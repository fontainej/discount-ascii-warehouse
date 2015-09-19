
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('nodemon', function (cb) {

        var called = false;

        return o.plugins.nodemon({
                script: o.config.server.script,
                watch: [o.config.js.source]
            })

            .on('start', function onStart() {

                if (!called) {
                    cb();
                }

                called = true;
            })

            .on('restart', function onRestart() {

                setTimeout(function reload() {

                    o.plugins.browserSync.reload({
                        stream: false
                    });

                }, o.config.browserSyncReloadDelay);
            });
    });
};

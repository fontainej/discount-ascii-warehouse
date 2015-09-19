
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('browserify', function () {

        return gulp.src([o.config.js.main])

            .pipe(o.plugins.browserify({
                insertGlobals: true,
                debug: true
            }))

            .pipe(o.plugins.concat(o.config.js.name))

            .pipe(gulp.dest(o.config.js.dist));
    });
};

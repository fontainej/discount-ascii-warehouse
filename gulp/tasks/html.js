
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('html', function () {

        return gulp.src([o.config.html.source])

            .pipe(gulp.dest(o.config.html.dist));
    });
};

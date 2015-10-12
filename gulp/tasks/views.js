
module.exports = function (gulp, config) {

    'use strict';

    gulp.task('views', function () {

        gulp.src(config.paths().views.src)

            .pipe(gulp.dest(config.paths().views.dest));
    });
};

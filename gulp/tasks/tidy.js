
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('tidy', function () {

        return gulp.src(o.config.dist, { read: false })

            .pipe(o.plugins.clean({ force: true }));
    });
};

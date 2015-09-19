
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('js', function () {

        return gulp.src([o.config.js.source])

            .pipe(o.plugins.concat(o.config.js.name))

            .pipe(o.plugins.uglify(o.config.uglifySettings))

            .pipe(gulp.dest(o.config.js.dist));
    });
};

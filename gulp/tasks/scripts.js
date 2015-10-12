
module.exports = function (gulp, config) {

    'use strict';

    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');

    gulp.task('scripts', function () {

        gulp.src(config.paths().scripts.src)

            .pipe(concat(config.paths().scripts.name))

            .pipe(uglify(config.uglify()))

            .pipe(gulp.dest(config.paths().scripts.dest));
    });
};

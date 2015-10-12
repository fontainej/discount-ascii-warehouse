
module.exports = function (gulp, config) {

    'use strict';

    var concat = require('gulp-concat');
    var rubySass = require('gulp-ruby-sass');
    var sourcemaps = require('gulp-sourcemaps');

    gulp.task('styles', function () {

        rubySass(config.paths().styles.main, config.sass())

            .on('error', rubySass.logError)

            .pipe(concat(config.paths().styles.name))

            .pipe(sourcemaps.write())

            .pipe(gulp.dest(config.paths().styles.dest));
    });
};

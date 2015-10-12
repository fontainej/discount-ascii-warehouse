
module.exports = function (gulp, config) {

    'use strict';

    var browserify = require('browserify');
    var concat = require('gulp-concat');
    var source = require('vinyl-source-stream');

    gulp.task('browserify', function () {

         browserify(config.paths().scripts.main, config.browserify())

            .bundle()

            .pipe(source(config.paths().scripts.name))

            .pipe(gulp.dest(config.paths().scripts.dest));
    });
};

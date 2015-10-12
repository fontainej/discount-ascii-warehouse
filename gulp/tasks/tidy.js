
module.exports = function (gulp, config) {

    'use strict';

    var clean = require('gulp-clean');

    gulp.task('tidy', function () {

        gulp.src(config.paths().dist, { read: false })

            .pipe(clean({ force: true }));
    });
};


module.exports = function (gulp, config) {

    'use strict';

    var sequence = require('gulp-sequence');

    gulp.task('watch', function () {

        gulp.watch(config.paths().scripts.src, sequence('jshint', 'browserify', 'scripts'));
        gulp.watch(config.paths().styles.src, ['styles']);
        gulp.watch(config.paths().views.src, ['views']);
    });
};

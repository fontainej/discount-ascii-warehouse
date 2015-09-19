
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('build', o.plugins.sequence('clean', 'lint', 'browserify', ['js', 'css', 'html']));
};


module.exports = function (gulp) {

    'use strict';

    var sequence = require('gulp-sequence');

    gulp.task('build', sequence('clean', 'jshint', 'browserify', ['scripts', 'styles', 'views']));
};


module.exports = function (gulp, config) {

    var jshint = require('gulp-jshint');

    gulp.task('jshint', function () {

        gulp.src(config.paths().scripts.src)

            .pipe(jshint(config.jshint()));
    });
};

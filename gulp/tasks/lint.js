
module.exports = function (gulp, o) {

    gulp.task('lint', ['jshint']);

    gulp.task('jshint', function () {

        return gulp.src(o.config.js.source)

            .pipe(o.plugins.jshint())

            .pipe(o.plugins.jshint.reporter(o.config.jshint.reporter));
    });
};

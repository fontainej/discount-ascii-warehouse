
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('watch', function () {

        gulp.watch([
            o.config.js.source,
            o.config.css.source,
            o.config.html.source
        ], ['lint', 'browserify', 'js', 'css', 'html']);
    });
};

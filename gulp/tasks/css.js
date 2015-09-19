
module.exports = function (gulp, o) {

    'use strict';

    gulp.task('css', function () {

        return gulp.src([o.config.css.source])

            .pipe(o.plugins.concat(o.config.css.name))

            .pipe(gulp.dest(o.config.css.dist));

        // return o.plugins.rubySass(o.config.uiFramework.css.imports, {
        //         precision: o.config.uiFramework.css.precision,
        //         sourcemap: o.config.uiFramework.css.sourcemap,
        //         stopOnError: o.config.uiFramework.css.stopOnError,
        //         style: o.config.uiFramework.css.style
        //     })

        //     .on('error', o.plugins.rubySass.logError)

        //     .pipe(o.plugins.concat(o.config.uiFramework.css.name))

        //     .pipe(o.plugins.sourcemaps.write())

        //     .pipe(gulp.dest(o.config.uiFramework.css.dist));
    });
};

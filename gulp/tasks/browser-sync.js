
module.exports = function (gulp, o) {

    'use strict';

    var browserSync = require('browser-sync');

    gulp.task('browserSync', function () {

        browserSync.init({
            files: [
                o.config.js.source,
                o.config.css.source,
                o.config.html.source
            ],
            proxy: 'http://' + o.config.server.host + ':' + o.config.server.port,
            port: o.config.server.port
        });

        // TODO: Setup to watch html files from here and reload .pipe(reload({ stream: true }))
        // TODO: Javascript wathc .pipe(reload({ stream: true }))
        // TODO: SASS .pipe(browserSync.stream({ match: '**/*.css' }))
    });
};


module.exports = function (gulp, config) {

    'use strict';

    var browserSync = require('browser-sync');

    gulp.task('browserSync', function () {

        browserSync.init({
            files: [
                config.js.source,
                config.css.source,
                config.html.source
            ],
            proxy: 'http://' + config.server.host + ':' + config.server.port,
            port: config.server.port
        });

        // TODO: Setup to watch html files from here and reload .pipe(reload({ stream: true }))
        // TODO: Javascript wathc .pipe(reload({ stream: true }))
        // TODO: SASS .pipe(browserSync.stream({ match: '**/*.css' }))
    });
};

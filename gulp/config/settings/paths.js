
module.exports = function () {

    'use strict';

    var base = './public/';
    var dist = './static/';

    var paths = {

        dist: dist,

        scripts: {

            dest: dist + 'js/',

            name: 'app.js',

            main: base + 'app/app.js',

            src: base + '**/*.js'
        },

        styles: {

            dest: dist + 'css/',

            name: 'styles.css',

            main: base + 'assets/stylesheets/imports.scss',

            src: base + '**/*.scss'
        },

        views: {

            dest: dist + 'views/',

            src: base + '**/*.html'
        }
    };

    return paths;
};

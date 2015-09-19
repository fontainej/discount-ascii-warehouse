
module.exports = function () {

    var basePath = './public';
    var distPath = './static';
    var host = process.env.IP || 'localhost';
    var port = process.env.PORT || 3001;

    var config = {
        dist: distPath,

        html: {
            dist: distPath,
            main: basePath + '/app/index.html',
            source: basePath + '/**/*.html'
        },

        js: {
            dist: distPath + '/js',
            main: basePath + '/app/app.js',
            name: 'app.js',
            source: basePath + '/app/**/*.js'
        },

        css: {
            dist: distPath + '/css',
            name: 'styles.css',
            source: basePath + '/assets/stylesheets/**/*.css',
            sourcemap: true,
            stopOnError: true,
            style: 'compressed'
        },

        server: {
            host: host,
            port: port,
            script: 'index.js'
        },

        jshint: {
            reporter: 'default'
        },

        browserSyncReloadDelay: 500,

        exitOnError: true,

        uglifySettings: {
            mangle: false
        }
    };

    return config;
};

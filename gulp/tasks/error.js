
module.exports = function (gulp, config) {

    'use strict';

    var util = require('gulp-util');

    function handleError(error) {

        var errorMessage = util.colors.red(error);

        util.log(errorMessage);

        // stops plugin errors killing the watch task
        if (config.exitOnError) {

            process.exit(1);
        }
    }

    return {

        handleError: handleError
    };
};

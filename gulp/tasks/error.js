
module.exports = function (gulp, o) {

    'use strict';

    function handleError(error) {

        var errorMessage = o.plugins.util.colors.red(error);

        o.plugins.util.log(errorMessage);

        // stops plugin errors killing the watch task
        if (o.config.exitOnError) {

            process.exit(1);
        }
    }
};

var gulp    = require('gulp');
var Promise = require('promise');
var os      = require('os');

gulp.task('test', function () {
    console.log('HOSTNAME:', os.hostname);
    console.log('Testing started...');
    return new Promise(function (resolve) {
        setTimeout(resolve, 10000);
    });
});

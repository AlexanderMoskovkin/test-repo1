var gulp    = require('gulp');
var Promise = require('promise');
fail
gulp.task('test', function () {
    console.log('Testing started...');
    return new Promise(function (resolve) {
        setTimeout(resolve, 10000);
    });
});

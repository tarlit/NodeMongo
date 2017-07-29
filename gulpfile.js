const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

gulp.task('pre-test', () => {

});

gulp.task('tests:unit', () => {
    return gulp.src('./tests/unit/**/*.js')
        .pipe(mocha({
            reporter: 'nyan',
        }));
});

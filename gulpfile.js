var gulp = require('gulp');
var guppy = require('git-guppy')(gulp);
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulpFilter = require('gulp-filter');

gulp.task('lint', function () {
  return gulp.src('*.js')
    .pipe(gulpFilter(['*.js']))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

// This task will lint all files, then only the indexed changes
gulp.task('pre-commit', ['lint'], function () {
  guppy.stream('pre-commit')
    .pipe(gulpFilter(['*.js']))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

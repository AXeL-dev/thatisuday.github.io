const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gulpCleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp
    .src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpCleanCss())
    .pipe(gulp.dest('./'));
});

gulp.task('html', function () {
    return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'html']);

gulp.task('watch', ['build'], function () {
    return gulp.watch(['./src/**/*'], ['build']);
});
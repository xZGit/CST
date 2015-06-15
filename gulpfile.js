/**
 * Created by xx on 15/6/15.
 */
// Include gulp
var gulp = require('gulp');
// Include plugins
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('public/js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});



gulp.task('images', function() {
    return gulp.src('public/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('build/img'));
});


gulp.task('csss', function() {
    return gulp.src('public/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'));
});



// Default Task
gulp.task('default', ['scripts','images','csss']);
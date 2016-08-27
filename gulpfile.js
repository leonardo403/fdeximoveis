'use strict';

//requires plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var concatCSS = require('gulp-concat-css');

//Task Browser Sync
gulp.task('browserSync', function() {
   	browserSync.init({
   	   server: {
   	   	 baseDir: 'app'
   	   },
   	})
});

//Task Sass 
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
      .pipe(sass()) //converte Sass para CSS
      .pipe(gulp.dest('app/css')) //envia para pasta app/css
      .pipe(browserSync.reload({
      	stream: true
      }))
});

//Task Concat CSS
gulp.task('concatCSS', function() {
    return gulp.src('app/css/*.css')
      .pipe(concatCSS('main.css'))
      .pipe(gulp.dest('app/css/'))
});

//Task useref 
gulp.task('useref', function() {
    return gulp.src('app/*.html')
      .pipe(useref())
      //minifica somente JS
      .pipe(gulpIf('*.js', uglify()))
      //minifica somente CSS
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist/'))
});

//Task Watch
gulp.task('watch', ['browserSync', 'sass', 'concatCSS'] , function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    //Reload browser HTML e JS files
    gulp.watch('app/*.html', browserSync);
    gulp.watch('app/js/**/*.js', browserSync);
});
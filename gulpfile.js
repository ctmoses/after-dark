'use strict';
var gulp			= require('gulp');
var gutil			= require('gulp-util');
var sass      = require('gulp-sass');
var webpack   = require('webpack-stream');

let reactFiles = ['src/app.js','src/routes.js','src/rootReducer.js', 'src/index.js', 'src/features/**/*.js', 'src/layouts/**/*.js'];

gulp.task('sass', function () {
  gulp.src('src/public/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/public/dist/'));
});

gulp.task('webpack', function() {
  return gulp.src('src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('src/public/dist/'));
});


gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch(reactFiles, ['webpack']);
});

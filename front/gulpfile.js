var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync')
    gutil = require('gulp-util');

// Styles
gulp.task('styles', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(livereload())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/**/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(livereload())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Templates
gulp.task('templates', function() {
    return gulp.src('src/**/**/*.html')
      .pipe(livereload())
      .pipe(gulp.dest('dist/templates'))
      .pipe(notify({ message: 'Template task complete' }));
  });

// Default task
gulp.task('default', ['serve', 'styles', 'scripts', 'templates', 'watch']);

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./",
        },
        port: 8080
    });
});

// Watch
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch('src/styles/**/*.scss', function(event) {
        gulp.run('styles');
    });

    gulp.watch('src/**/**/*.js', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('src/**/**/*.html', function(event) {
        gulp.run('templates');
    })
});
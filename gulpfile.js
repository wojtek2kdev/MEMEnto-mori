var gulp = require('gulp');

var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// Use NODE_ENV=production in production # process.env.NODE_ENV = 'production'

gulp.task('dist', function () {
    return browserify('./src/js/main.js')
      .transform('vueify')
      .transform('babelify')
      .plugin('vueify-extract-css', {out: 'style.css'})
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});
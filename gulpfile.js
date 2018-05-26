var gulp = require('gulp');

var vueify = require('gulp-vueify');
 
gulp.task('vueify', function () {
  return gulp.src('components/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./dist'));
});
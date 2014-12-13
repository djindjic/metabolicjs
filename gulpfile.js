var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    watch = require('gulp-watch');
 
gulp.task('default', function(cb) {
  watch(['lib/**/*'], shell.task(['']));
});
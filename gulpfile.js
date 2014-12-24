var gulp    = require('gulp'),
    shell   = require('gulp-shell'),
    watch   = require('gulp-watch'),
    bump    = require('gulp-bump'),
    version = require('./package.json').version;


gulp.task('bump-version', function(){
  return gulp.src(['./package.json'])
    .pipe(bump({type:'patch'})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

gulp.task('default', function(cb) {
  watch(['lib/**/*'], shell.task(['jspm link github:djindjic/metabolicjs@' + version + ' -y']));
});
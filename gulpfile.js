var gulp    = require('gulp'),
	Promise = require('promise'),	
	del     = require('del'),
	$       = require('gulp-load-plugins')();
	to5     = require('gulp-6to5');

var clean = function (paths) {
  return new Promise(function (fulfil) {
    $.util.log('Clear:');
    paths.forEach(function(path) {
      $.util.log('-' + path);
    });
    del(paths, fulfil);
  });
};

var sixto5 = function () {
	return new Promise(function (fulfil) {
		$.util.log('-to5');
	    gulp.src('src/**/*.js')
	        .pipe(to5({ modules: "amd" }))
	        //.pipe($.concat('all.js'))
	        .pipe(gulp.dest('dist-to5'));
	});
};

// var traceur = function () {
// 	return new Promise(function (fulfil) {
// 		$.util.log('-traceur');
// 	    gulp.src('src/**/*.js')
// 	        .pipe($.sourcemaps.init())
// 	        .pipe($.traceur())
// 	        .pipe($.concat('all.js'))
// 	        .pipe($.sourcemaps.write())
// 	        .pipe(gulp.dest('dist-traceur'));
// 	});
// };

gulp.task('default',
  function() {
    clean(['dist-to5', 'dist-traceur'])
    .then(sixto5);
    //.then(traceur);
  }
);
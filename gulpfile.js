var gulp      = require('gulp'),
    Promise   = require('promise'),   
    del       = require('del'),
    $         = require('gulp-load-plugins')(),
    cachebust = new $.cachebust

var build = function (paths) {
  return new Promise(function (fulfil) {
    $.util.log('Building to dist');
    fulfil();
  });
};

var clean = function (paths) {
  return new Promise(function (fulfil) {
    $.util.log('Clear:');
    paths.forEach(function(path) {
      $.util.log('-' + path);
    });
    del(paths, fulfil);
  });
};

// var indexHtml = function () {
//   return new Promise(function (fulfil) {
//     $.util.log('Rebuilding index.html');
//     gulp.src('./src/index.html')
//       .pipe(cachebust.references())
//       .pipe(gulp.dest('./dist'))
//       .on('end', fulfil);
//     });
// };

var startServer = function(){
  return new Promise(function (fulfil) {
    $.util.log('server 9000');
    gulp.src('.')
      .pipe($.webserver({
        port: 9000,
        livereload: true,
        fallback: 'index.html'
      }))
      .on('end', fulfil);
    });
};

var watchFiles = function() {
  $.util.log('Watching files');
  $.watch(['src/**/*.js'], function() {
    clean(['dist'])
    .then(build);
  });
};

gulp.task('default',
  function() {
    clean(['dist'])
    // .then(indexHtml)
    .then(build)
    .then(startServer)
    .then(watchFiles);
  }
);
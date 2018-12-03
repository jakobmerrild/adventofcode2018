var gulp = require('gulp'),
  exec = require('child_process').exec;

gulp.task('build', ['compile', 'build.copy.assets'], function () {
  return gulp.src('./config/**/*.json')
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('compile', function (done) {
  exec('tsc -p ./app', function (err, stdOut, stdErr) {
    console.log(stdOut);
    if (err){
      done(err);
    } else {
      done();
    }
  });
});

gulp.task('build.copy.assets', function() {
    return gulp.src(['./app/src/**/*', '!./**/*.ts'])
    .pipe
    (gulp.dest('./app/dist'));
});
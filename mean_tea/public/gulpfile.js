var gulp = require('gulp')
var browserSync = require('browser-sync').create()


gulp.task('browserSync', ()=> {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

gulp.task('css', () => {
  return gulp.src('css/**/*.css')
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})



gulp.task('watch', ['browserSync', 'css'], () => {
  return gulp.watch('css/**/*.css', ['css'])
})

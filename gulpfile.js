const gulp = require('gulp')
const bs = require('browser-sync').create()
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const sourcemap = require('gulp-sourcemaps')

gulp.task('sass', () => {
  return gulp.src('src/assets/sass/**/*')
    .pipe(sourcemap.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(bs.stream())
})

gulp.task('imagemin', () => {
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
})

gulp.task('serve', ['sass'], () => {
  bs.init({
    server: {
      baseDir: './src'
    },
    open: false,
    port: 3333,
    reloadOnRestart: true
  })

  gulp.watch('src/assets/sass/**/*', ['sass'])
  gulp.watch('src/*.html', bs.reload)
  gulp.watch('src/assets/css/**/*', bs.reload)
  gulp.watch('src/assets/images/**/*', bs.reload)
  gulp.watch('src/assets/javascript/**/*', bs.reload)
})

gulp.task('default', ['serve'])

const { series, parallel } = require('gulp')

var gulp = require('gulp')

//css requirements
var cleanCss = require('gulp-clean-css')
var postCss = require('gulp-postcss')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')

//browser
var browserSync = require('browser-sync').create()

//jekyll build
var cp = require('child_process')


function runCss() {

  return gulp.src([
    '_assets/css/*.css'
  ])

  .pipe(sourcemaps.init())
  .pipe(
    postCss([
      require("autoprefixer"),
      require("postcss-preset-env")({
        browsers: ['IE 11', 'last 2 versions']
      })
    ])
  )

  .pipe(concat("app.css"))

  .pipe(
    cleanCss({
      compatibility: 'ie8'
    })
  )

  .pipe(sourcemaps.write())
  .pipe(gulp.dest('_site/assets/css'))
  .pipe(browserSync.stream())

}



function jekyllbuild (done) {

    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);

};

function runJs() {
  return gulp.src([
    '_assets/js/*.js',
  ])

  .pipe(concat('main.js'))

  .pipe(gulp.dest('_site/assets/js'))
  .pipe(browserSync.stream())

}







function watch() {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  })

  gulp.watch(['**/*.*', '!_site/**/*','!_assets/**/*','!node_modules/**/*','!.sass-cache/**/*', '!_assets/**/*' ], series(jekyllbuild, runCss)).on('change', browserSync.reload)
  gulp.watch("_assets/css/*", runCss)
  gulp.watch("_assets/js/*", runJs)
}

exports.default = series(jekyllbuild, runCss, runJs, watch);

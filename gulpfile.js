var gulp = require('gulp');
var sass = require('gulp-sass');
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

 

function css() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./dist/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/"))
}

function watch() {
  return css()
}
var build = gulp.parallel(css)
gulp.task(build)
gulp.task('watch', build)


// Require Gulp
const gulp = require('gulp');

// Gulp Plugings
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const hash = require('gulp-hash');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('scripts', () => {
  del(["static/js/**/*"])
  gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      "presets": [
	["env", {
	  "targets": {
	    "browsers": ["last 2 versions", "safari >= 7"]
	  }
	}]
      ]
    }))
    .pipe(eslint())
    .pipe(eslint.failAfterError())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/js'));
});

// Hash images
gulp.task('images', () => {
    del(['static/img/**/*']);
    gulp.src('src/img/**/*')
      .pipe(plumber())
      .pipe(gulp.dest('static/img'));
});

// Hash fonts
gulp.task('fonts', () => {
    del(['static/fonts/**/*']);
    gulp.src('src/fonts/**/*')
      .pipe(plumber())
      .pipe(gulp.dest('static/fonts'));
});

gulp.task('sass', () => {
  del(["static/css/**/*"])
  gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
	outputStyle : 'compressed'
    }))
    .pipe(autoprefixer({
	browsers : ['last 5 versions']
    }))
    .pipe(gulp.dest('static/css'));
})

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*', ['sass']);
  gulp.watch('src/js/**/*', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/fonts/**/*', ['fonts']);
});

gulp.task('default', ['images', 'fonts', 'scripts', 'sass', 'watch']);

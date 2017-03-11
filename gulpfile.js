// Require Gulp
const gulp = require('gulp');

// Gulp Plugings
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const del = require('del');
const eslint = require('gulp-eslint');
const hash = require('gulp-hash');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('lint', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format({
      globals: [
	'jQuery',
	'$'
      ],
      envs: [
	'browser',
	'es6'
      ]
    }))
    .pipe(eslint.failAfterError());
});

gulp.task('scripts', ['lint'], () => {
  del(["static/js/**/*"])
  gulp.src('src/js/**/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('static/js'));
});

gulp.task('sass', () => {
  del(["static/css/**/*"])
  gulp.src('src/scss/**/*.scss')
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
});

gulp.task('default', ['scripts', 'sass', 'watch']);

const gulp	= require('gulp');
const browserSync = require ('browser-sync');
const csso	= require('gulp-csso');
const gcmq	= require('gulp-group-css-media-queries');
const notify	= require('gulp-notify');
const prefix	= require('gulp-autoprefixer');
const pug	= require('gulp-pug');
const plumber = require('gulp-plumber');
const rename	= require('gulp-rename');
const sass	= require('gulp-sass');
const srcmaps	= require('gulp-sourcemaps');

function style() {
	return gulp.src('blocks/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());

}
function watch() {
	browserSync.init({
		server:{
			baseDir: 'app'
		}
	});
	gulp.watch('blocks/**/*.sass', style);
	gulp.watch('blocks/**/*.pug').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
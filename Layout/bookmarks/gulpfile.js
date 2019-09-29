"use strict";

var gulp	= require('gulp'),
	browserSync = require ('browser-sync').create(),
	csso	= require('gulp-csso'),
	gcmq	= require('gulp-group-css-media-queries'),
	notify	= require('gulp-notify'),
	prefix	= require('gulp-autoprefixer'),
	pug	= require('gulp-pug'),
	plumber = require('gulp-plumber'),
	rename	= require('gulp-rename'),
	sass	= require('gulp-sass'),
	srcmaps	= require('gulp-sourcemaps');

//	BROWSER SYNC
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		},
		port: 3002
		// ,notify: true
	});
	// done();
	// browserSync.watch('app/**/*.*', browserSync.reload);
	// gulp.watch('**/*.*').on('change', browserSync.reload);
})

//	PUG
gulp.task('pug', function() {
	return gulp.src('blocks/index.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('app'))
		.on('end', browserSync.reload);
})
//	SASS
gulp.task('sass', function() {
	return gulp.src('blocks/main.sass')
		// .pipe(srcmaps.init())
		.pipe(sass())
		// .pipe(prefix({browsers: ['last 10 versions'], cascade: false}))
		// .pipe(csso())
		.on("error", notify.onError({
			title: "sass-css"
		}))
		// .pipe(srcmaps.write())
		.pipe(gulp.dest('app/css/'))
		//.pipe(browserSync.reload({
		//	stream: true
		//}))
		.on('end', browserSync.reload);

})

gulp.task('watch', function() {
	gulp.watch('blocks/**/*.pug', gulp.series('pug'))
	gulp.watch('blocks/**/*.sass', gulp.series('sass'))
})

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass'),
	gulp.parallel('watch', 'serve')
));
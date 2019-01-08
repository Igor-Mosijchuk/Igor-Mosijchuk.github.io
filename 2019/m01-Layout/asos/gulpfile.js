"use strict";

var gulp	= require('gulp'),
	browserSync = require ('browser-sync').create(),
	csso	= require('gulp-csso'),
	gcmq	= require('gulp-group-css-media-queries'),
	notify	= require('gulp-notify'),
	prefix	= require('gulp-autoprefixer'),
	pug	= require('gulp-pug'),
	plumber = require('gulp-plumber'),
	smartgrid = require('smart-grid'),
	sass	= require('gulp-sass'),
	srcmaps	= require('gulp-sourcemaps'),
	paths	= {
		blocks: 'blocks/',
		devDir: 'app/',
		outputDir: 'build/'
	},
	settings = {
		outputStyle: 'sass', /* less || scss || sass || styl */
		columns: 12, /* number of grid columns */
		offset: '32px', /* gutter width px || % || rem */
		mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
		container: {
			maxWidth: '1170px', /* max-width оn very large screen */
			fields: '68px' /* side fields */
		},
		breakPoints: {
			lg: {
				width: '1100px', /* -> @media (max-width: 1100px) */
			},
			md: {
				width: '960px'
			},
			sm: {
				width: '780px',
				fields: '15px' /* set fields only if you want to change container.fields */
			},
			xs: {
				width: '560px'
			}
			/* 
			We can create any quantity of break points.
 
			some_name: {
				 width: 'Npx',
				 fields: 'N(px|%|rem)',
				 offset: 'N(px|%|rem)'
			}
			*/
		}
	}
	;
smartgrid('blocks/sass/', settings)

//	BROWSER SYNC
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		},
		notify: false
	})
	//browserSync.watch('app', browserSync.reload)
})

//	PUG
gulp.task('pug', function() {
	// return gulp.src('app/**.pug')
	return gulp.src([paths.blocks + '*.pug', '!' + paths.blocks + 'template.pug'])
		.pipe(plumber())
		.pipe(pug({
			pretty:true
		}))
		.on("error", notify.onError({
			title: "My Error"
		}))
		.pipe(gulp.dest(paths.devDir))
		.on('end', browserSync.reload);
})

//	SASS
gulp.task('sass', function() {
	return gulp.src(paths.blocks + '*.sass')
		//.pipe(srcmaps.init())
		.pipe(plumber())
		.pipe(sass())
		/*
		.pipe(prefix({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(gcmq())
		.pipe(csso())*/
		
		.on("error", notify.onError({
			title: "My Error"
		}))
		/*.pipe(srcmaps.write())*/
		.pipe(gulp.dest(paths.devDir + 'css/'))

		.pipe(browserSync.reload({
			stream:true
		}));
})

//	WATCH
gulp.task('watch', function(){
	gulp.watch(paths.blocks + '**/*.pug', gulp.series('pug'));
	gulp.watch(paths.blocks + '**/*.sass', gulp.series('sass')) ;
})

gulp.task('default', gulp.series(
	gulp.parallel('pug','sass'),
	gulp.parallel('watch','serve')
));
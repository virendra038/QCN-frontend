var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;
var config = require('./gulp.config');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');

gulp.task('browser-sync', function () {
   browserSync.init({
       server: {
           baseDir: "./",
           index: "index.html"
       },
       port:4211,
       files:['./index.html','./src/app/**/*.js','./src/app/*.js'],
       ghostMode:{
			clicks:true,
			location:true,
			forms:true,
			scroll:true
		},
		injectChanges:true,
		logFileChanges:true,
		logLevel:'debug',
		logPrefix:'gulp-patterns',
		notify:true,
		reloadDelay:1000
   });
   
   
});



gulp.task('html',function(){
	gulp.src('./src/*.html')
	.pipe(connect.reload());
});

// watch task 
gulp.task('watch',function(){
	gulp.watch(['./src/*.html'],['html']);
});

//injecting bower components automaticaly in index.html
gulp.task('wiredep',function(){
	var options = config.getWiredepDefaultOptions();
	return gulp.src(config.index)
			.pipe(wiredep(options))
			.pipe(gulp.dest('./'));
});

//injecting new js files in index.html

gulp.task('inject',function(){
	return gulp.src(config.index)
			.pipe(inject(gulp.src(config.alljs)))
			.pipe(gulp.dest('./'));
});

//injecting new css files in index.html

gulp.task('style',function(){
	return gulp.src(config.index)
			.pipe(inject(gulp.src(config.css)))
			.pipe(gulp.dest('./'));
});

//todo
// compass task to compile scss into css 
gulp.task('compass',function(){
	gulp.src(config.scss)
		.pipe(compass({
			config_file:'./config.rb',
			css:css_dir
			sass:sass_dir
		}))
		.pipe(gulp.dest(config.css))
});


//default task
gulp.task('default',[]);


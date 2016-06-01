var gulp = require('gulp');
var connect = require('gulp-connect');
var wiredep = require('wiredep').stream;
var config = require('./gulp.config');
var inject = require('gulp-inject');

gulp.task('connect',function(){
	connect.server({
		root:'src',
		port:4000,
		livereload:true
	})
});

gulp.task('html',function(){
	gulp.src('./src/*.html')
	.pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['./src/*.html'],['html']);
});

//injecting bower components automaticaly in index.html
gulp.task('wiredep',function(){
	var options = config.getWiredepDefaultOptions();
	return gulp.src(config.index)
			.pipe(wiredep(options))
			.pipe(gulp.dest('./src'));
});

//injecting new js files in index.html

gulp.task('inject',function(){
	return gulp.src(config.index)
			.pipe(inject(gulp.src(config.alljs)))
			.pipe(gulp.dest('./src'));
});

//default task
gulp.task('default',['connect','watch']);


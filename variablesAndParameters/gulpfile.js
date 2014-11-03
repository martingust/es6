var gulp = require('gulp');

var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('traceur', function(){
	return gulp.src('es6/*.js')
			.pipe(traceur({experimental: true, blockBinding: true }))
			.pipe(gulp.dest('es5'));
});

gulp.task('scripts', ['traceur'], function(){
	return gulp.src('es5/*js')
				.pipe(concat('all.js'))
				.pipe(gulp.dest(''))
});

gulp.task('watch', function(){
	gulp.watch('es6/*.js', ['traceur', 'scripts']);
});

gulp.task('default', ['traceur', 'scripts', 'watch']);
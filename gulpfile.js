let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autoprefixer', function() {
	return gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', gulp.parallel(['autoprefixer']))
})

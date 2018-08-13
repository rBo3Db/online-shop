var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var source = require('gulp-bundle');
gulp.task('sass', function() {
    return gulp.src('./styles/main.scss') 
        .pipe(sass())
        .pipe(gulp.dest('./app/artifacts'))
})

gulp.task('js', function() {
    gulp.src('./scripts/**/*.js')
    .pipe(concat('min.js'))
    .pipe(gulp.dest('./app/js/'))
});
gulp.task('browserify', function() { 
return browserify('./src/javascript/app.js') 
    .bundle() 
    .pipe(source('bundle.js')) 
    .pipe(gulp.dest('.app/build/')); 
});

gulp.task('watch', function(){
    gulp.watch('./scss/**/**/*.scss',['sass']);
    // another files to  watch
})
var browserSync = require('browser-sync');
gulp.task('browserSync', function() { 
	browserSync({ 
		server: { 	
			baseDir: "./" 
		}, 
		port: 8080, 
		open: true, 
		notify: false 
	}); 
});
var  htmlclean = require('gulp-htmlclean');
 
gulp.task('default', function() {
  return gulp.src('./app/*.html')
    .pipe(htmlclean({
        protect: /<\!--%fooTemplate\b.*?%-->/g,
        edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
      }))
    .pipe(gulp.dest('./app/'));
});

gulp.task('default', ['sass','js','watch', 'browserSync']);
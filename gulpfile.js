var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('browserify');
var browserSync = require('browser-sync');
source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
// var source = require('gulp-bundle');
gulp.task('html', function() {
    gulp.src('/*.html')
        .pipe(gulp.dest('./app/html'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('img', function() {
    gulp.src('.img/**/**/*.html')
        .pipe(gulp.dest('./app/img'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('sass', function() {
    return gulp.src('./styles/main.scss') 
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/artifacts'))
        .pipe(browserSync.reload({
            stream: true
        }));
})

gulp.task('js', function() {
    gulp.src('./scripts/**/*.js')
    .pipe(concat('min.js'))
    .pipe(minify())
    .pipe(gulp.dest('./app/js/'))
    .pipe(browserSync.reload({
        stream: true
    }));
});
gulp.task('browserify', function() { 
return browserify('./src/javascript/app.js') 
    .bundle() 
    .pipe(source('bundle.js')) 
    .pipe(gulp.dest('.app/build/'));
    
});

gulp.task('watch', function(){
    gulp.watch('./scss/**/**/*.scss',['sass']);
    gulp.watch('./*.html',['html']);
    
    // another files to  watch
})

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

// require('handlebars');

gulp.task('default', ['img','html','sass','js','watch', 'browserSync']);
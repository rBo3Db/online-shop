var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('browserify');
var browserSync = require('browser-sync');
source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
var  htmlclean = require('gulp-htmlclean');
// var source = require('gulp-bundle');
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('img', function() {
    gulp.src('./pics/**/**/*')
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

gulp.task('tpl', function() {
    gulp.src('./tpl/*')
    .pipe(gulp.dest('./app/tpl/'))
});  
gulp.task('js', function() {
    gulp.src('./scripts/**/*')
    // .pipe(minify())
    // .pipe(concat('min.js'))
    .pipe(gulp.dest('./app/scripts/'))
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});
// gulp.task('browserify', function() { 
// return browserify('./app/js/min-min.js') 
//     .bundle() 
//     .pipe(source('bundle.js')) 
//     .pipe(gulp.dest('./app/js/'));
// });

gulp.task('watch', function(){
    gulp.watch('./scss/**/**/*.scss',['sass']);
    gulp.watch('./*.html',['html']);
    gulp.watch('./pics/**/**/*',['img']);
    gulp.watch('./scripts/**/*',['js']);
    // another files to  watch
})

gulp.task('browserSync', function() { 
	browserSync({ 
		server: { 	
			baseDir: "./app/" 
		}, 
		port: 8080, 
		open: true, 
		notify: false 
	}); 
});

 
// gulp.task('htmlClean', function() {
//   return gulp.src('./app/*.html')
//     .pipe(htmlclean({
//         protect: /<\!--%fooTemplate\b.*?%-->/g,
//         edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
//       }))
//     .pipe(gulp.dest('./app/'));
// });

// require('handlebars');

gulp.task('default', ['sass','img','html','watch','tpl','js', 'browserSync']);
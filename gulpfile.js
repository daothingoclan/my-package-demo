var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default',[], function(){
     console.log("Command:\n   serve - run live reload server");
});

gulp.task('minify', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest'))
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['minify']);
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
 
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
});
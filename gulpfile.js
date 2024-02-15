const gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify');
    notify = require('gulp-notify'),
    zip = require('gulp-zip'),
    // ftp = require( 'vinyl-ftp' ),
    size = require('gulp-size');


//Html Task
gulp.task('html', function () {   
    return gulp.src(['./public/*html'])
            .pipe(gulp.dest('public'))
            .pipe(livereload())
            // .pipe(notify('HTML task is Done'));
}); 

// Css Task   
gulp.task('css', function () {   
    return gulp.src(['./resources/sass/**/*scss','./resources/sass/**/*css' ,'./resources/sass/app.scss']) 
    .pipe(sass())
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(prefix('last 2 versions'))
      .pipe(concat('main.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/ui/stylesheet'))
      .pipe(livereload())
      .pipe(size())
      .pipe(notify('css task is Done'));
});

// Js Task
gulp.task('js', function () {
	return gulp.src(['./resources/js/plugins/*js','./resources/js/script.js'])
        .pipe(concat('uicreep-minify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/ui/javascript'))
        .pipe(livereload())
        .pipe(size())
        .pipe(notify('js task is Done'));
});



// Compress Files 
// gulp.task('compress', function () {
//     return gulp.src('./public/**/*.*')
//             .pipe(zip('project.zip'))
//             .pipe(gulp.dest('.'))
//             .pipe(notify('Files is compressed'));
// });


// Watch Files 
gulp.task('watch', function () {
    require('./server');
    livereload.listen();
    // gulp.watch('./public/*html', ['html']);
    gulp.watch('./resources/sass/**/*scss', ['css']);
    gulp.watch('./resources/js/**/*js', ['js']);
    // gulp.watch('./public/**/*.*', ['deploy']);
    // gulp.watch('./public/**/*.*', ['compress']);
});

gulp.task('default', ['watch']);
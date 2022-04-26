const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
    gulp.src('../src/style.css')
    .pipe(sass({
        outputStyle: 'nested',
        sourceComments: true
    }))
    .pipe(autoprefixer({
        versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('../src/css'))
);


gulp.task('default', ()=> {
    gulp.watch('../src/style.css', ['sass']);
});

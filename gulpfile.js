const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

// --------------------------------------------- //
gulp.task('buildStyle', function() {
    gulp.src('./src/styles/font/*')
    .pipe(gulp.dest('./build/styles/font'))
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/styles'))
});
// ---------------------------------- //
gulp.task('minImages', function() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
});
// ---------------------------------- //
gulp.task('minHtml', function() {
    return gulp.src('./src/index.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest('./build'))
});
// ------------------------------------ //
gulp.task('compressJS', function() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    // .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
});
// ------------------------------------------------ //
gulp.task('build', gulp.series(
    function(done) {console.log('building'), done()},
    gulp.parallel(
        'buildStyle',
        'minImages',
        'minHtml',
        'compressJS'
    ),
    function(done) {console.log('build complete'), done()}
));
// default | watcher ------------------------------------------------------------ //
gulp.task('default', function() {
    gulp.watch('./src/styles/**/*', {ignoreInitial: false}, gulp.series('buildStyle')),
    gulp.watch('./src/images/**/*', {ignoreInitial: false}, gulp.series('minImages')),
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.series('minHtml')),
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series('compressJS'))
})

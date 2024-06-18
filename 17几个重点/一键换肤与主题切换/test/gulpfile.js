const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const cssWrap = require('gulp-css-wrap')

const customThemeName = '.theme-summer'

gulp.task('default', function () {
    return gulp.src(path.resolve('./index.css'))
        .pipe(cssWrap({selector: customThemeName}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
})

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    del         = require('del'),
    merge       = require('merge-stream'),
    runSequence = require('run-sequence');

// Script
gulp.task('lint', function () {
    return gulp.src('lib/scripts/*')
        .pipe($.eslint({
            useEslintrc: true,
            rules: {
                'no-console': 2
            }
        }))
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError());
});

gulp.task('scripts', ['lint'], function () {
    return gulp.src(['index.js'])
        .pipe($.umd({
            exports: function () {
                return 'disableScroll';
            },
            namespace: function () {
                return 'disableScroll';
            }
        }))
        .pipe($.replace('module.exports = disableScroll;\n\n', ''))
        .pipe($.rename('disable-scroll.js'))
        .pipe(gulp.dest('dist'))
        .pipe($.uglify())
        .pipe($.rename('disable-scroll.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
    return del(['dist/*'], cb);
});

gulp.task('build', function (cb) {
    process.env.NODE_ENV = 'production';
    runSequence('clean', 'scripts', cb);
});

gulp.task('default', ['build']);

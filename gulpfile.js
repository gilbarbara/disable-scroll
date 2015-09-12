var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    del         = require('del'),
    exec        = require('child_process').exec,
    merge       = require('merge-stream'),
    runSequence = require('run-sequence'),
    vinylPaths  = require('vinyl-paths');

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

gulp.task('get-commit', function (cb) {
    exec('git log -1 --pretty=%s && git log -1 --pretty=%b', function (err, stdout, stderr) {
        var parts = stdout.replace('\n\n', '').split('\n');

        commitMessage = parts[0];
        if (parts[1]) {
            commitMessage += ' — ' + parts[1];
        }

        cb(err);
    });
});

gulp.task('gh-pages', function () {

    var clean,
        push;

    clean = gulp.src('.publish/.DS_Store')
        .pipe(vinylPaths(del));

    push = gulp.src([
            'index.html',
            'dist/**/*'
        ], { base: './' })
        .pipe($.ghPages({
            branch: 'gh-pages',
            message: commitMessage,
            force: true,
            push: false
        }));

    return merge(clean, push);
});

gulp.task('deploy-pages', function (cb) {
    runSequence(['build', 'get-commit'], 'gh-pages', cb);
});

gulp.task('serve', function () {
    gulp.watch('index.js', ['build']);
});

gulp.task('build', function (cb) {
    process.env.NODE_ENV = 'production';
    runSequence('clean', 'scripts', cb);
});

gulp.task('default', ['build']);

'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');
const nodemon = require('nodemon');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');

const paths = {
  client: 'client/',
  server: 'bin/www',
  publicFiles: 'public/**/*.*',
  serverScripts: [
    'app.js',
    'routes/*.js',
    'views/*.js',
    'middlewares/*.js'],
  dist: 'public'
};

gulp.task('clean', () => {
  del([`${paths.dist}/*.js`]);
});

gulp.task('nodemon', callback => {
  let called = false;
return nodemon({
    script: paths.server,
    watch: [paths.serverScripts]
  }).on('start', () => {
    if (!called) {
  called = true;
  return callback();
}
}).on('restart', () => {
  gutil.log(gutil.colors.green('Nodemon restarted'));
setTimeout(() => {
  browserSync.reload({ stream: false });
}, 1000);
});
});

gulp.task('serve', ['nodemon', 'vendor-bundle', 'bundle'], () => {
  browserSync.init({
  proxy: "http://localhost:3000",
  files: [paths.publicFiles],
  notify: false,
  port: 5000
});
});

gulp.task('vendor-bundle', ['clean'], () => {
  const b = browserify();

b.bundle()
  .on('error', err => {
  gutil.log(gutil.colors.red(err.toString()));
})
.pipe(source('vendor.js'))
  .pipe(gulp.dest(paths.dist));
});

gulp.task('bundle', ['clean'], () => {
  const b = browserify({
    extensions: ['js'],
    plugin: [watchify],
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  });

b.transform(babelify, { presets: ['es2015'] });

function bundle() {
  const start = Date.now();

  b.bundle()
    .on('error', err => {
    gutil.log(gutil.colors.red(err.toString()));
})
.on('end', () => {
    gutil.log(gutil.colors.green(`Finished bundling in, ${Date.now() - start} ms.`));
})
.pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.dist));
}

b.on('update', bundle);
return bundle();
});

gulp.task('default', ['vendor-bundle', 'bundle', 'serve']);
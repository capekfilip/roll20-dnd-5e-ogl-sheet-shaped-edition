import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import * as config from '../config';

function errorHandler(error) {
  notify.onError({
    title: 'Sass error!',
    message: '<%= error.message %>',
    sound: 'Beep',
  })(error);

  return this.emit('end');
}

export default () => {
  const stream = gulp.src([
    '*.scss',
  ], {
    cwd: config.src.styles,
  });

  return stream
    .pipe(plumber({
      errorHandler,
    }))
    .pipe(gulpSass({
      outputStyle: 'nested',
      precision: 10,
    }))
    .pipe(gulp.dest(config.dist.styles));
};

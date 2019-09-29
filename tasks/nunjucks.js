import gulp from 'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import * as config from '../config';

function errorHandler(error) {
  notify.onError({
    title: 'Nunjucks error!',
    message: '<%= error.message %>',
    sound: 'Beep',
  })(error);

  return this.emit('end');
}

export default () => {
  const stream = gulp.src([
    '*.njk',
  ], {
    cwd: config.src.templates,
  });

  return stream
    .pipe(plumber({
      errorHandler,
    }))
    .pipe(nunjucksRender({
      path: config.src.templates,
      data: config,
      envOptions: {
        trimBlocks: true,
        lstripBlocks: true,
        tags: {
          variableStart: '<$',
          variableEnd: '$>',
          commentStart: '<#',
          commentEnd: '#>',
        },
      },
    }))
    .pipe(gulp.dest(config.dist.html));
};

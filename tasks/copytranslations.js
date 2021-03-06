import gulp from 'gulp';

import * as config from '../config';

export default () => {
  const stream = gulp.src([
    'ogl/translations/*',
  ], {
    cwd: config.basePath.src,
  });

  return stream
    .pipe(gulp.dest(config.dist.translations));
};

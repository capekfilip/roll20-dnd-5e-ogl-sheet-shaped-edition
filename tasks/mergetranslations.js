import gulp from 'gulp';
import merge from 'gulp-merge-json';

import * as config from '../config';

export default () => {
  const stream = gulp.src([
    'ogl/translation.json',
    'translations/translation.json',
  ], {
    cwd: config.basePath.src,
  });

  return stream
    .pipe(merge({
      fileName: 'translation.json',
    }))
    .pipe(gulp.dest(config.dist.translations));
};

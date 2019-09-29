import gulp from 'gulp';
import urlPrefix from 'gulp-css-url-prefix';

import * as config from '../config';

export default () => {
  const stream = gulp.src([
    '**/*.css',
  ], {
    cwd: config.dist.styles,
  });

  return stream
    .pipe(urlPrefix('https://app.roll20.net', '/images/dndstyling'))
    .pipe(gulp.dest(config.dist.styles));
};

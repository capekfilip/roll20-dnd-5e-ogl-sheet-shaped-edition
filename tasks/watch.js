import gulp from 'gulp';

import sass from './sass';
import nunjucks from './nunjucks';

import * as config from '../config';

const watch = () => {
  gulp.watch(`${config.src.styles}**/*.scss`, gulp.series(gulp.parallel(sass, nunjucks)));
  gulp.watch(`${config.src.templates}**/*.njk`, gulp.series(nunjucks));
  gulp.watch([
    `${config.basePath.src}**/*`,
    `!${config.src.styles}**/*`,
    `!${config.src.templates}**/*`,
  ]);
};

export default gulp.parallel(
  watch,
);

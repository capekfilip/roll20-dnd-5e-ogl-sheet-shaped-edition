import gulp from 'gulp';

import clean from './clean';
import sass from './sass';
import cssurl from './cssurl';
import nunjucks from './nunjucks';
import copytranslations from './copytranslations';

export default gulp.series(
  clean,
  gulp.parallel(
    sass,
    nunjucks,
    copytranslations,
  ),
  cssurl,
);

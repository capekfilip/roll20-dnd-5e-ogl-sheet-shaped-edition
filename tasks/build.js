import gulp from 'gulp';

import clean from './clean';
import sass from './sass';
import cssurl from './cssurl';
import nunjucks from './nunjucks';
import copyconfig from './copyconfig';
import mergetranslations from './mergetranslations';
// import copytranslations from './copytranslations';

export default gulp.series(
  clean,
  gulp.parallel(
    sass,
    nunjucks,
    copyconfig,
    mergetranslations,
    // copytranslations,
  ),
  cssurl,
);

import gulp from 'gulp';

import build from './build';
import watch from './watch';

export default gulp.series(
  build,
  watch,
);

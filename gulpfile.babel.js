import gulp from 'gulp';

import defaultTask from './tasks/default';
import buildTask from './tasks/build';
import updateOglTask from './tasks/updateogl';

gulp.task('default', defaultTask);
gulp.task('build', buildTask);
gulp.task('updateogl', updateOglTask);

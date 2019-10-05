import gulp from 'gulp';

import defaultTask from './tasks/default';
import buildTask from './tasks/build';

gulp.task('default', defaultTask);
gulp.task('build', buildTask);

import gulp from 'gulp';
import rename from 'gulp-rename';

import * as config from '../config';

const html = () => gulp.src([
  '5th Edition OGL by Roll20.html',
], {
  cwd: config.basePath.ogl,
})
  .pipe(rename('sheet.html'))
  .pipe(gulp.dest(config.src.ogl));

const css = () => gulp.src([
  '5th Edition OGL by Roll20.css',
], {
  cwd: config.basePath.ogl,
})
  .pipe(rename('style.css'))
  .pipe(gulp.dest(config.src.ogl));

const translations = () => gulp.src([
  'translations/*',
], {
  cwd: config.basePath.ogl,
})
  .pipe(gulp.dest(config.src.oglTranslations));

const copy = () => gulp.src([
  '_translation.json',
  'sheet.json',
], {
  cwd: config.basePath.ogl,
})
  .pipe(gulp.dest(config.src.ogl));

export default gulp.parallel(
  html,
  css,
  translations,
  copy,
);

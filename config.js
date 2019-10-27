export const basePath = {
  src: 'src/',
  dist: 'dist/',
  ogl: '../roll20-character-sheets/5th Edition OGL by Roll20/',
};

export const src = {
  images: `${basePath.src}img/`,
  styles: `${basePath.src}css/`,
  templates: `${basePath.src}tpl/`,
  ogl: `${basePath.src}ogl/`,
  oglTranslations: `${basePath.src}ogl/translations/`,
};

export const dist = {
  images: `${basePath.dist}img/`,
  styles: `${basePath.dist}css/`,
  html: `${basePath.dist}html/`,
  translations: `${basePath.dist}translations/`,
  config: `${basePath.dist}config/`,
};

export const ogl = {
  translations: `${basePath.ogl}translations/`,
};

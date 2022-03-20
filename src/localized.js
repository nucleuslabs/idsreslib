import * as icons from './icons';
import colors from './colors';
import * as languages from '../locales';
// import * as en from '../locales/en';
//
// const languages = require.context('../locales', true, /\.\/.*\.js$/);

function localized(obj, type, lang = 'en') {
  const translation = languages[lang][type] || languages.en[type];
  return Object.entries(obj).map(([key, value]) => [
    key,
    value,
    translation[key],
  ]);
}

export function localizedIcons(lang) {
  return localized(icons, 'icons', lang);
}

export function localizedColors(lang) {
  return localized(colors, 'colors', lang);
}

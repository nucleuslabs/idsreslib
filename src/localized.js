import * as icons from './icons';
import colors from './colors';
import groups from './groups';
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

export function localizedGroups(lang) {
  return localized(groups, 'groups', lang).map(([key, value, trans]) => [
    key,
    value.map((iconKey) => [
      iconKey,
      icons[iconKey],
      (languages[lang].icons[iconKey] || languages.en.icons[iconKey]),
    ]),
    trans,
  ]);
}

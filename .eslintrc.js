module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off', // disabled because it doesn't work with createComponent
    'linebreak-style': 'off',
  },
  ignorePatterns: [
    '*.test.js',
    'dist/*.js',
  ],
};

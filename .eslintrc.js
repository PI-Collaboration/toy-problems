module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    semi: [2, 'always']
  }
};

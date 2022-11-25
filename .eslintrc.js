module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'es6'
  },
  rules: {
    semi: [2, 'always']
  }
};

module.exports = {
  extends: ['standard', 'plugin:unicorn/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  ignorePatterns: ['**/dist/*'],
  plugins: ['svelte3', 'security'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
    },
  ],
  rules: {
    'unicorn/filename-case': 0,
    'import/first': 0,
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 1 }],
  },
}

const prettierrc = require('./.prettierrc.js')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'no-var': 'error',
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    '@typescript-eslint/no-unused-vars': 1,
    "@typescript-eslint/no-floating-promises": 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': [
      'error',
      prettierrc // if change this, have to reboot eslint.
    ]
  }
}

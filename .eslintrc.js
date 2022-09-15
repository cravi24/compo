module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  globals: {
    JSX: true,
  },
  rules: {
    'no-undef': 'warn',
    'comma-dangle': ['error'],
    'max-len': ['error', { code: 150, comments: 150, ignorePattern: '^import\\W.*' }],
    camelcase: 'off',
    // base rule must be disabled as it can report incorrect errors even if corresponding @typescript-eslint is set
    // @see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-unresolved': 0,
    'import/first': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.tsx'],
      },
    ],
    'arrow-body-style': 'off',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    // react specific rules
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};

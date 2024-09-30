module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  env: {
    'react-native/react-native': true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-require-imports': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/split-platform-components': 'warn',
    'react/no-unescaped-entities': 0,
  },
};

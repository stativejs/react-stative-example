module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: 'module'
  },
  plugins: [
    "jsx-a11y"
  ],
  extends: [
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ], // activate vue related rules
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { 'singleQuote': true }]
  },
};
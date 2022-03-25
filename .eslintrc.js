module.exports = {
  extends: ['alloy', 'alloy/typescript', 'plugin:jest/recommended'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
  },
};

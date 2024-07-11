// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    'react-hooks/exhaustive-deps': 'warn',
    // Ensures 'any' will be used only as a last resort
    '@typescript-eslint/no-explicit-any': 'error'
  },
  ignorePatterns: ['node_modules/', 'android/', 'ios/']
};

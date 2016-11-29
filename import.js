module.exports = {
  plugins: ['import'],
  rules: {
    'import/extensions': [2, 'never'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': false,
    }],
  },
}

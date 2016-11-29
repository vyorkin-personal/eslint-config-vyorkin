module.exports = {
  plugins: ['prefer-object-spread'],
  rules: {
    'no-duplicate-imports': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, {
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
    semi: ['error', 'always'],
    'new-cap': [2, {
      capIsNew: false,
      newIsCap: true,
    }],
    'arrow-parens': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'after'],
    'prefer-object-spread/prefer-object-spread': 2,
  },
  globals: {
    NODE_ENV: true,
  },
};

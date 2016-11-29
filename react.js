module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  rules: {
    'react/prop-types': 0, // yannickcr/eslint-plugin-react/issues/453
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js'] }],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 3 }],
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-comp': [2, {
      'order': [
        'type-annotations',
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
  },
  globals: {
    React: true,
  },
}

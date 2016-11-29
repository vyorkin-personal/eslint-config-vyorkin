module.exports = {
  extends: 'plugin:flowtype/recommended',
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
  },
};

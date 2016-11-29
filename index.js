module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb/base',
    './base.js',
    './comments.js',
    './import.js',
    './promise.js',
    './fp.js',
  ],
  globals: {
    '__COMMITHASH__': true,
    '__ENV__': true,
    '__DEVELOPMENT__': true,
    '__PRODUCTION__': true,
  }
}

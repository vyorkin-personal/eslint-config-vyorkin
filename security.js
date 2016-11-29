module.exports = {
  plugins: ['security'],
  rules: {
    'security/detect-unsafe-regex': 1,
    'security/detect-non-literal-regexp': 1,
    'security/detect-non-literal-require': 1,
    'security/detect-non-literal-fs-filename': 1,
    'security/detect-eval-with-expression': 1,
    'security/detect-pseudoRandomBytes': 1,
    'security/detect-possible-timing-attacks': 1,
    'security/detect-no-csrf-before-method-override': 1,
    'security/detect-buffer-noassert': 1,
    'security/detect-child-process': 1,
    'security/detect-disable-mustache-escape': 1,
    'security/detect-object-injection': 1,
    'security/detect-new-buffer': 1,
  },
};

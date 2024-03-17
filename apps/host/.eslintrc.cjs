module.exports = {
  extends: ['plugin:ezlint/react'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^mf_'] }],
  },
};

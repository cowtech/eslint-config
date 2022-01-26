module.exports = {
  extends: ['standard'],
  rules: {
    curly: [2, 'all'],
    'no-return-await': 2,
    'space-before-function-paren': 0 // This is inserted to make this compatible with prettier.
  },
  reportUnusedDisableDirectives: true
}

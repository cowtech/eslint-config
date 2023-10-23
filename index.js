module.exports = {
  extends: ['standard'],
  rules: {
    curly: [2, 'all'],
    'import/extensions': [2, 'always', { ignorePackages: true }], // This is required for proper ESM use
    'import/order': [
      2,
      {
        groups: [['builtin', 'external', 'type'], 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'no-return-await': 2, // Do not create useless promises
    'space-before-function-paren': 0 // This is inserted to make this compatible with prettier.
  },
  plugins: ['import'],
  reportUnusedDisableDirectives: true
}

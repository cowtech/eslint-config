// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['standard', 'plugin:unicorn/recommended'],
  rules: {
    curly: [2, 'all'],
    'import/extensions': [2, 'always', { ignorePackages: true }], // This is required for proper ESM use
    'import/order': [
      2,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'no-return-await': 2, // Do not create useless promises
    'space-before-function-paren': 0, // This is inserted to make this compatible with prettier.
    'unicorn/custom-error-definition': 2,
    'unicorn/empty-brace-spaces': 0, // This is inserted to make this compatible with prettier.
    'unicorn/expiring-todo-comments': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/filename-case': [2, { cases: { camelCase: true, kebabCase: true } }],
    'unicorn/no-unsafe-regex': 0,
    'unicorn/no-unused-properties': 2,
    'unicorn/prefer-at': 2,
    'unicorn/prefer-string-replace-all': 2,
    // Disable unwanted plugin:unicorn/recommended rules
    'unicorn/import-style': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-for-loop': 0,
    'unicorn/no-null': 0,
    'unicorn/no-process-exit': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/prevent-abbreviations': 0
  },
  plugins: ['unicorn', 'import'],
  reportUnusedDisableDirectives: true
}

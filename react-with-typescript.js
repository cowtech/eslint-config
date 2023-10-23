module.exports = {
  extends: ['./typescript.js', 'standard-jsx', '@mirismaili/standard-react'],
  env: {
    browser: true
  },
  rules: {
    'import/extensions': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-no-bind': [2, { allowFunctions: true }],
    'react/no-string-refs': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    '@typescript-eslint/no-misused-promises': 0
  }
}

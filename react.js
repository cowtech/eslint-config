module.exports = {
  extends: ['./index.js', 'standard-jsx', 'standard-react'],
  env: {
    browser: true
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-no-bind': [2, { allowFunctions: true }],
    'react/no-string-refs': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0
  }
}

module.exports = {
  extends: ['./typescript.js', 'standard-jsx', 'standard-react'],
  env: {
    browser: true
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/no-string-refs': 2,
    'react/prop-types': 0,
    'react/jsx-boolean-value': [2, 'always']
  }
}

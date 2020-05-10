/*
 * This file is part of the @cowtech/eslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

module.exports = {
  extends: ['./typescript.js', 'standard-jsx', 'standard-react'],
  env: {
    browser: true
  },
  rules: {
    'jsx-no-string-ref': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-boolean-value': [2, 'always'],
    'react/prop-types': 0
  }
}

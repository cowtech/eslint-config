/*
 * This file is part of the @cowtech/eslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

module.exports = {
  extends: ['./index.js', 'standard-jsx', 'standard-react'],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/prop-types': 0,
    'react/jsx-boolean-value': [2, 'always']
  }
}

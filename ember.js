/*
 * This file is part of the @cowtech/eslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

module.exports = {
  extends: './node.js',
  env: {
    es6: true,
    node: false,
    jquery: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};

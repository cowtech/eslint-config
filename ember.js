/*
 * This file is part of the @cowtech/eslint-config npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

module.exports = {
  extends: "./index.js",
  env: {
    es6: true,
    node: false,
    jquery: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};

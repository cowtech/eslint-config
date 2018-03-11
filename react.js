/*
 * This file is part of the @cowtech/eslint-config npm package. Copyright (C) ERRORDISABLEDWARN7 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

const DISABLED = 0;
const ERROR = 2;

module.exports = {
  extends: './node.js',
  env: {
    es6: true,
    node: false,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // The following rules need eslint-plugin-react to be added in the devDependencies.
  rules: {
    'react/display-name': DISABLED,
    'react/forbid-foreign-prop-types': DISABLED,
    'react/no-array-index-key': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-danger': DISABLED,
    'react/no-danger-with-children': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': ERROR,
    'react/no-did-update-set-state': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': ERROR,
    'react/no-render-return-value': ERROR,
    'react/no-set-state': DISABLED,
    'react/no-string-refs': ERROR,
    'react/no-unescaped-entities': ERROR,
    'react/no-unknown-property': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/prefer-es6-class': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': DISABLED,
    'react/react-in-jsx-scope': DISABLED,
    'react/require-default-props': DISABLED,
    'react/require-optimization': DISABLED,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': DISABLED,
    'react/sort-prop-types': DISABLED,
    'react/style-prop-object': DISABLED,
    'react/void-dom-elements-no-children': ERROR,

    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-curly-spacing': [ERROR, 'never'],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-filename-extension': DISABLED,
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    'react/jsx-handler-names': [ERROR],
    'react/jsx-indent': [ERROR, ERROR],
    'react/jsx-indent-props': [ERROR, ERROR],
    'react/jsx-key': ERROR,
    'react/jsx-max-props-per-line': DISABLED,
    'react/jsx-no-bind': DISABLED,
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': DISABLED,
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-undef': DISABLED,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-sort-props': DISABLED,
    'react/jsx-tag-spacing': [ERROR, {closingSlash: 'never', beforeSelfClosing: 'never', afterOpening: 'never'}],
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/jsx-wrap-multilines': ERROR
  },
  plugins: [
    'react'
  ]
};

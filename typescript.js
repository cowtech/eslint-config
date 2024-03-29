module.exports = {
  extends: ['./index.js', 'plugin:import/typescript', 'standard-with-typescript'],
  rules: {
    curly: [2, 'all'],
    '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/space-before-function-paren': 0, // This is inserted to make this compatible with prettier.
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/typedef': [
      2,
      {
        parameter: true,
        memberVariableDeclaration: true,
        propertyDeclaration: true
      }
    ]
  },
  reportUnusedDisableDirectives: true
}

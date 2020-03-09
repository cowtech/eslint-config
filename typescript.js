module.exports = {
  extends: ['standard-with-typescript'],
  rules: {
    curly: [2, 'all'],
    '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/no-non-null-assertion': 0,
    /*
      This is inserted to make this compatible with prettier.
      Once https://github.com/prettier/prettier/issues/3845 and https://github.com/prettier/prettier/issues/3847 are solved this might be not needed any more.
    */
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/strict-boolean-expressions': [2, { allowNullable: true }],
    '@typescript-eslint/typedef': [
      2,
      {
        arrowParameter: true,
        parameter: true,
        memberVariableDeclaration: true,
        propertyDeclaration: true
      }
    ]
  }
}

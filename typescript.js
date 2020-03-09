module.exports = {
  extends: ['standard-with-typescript'],
  rules: {
    /*
      This is inserted to make this compatible with prettier.
      Once https://github.com/prettier/prettier/issues/3845 and https://github.com/prettier/prettier/issues/3847 are solved this might be not needed any more.
    */
    '@typescript-eslint/space-before-function-paren': 0,
    curly: [2, 'all'],
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

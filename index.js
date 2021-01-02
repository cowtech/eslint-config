module.exports = {
  extends: ['standard'],
  rules: {
    curly: [2, 'all'],
    /*
      This is inserted to make this compatible with prettier.
      Once https://github.com/prettier/prettier/issues/3845 and https://github.com/prettier/prettier/issues/3847 are solved this might be not needed any more.
    */
    'space-before-function-paren': 0
  }
}

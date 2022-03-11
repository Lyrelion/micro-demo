module.exports = {
  root: true, // 意思是到头啦，不要再向上找了
  env: { // 代码将会在哪些环境中运行。每个环境都附带了一组特定的预定义全局变量，如 browser 中有 window，document等，添加后可以直接在代码中使用，而不报错。
    browser: true,
    node: true,
    es2020: true,
  },
  extends: 'airbnb-base',  // 使用airbnb风格
  parserOptions: {
    ecmaVersion: 2020, // 启用ES2020的语法
  },
  rules: {
    'no-console': 'off', // 不使用console
    'no-debugger': 'off', // 不使用debugger
  },
};
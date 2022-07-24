module.exports = {
  // 解析选项
  // parserOptions: {
  //   ecmaVersion: 6, // es 语法版本
  //   sourceType: "module", // es 模块化
  //   ecmaFeatures: {
  //     // es 其他特性
  //     jsx: true, // 启用 jsx
  //   },
  // },

  // 具体检查规则
  // rules: {
  //   semi: "error", // 禁止使用分号
  //   "array-callback-return": "warn", // 强制数组方法的回调函数中有 return 语句，否则警告
  //   "default-case": [
  //     "warn", // 要求 switch 语句中有 default 分支，否则警告
  //     { commentPattern: "^no default$" }, // 允许在最后注释 no default, 就不会有警告了
  //   ],
  //   eqeqeq: [
  //     "warn", // 强制使用 === 和 !==，否则警告
  //     "smart", // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
  //   ],
  // },

  // 继承其他规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },

  // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
};

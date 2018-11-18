module.exports = {
  root: true, // 停止在父级目录中寻找
  parser: 'babel-eslint', // 指定解析器， Babel-ESLint：对Babel解析器的包装，使其能够与ESLint兼容
  // 指定你想要支持的 JavaScript 语言选项
  parserOptions: {
    ecmaVersion: 7, // 启用 ES7 语法支持
    sourceType: 'module', // 代码是 ECMAScript 模块
    // 想使用的额外的语言特性
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
  // 环境定义了一组预定义的全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 额外支持新的 ES6 全局变量, 同时会自动启用 ES6 语法支持
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  extends: 'airbnb',
  rules: {
    'indent': ['error', 2], // 缩进2个空格
    'no-mixed-operators': [0], // 允许混合使用不同的操作符
    'no-param-reassign': [0], // 允许对 function 的参数进行重新赋值
    'no-underscore-dangle': [0], // 允许标识符中有悬空下划线
    'no-bitwise': [0], // 允许按位运算符
    'no-console': [0], // 允许 console
    'no-plusplus': [0], // 允许一元操作符 ++ 和 --
    'no-useless-computed-key': [0], // 这条规则允许使用不必要的计算属性
    'space-before-function-paren': ['error', 'always'], // 要求函数圆括号之前有一个空格
    'class-methods-use-this': 'off', // 不强制类方法使用 this
    'prefer-destructuring': [0],
    'global-require': [0],
    // 使用拖尾逗号
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'object-curly-newline': [0],
    'import/no-unresolved': [0],
    'import/no-named-as-default': [0],
    'import/no-named-as-default-member': [0],
    'import/no-mutable-exports': [0],
    'import/prefer-default-export': [0],
    'import/no-dynamic-require': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'react/no-array-index-key': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/require-default-props': [0],
    'react/destructuring-assignment': [0]
  },
}

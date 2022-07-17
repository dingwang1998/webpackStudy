const path = require("path");

module.exports = {
  // 入口
  entry: "./src/main.js",

  // 输出
  output: {
    // path: 文件输出的目录，必须是绝对路径
    // path.resolve()当前文件所在目录
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },

  // 插件
  plugins: [],

  // 模式
  mode: "development",
};

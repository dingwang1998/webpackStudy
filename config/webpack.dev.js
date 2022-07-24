const path = require("path");
const ESLintWebPackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口
  entry: "./src/main.js",

  // 输出
  output: {
    // path: 文件输出的目录，必须是绝对路径
    // path.resolve()当前文件所在目录
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    filename: "static/js/main.js",
    // clean: true, // 开发模式没有输出，不需要清空输出结果
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
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 图片大小于10kb会被转换成base64
          },
        },
        generator: {
          // 将图片文件输出到static/imgs 目录下
          // 将图片文件命名为[hash:8][ext][query]
          // [hash: 8]: hash 值的前8位
          // [ext]: 文件扩展名
          // [query]: 图片文件的 query 参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?|map4|map3|avi)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  // 插件
  plugins: [
    new ESLintWebPackPlugin({
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],

  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },

  // 模式
  mode: "development",
};

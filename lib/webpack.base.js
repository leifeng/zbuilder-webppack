const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const glob = require("glob");
const path = require("path");

const projectRoot = process.cwd();

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(projectRoot, "./src/*/index.js"));
  entryFiles.forEach((item) => {
    const pagaName = item.match(/src\/(.*)\/index\.js/)[1];
    entry[pagaName] = item;

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(projectRoot, `./src/${pagaName}/index.html`),
        filename: `${pagaName}.html`,
        chunks: ["commons", pagaName],
        inject: true,
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugins,
  };
};
const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.join(projectRoot, "dist"),
    filename: "[name]_[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader"],
      },
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
          {
            loader: "px2rem-loader",
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      {
        test: /\.png/,
        use: [
          {
            loader: "file-loader",
            options: {
              // limit: 10240,
              name: "[name]_[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.otf/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    function errorInfo() {
      this.hooks.done.tap("done", (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length) {
          process.exit(1);
        }
      });
    },
  ].concat(htmlWebpackPlugins),
  stats: "errors-only",
};

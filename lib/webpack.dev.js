const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: "production",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 3000,
    open: true,
    stats: "errors-only",
  },
};
module.exports = merge(baseConfig, devConfig);

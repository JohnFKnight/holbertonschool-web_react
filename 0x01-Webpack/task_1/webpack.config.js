const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

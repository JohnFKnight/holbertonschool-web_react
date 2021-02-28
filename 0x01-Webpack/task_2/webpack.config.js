const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "production",
  module: {
    rules: [
      {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

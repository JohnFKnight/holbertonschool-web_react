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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

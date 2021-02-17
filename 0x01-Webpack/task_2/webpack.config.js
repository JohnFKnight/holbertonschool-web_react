const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "production",
  module: {
    rules: [
      {
	      test: /\.css$/,
      	use: ['style-loader', 'css-loader'],
      },
      {
      	test: /\.(png|svg|jpg|jpeg|gif)$/i,
      	type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

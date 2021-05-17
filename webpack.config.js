const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};


module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: './js/app.bundle.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/app.bundle.[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  }
};
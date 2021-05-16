const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'app.bundle.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      inject: 'body',
      filename: '../index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
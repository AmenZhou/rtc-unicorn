const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'app.bundle.js',
  },
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
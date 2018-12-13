const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/app.js'
  },
/*   plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ], */
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
};
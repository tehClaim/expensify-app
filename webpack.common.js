const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app.js'
  },
   plugins: [
    new CleanWebpackPlugin(['public/*']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ], 
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader",
        "sass-loader"
      ]
    }]
  }
};
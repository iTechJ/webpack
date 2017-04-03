'use strict';
let path = require('path');

let port = 8080;
let srcPath = path.join(__dirname, '/../src');
let webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

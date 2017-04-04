'use strict';
let path = require('path');

let port = 8080;
let srcPath = path.join(__dirname, '/../src');
let webpack = require('webpack');
let publicPath = '/assets/';

module.exports = {
  watch: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/main.js'
  ],
  devtool: 'eval',
  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    hot: true,
    port: port,
    publicPath: publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
        test: /\.(js)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.sass/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader?outputStyle=expanded&indentedSyntax"
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader?limit=100000&mimetype=application/font-woff'
        }
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};

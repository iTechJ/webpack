'use strict';
const path = require('path');
const publicPath = '/assets/';

module.exports = {
  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: 'bundle.js',
	publicPath: '/assets/'
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
      },
	  {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
	    options: {
          limit: 25000
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]'
          }
        }
	  }
    ]
  }
};

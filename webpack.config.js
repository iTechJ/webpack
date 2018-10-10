const path = require('path');
const webpack = require('webpack');

const port = 9000;

module.exports = {
  watch: true,
  entry: [
    './src/index.js',
	'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000'
  ],
  devtool: 'eval',
  mode : 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist/assets'),
	publicPath: '/assets/'
  },
  devServer: { //Webpack dev server configuration
    contentBase: path.resolve(__dirname, './dist'),
    hot: true, //Enables HMR
    port: port,
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //Enables HMR
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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(sass)/,
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

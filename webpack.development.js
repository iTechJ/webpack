'use strict';
const baseConfig = require('./webpack.base.js');
const _ = require('lodash');
const path = require('path');
const port = 9000;
const webpack = require('webpack');
const publicPath = '/assets/';

const config = _.merge({
  watch: true,
  entry: [
    './src/index.js',
	  'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000'
  ],
  mode : 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: port,
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.ProvidePlugin({ // Automatically loads appropriate module of left-hand identifiers found in the code
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(), //You're already familiar with this plugin - it enables Hot Module Reloading feature
    new webpack.NoEmitOnErrorsPlugin() //stops the build if there is an error
  ]
}, baseConfig);

config.module.rules.push({
  test: /\.(js)$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  exclude: /node_modules/,
  options: {
    emitWarning: true
  }
});
/* Don't forget to export configuration! */
module.exports = config;

'use strict';
const baseConfig = require('./webpack.base.js');
const _ = require('lodash');
const webpack = require('webpack');

const config = _.merge({
  entry: [
    './src/index.js'
  ],
  mode : 'production',
  cache: false,
  mode: 'production',
  devtool: 'source-map',
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: []
  }
}, baseConfig);

/* Don't forget to export configuration! */
module.exports = config;

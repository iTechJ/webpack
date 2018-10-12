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
  devtool: 'source-map', //Do not used Eval in production builds!
  plugins: [
    new webpack.ProvidePlugin({//Automatically loads appropriate module if left-hand identifier found in the code
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), //Do not load some parts of a module. Moment.js is a JS library for date formatting.
                                                           // It has large amount of locale-specific code, which often isn't needed.
    new webpack.NoEmitOnErrorsPlugin() //stops the build if there is an error
  ],
  module: {
    rules: []
  }
}, baseConfig);

/* Don't forget to export configuration! */
module.exports = config;

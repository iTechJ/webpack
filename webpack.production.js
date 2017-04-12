'use strict';
const baseConfig = require('./webpack.base.js');
const _ = require('lodash');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = _.merge({
  entry: [
    './src/index.js'
  ],
  mode : 'production',
  cache: false,
  mode: 'production',
  devtool: 'source-map', //Do not used Eval in production builds!
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({ //Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
		extractComments: false,
		sourceMap: true,
		uglifyOptions: {
		  ecma: 8,
          compress: {
            unused: true,
            dead_code: true, // big one--strip code that will never execute
            warnings: false, // good for prod apps so users can't peek behind curtain
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            drop_console: true, // strips console statements
            sequences: true,
            booleans: true
          }
        },
		exclude: [/\.min\.js$/gi] // skip pre-minified libs
	  })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ //replaces condition with it's value. (process.env.NODE_ENV == production) => true.
                               // As a result, unreachable code could be removed from the module.
      "process.env": {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({ /* It could be used when there are comparability issue with previous version of Webpack*/
      minimize: true
    }),
    new webpack.ProvidePlugin({//Automatically loads appropriate module if left-hand identifier found in the code
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new OptimizeCSSAssetsPlugin({ //Minimises generated CSS
      options: {
        discardComments: {
          removeAll: true
        },
        safe: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
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

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode : 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/, //Normally, you shouldn't use Babel-loader for dependencies
        use: [
          'babel-loader' //This loader will convert ES6 to ES5 with babel,
        ]
      },
      {
        test: /\.css$/,
        use: [ // It means "Call css-loader first, then process it with style-loader. It's like style-loader(css-loader(asset))"
          'style-loader', //Ships JS code, which will insert <style> elements into <head> with appropriate styles.
          'css-loader' //Handles all url('') and @import the same way as ES6 'import' statement => Loads appropriate assets. Example - header background.
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(sass)/,
        use: [// like style-loader(css-loader(sass-loader(asset)))
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
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, //Font files are provided by Bootstrap
        use: {
          loader: 'url-loader?limit=100000&mimetype=application/font-woff' //Query param here is the same as content of "options" field specified in next logging
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader', //This loader will convert sources into data-urls. It may significantly increase size of the bundle, so always specify the limit
        options: {
          limit: 25000 //Use file-loader when size of asset is more then limit. You could reduce limit to see the changes in image loading
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader', // This loader will output assets into build directory and change link to output file
          query: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  }
};

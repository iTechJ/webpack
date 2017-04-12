## Webpack and ES6 Tutorial  
This is the last branch of Webpack 4 tutorial
This tutorial is based on http://ccoenraets.github.io/es6-tutorial  

Branch contains examples of using Webpack plugins

### NPM dependencites:
```javascript
npm install optimize-css-assets-webpack-plugin cssnano --save-dev
npm install moment --save-dev
npm install uglifyjs-webpack-plugin --save-dev
```

### Webpack plugins in Action
In this example we are going to review useful plugins, provided by Webpack

*Be sure to check out comments in  webpack.production.js and webpack.development.js*

Additional information:
https://webpack.js.org/concepts/plugins/

#### Plugins often used for development builds
 Please review "plugins" property in webpack.development.js

#### Plugins often used for production builds
 Please review "plugins" property in webpack.production.js
 You can also install source-map-explorer and check results of *source-map-explorer bundle.js bundle.js.map* with and without IgnorePlugin

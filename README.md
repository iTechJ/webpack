## Webpack and ES6 Tutorial
This tutorial is based on http://ccoenraets.github.io/es6-tutorial  
Next branch after **non-default-config**: [assets-loading](https://github.com/iTechJ/webpack/tree/assets-loading)

### NPM dependencites:
```javascript
npm install --save-dev less-loader less
```

### Assets Loading
In this example we are going to review different ways of loading and processing of stylesheets, images and fonts.

*Be sure to check out comments in  webpack.base.js and webpack.development.js*

#### Images
 Please review where and how content of /images folder is used

#### Fonts
Fonts are not loaded explicitly, but Bootstrap uses some of them, so they will be loaded.
Please review which loaders are used to load .woff, .woff2, .ttf and .eot files. Loaders are defined in webpack.base.js

#### CSS
Please review which loaders are used to load .css files in webpack.base.js

#### Less
Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.
Check out styles/less.less, main.js and webpack.base.js for more details.

#### SASS
Sass is the most mature, stable and powerful professional grade CSS extension language in the world. List of features could be found [here](http://sass-lang.com/guide)
Check out styles/sass.sass, main.js and webpack.base.js for more details.

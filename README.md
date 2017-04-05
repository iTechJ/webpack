## Webpack and ES6 Tutorial

Next branch after **multi-config**: [plugins](https://github.com/iTechJ/webpack/tree/plugins)  
This tutorial is based on http://ccoenraets.github.io/es6-tutorial  

**multi-config** branch contains examples of how to split configuration for different environments

### NPM dependencites:
```javascript
npm install lodash --save-dev //Used to merge parts of configuration
npm install minimist --save-dev //Used to parse command-line params passed to webpack
```

### Composing Configuration
In this example we are going to split monolithic webpack.config.js into several environment-specific config files.

#### webpack.base.js
 It contains configuration, common for all types of builds.
 It's *output* directory and webpack *loaders*
 Now it can be called as *npm run serve * (check out "scripts" in package.json)

#### webpack.development.js
 It contains configuration, used by webpack dev server and dev builds.
 It contains dev-specific *entry*, *plugins*  used during development, dev-specific *devtool* and *dev server* configuration
 Also, it adds another *loader* to configuration - ESLint-Loader

#### webpack.production.js
 It contains configuration, used for production builds.
 It contains prod-specific *entry*, *plugins* which should be applied to production builds and prod-specific *devtool*
 This config won't use eslint-loader

#### webpack.config.js
  Responsibility of webpack.config.js is to build valid config based on *env* cli-param using fragments, specified by webpack.[env].js
## Webpack and ES6 Tutorial
Start the tutorial from master branch
This tutorial is based on http://ccoenraets.github.io/es6-tutorial

Master branch contains basic setup of Webpack 4

### NPM dependencites:
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install @babel/cli @babel/core --save-dev
npm install @babel/preset-env --save-dev

### Default configuration:
1) entry point - ./src/index.js
2) output file - ./dist/main.js

#### Notes:
1) Babel is not required for setup of webpack - it's needed here to show some ES6 features
2) index.html imports script "main.js" which is not present in repository. During build process index.html gets copies to dist folder, where webpack puts output (main.js) file.
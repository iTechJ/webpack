## Webpack and ES6 Tutorial

###Webpack Dev server and Hot module reloading
WDS is a development server running in-memory, meaning the bundle contents aren't written out to files, but stored in memory. This is an important distinction when trying to debug code and styles.

By default WDS refreshes content automatically in the browser while you develop your application so you don't have to do it yourself. However it also supports an advanced webpack feature, Hot Module Replacement (HMR).

HMR allows patching the browser state without a full refresh making it particularly handy with libraries like React where a refresh blows away the application state.

npm install webpack-dev-server --save-dev

Now it can be called as *npm run serve * (check out "scripts" in package.json)

### Linting
Linting is one of those techniques that can help you make fewer mistakes while coding JavaScript.
You can spot issues before they become actual problems.
Modern editors and IDEs offer strong support for popular tools allowing you to detect possible issues as you are developing.

Despite this, it's a good idea to set them up with webpack or at least in a separate task that gets run regularly.
That allows you to cancel a production build that is not up to your standards.

We are going to use * [ESLint](http://eslint.org/) * for linting
npm install eslint --save-dev
npm install eslint-loader --save-dev

In this tutorial are are using only some rules - check out *.eslintrc.js*
List of all avalable ESLint rules can be found [here](http://eslint.org/docs/rules/).

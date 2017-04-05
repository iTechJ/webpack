
const path = require('path');
const webpack = require('webpack');
const args = require('minimist')(process.argv.slice(2));

const allowedEnvs = ['dev', 'prod']; // it's enough for our purpose, but in real-world application there can be many environments

let env;
if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

const configs = {
  base: require(path.join(__dirname, './webpack.base.js')),
  dev: require(path.join(__dirname, './webpack.development.js')),
  prod: require(path.join(__dirname, './webpack.production.js'))
};

function getValidEnv(env) {
  var isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
  return isValid ? env : 'dev';
}

function buildConfig(env) {
  return configs[getValidEnv(env)];
}

/*
  Webpack config returns an object. There are many ways to build this object using different parts
 */
module.exports = buildConfig(env);

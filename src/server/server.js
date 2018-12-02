// Read in config that determines if dev or prod env
const env = 'prod';
// const env = 'dev';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const expressApp = express();
const webpackConfig = require(`../webpack/webpack.${env}.js`);
const webpackCompiler = webpack(webpackConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
expressApp.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath
}));

// Serve the files on port 3000.
expressApp.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

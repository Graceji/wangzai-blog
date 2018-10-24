'use strict'

const path = require('path');
const config = require('../config');

const resolve = dir => path.join(__dirname, '..', dir);

const createLintingRule = () => ({
  test: /\.(js|jsx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: config.dev.showEslintErrorsInOverlay,
  }
});

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ]
  }
}

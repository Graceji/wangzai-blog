'use strict'

const path = require('path');
const config  = require('../config');
const packageConfig = require('../package.json');

exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier');
  return (severity, errors) => {
    // severity can be 'error' or 'warning'
    if (severity !== 'error') return;
    const error = errors[0];
    console.log('error:', error);
    const filename = error.file && error.file.split('!').pop();
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    });
  }
};

exports.cssLoaders = (options) => {
  options = options || {};
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  };

  const generateLoaders = (loader, loaderOptions) => {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders);
    } else {
      return ['style-loader'].concat(loaders);
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less', {
      javascriptEnabled: true, // 解决less@3的bug: .bezierEasingMixin(); Inline JavaScript is not enabled. Is it set in your options?
    }),
    sass: generateLoaders('sass', { indentSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
};

exports.styleLoaders = (options) => {
  const output = [];
  const loaders = exports.cssLoaders(options);
  for (const extension in loaders) {
    output.push({
      test: new RegExp(`\\.${extension}$`),
      loader: loaders[extension],
    });
  }
  return output;
};

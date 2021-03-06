'use strict'

const path = require('path');
const config  = require('../config');
const packageConfig = require('../package.json');

exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
}

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
}

'use strict'

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier');
  return (severity, errors) => {
    // severity can be 'error' or 'warning'
    if (severity !== 'error') return;
    const error = errors[0];
    console.log('error:', error);
    console.log('errorfile:', error.file.split('!'));
    const filename = error.file && error.file.split('!').pop();
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    });
  }
}

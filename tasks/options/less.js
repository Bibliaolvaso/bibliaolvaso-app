module.exports = {
  compile: {
    options: {
      paths: [
        'app/styles',
        'vendor/bootstrap/less'
      ]
    },
    files: {
      'tmp/public/assets/app.css': 'app/styles/app.less'
    }
  }
};

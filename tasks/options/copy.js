module.exports = {
  // These copy tasks happen before transpile or hinting. They
  // prepare the build pipeline by moving JavaScript files to
  // tmp/javascript.
  //
  "prepare": {
    files: [{
      expand: true,
      cwd: 'app/',
      src: '**/*.js',
      dest: 'tmp/javascript/app'
    },
    {
      expand: true,
      cwd: 'tests/',
      src: ['**/*.js', '!test_helper.js', '!test_loader.js', '!vendor/**/*.js'],
      dest: 'tmp/javascript/tests/'
    }]
  },
  // Stage moves files to their final destinations after the rest
  // of the build cycle has run.
  //
  "stage": {
    files: [{
      expand: true,
      cwd: 'tests/',
      src: ['index.html', 'test_helper.js', 'test_loader.js', 'vendor/**/*'],
      dest: 'tmp/public/tests/'
    },
    {
      expand: true,
      cwd: 'public/',
      src: ['**'],
      dest: 'tmp/public/'
    }]
  },
  "vendor": {
    files: [{
      expand: true,
      cwd: 'vendor/',
      src: [
        'jquery/jquery.js',
        'handlebars/handlebars.js',
        'ember/ember.js',
        'ember-data/ember-data.js',
        'reference/dist/reference.js',
        'loader.js'
      ],
      dest: 'tmp/public/vendor/',
      flatten: true
    }, {
      expand: true,
      cwd: 'vendor/',
      src: 'bootstrap/dist/fonts/*',
      dest: 'tmp/public/fonts/',
      flatten: true
    }]
  },
  "dist": {
    files: [{
      expand: true,
      cwd: 'tmp/public',
      src: ['**', '!coverage'],
      dest: 'dist/'
    }]
  },
};

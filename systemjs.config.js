/**
 * System configuration for TypeScript examples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'my-app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

  System
    .import('app/main')
    .then(null, console.error.bind(console));  
})(this);
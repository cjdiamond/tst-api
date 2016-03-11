var framework = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = framework();

// start the web server
app.start = function() {
  return app.listen(function() {
    var baseUrl = app.get('url').replace(/\/$/, '');

    app.emit('started');
    console.log('Web server listening at: %s', baseUrl);

    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

  });
};

// Bootstrap the application, configure models, datasources and middleware.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
      app.start();
});

app.boot();




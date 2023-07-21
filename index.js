// var express = require('express');
// var app = express();

// app.use('/app1', require('./app1/app.js'));

// app.use('/app2', require('./app2/app.js'));

// var port = Number(process.env.PORT || 6000);
// app.listen(port);


var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var serverOne = 'http://localhost:5000',
    ServerTwo = 'http://localhost:5001';

app.all("/app1", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port : ' + port)
})
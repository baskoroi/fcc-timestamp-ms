require('babel-register')({
    presets: ['react']
});

var path = require('path');

var express = require('express');
var app     = express();

var React          = require('react');
var ReactDOMServer = require('react-dom/server');
var HomeComponent  = require('./views/components/HomeComponent.jsx');
var processString  = require('./app/timestamp.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    var html = ReactDOMServer.renderToString(
        React.createElement(HomeComponent)
    );
    res.send(html);
});

app.get('/:input', processString);

var PORT = process.env.PORT || 8080;
var HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST);
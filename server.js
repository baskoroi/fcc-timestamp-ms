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

var PORT = 8080;
app.listen(PORT, function() {
    console.log('Server started at http://localhost:' + PORT);
});
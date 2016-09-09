require('babel-register')({
    presets: ['react']
});

var path = require('path');

var express = require('express');
var app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var HomeComponent = require('./components/HomeComponent.jsx');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    var html = ReactDOMServer.renderToString(
        React.createElement(HomeComponent)
    );
    res.send(html);
});

var PORT = 8080;
app.listen(PORT, function() {
    console.log('Server started at http://localhost:' + PORT);
});
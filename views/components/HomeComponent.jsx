var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>timestamp.me</title>

                    <link rel="stylesheet" href="/css/bootstrap.min.css" />
                </head>
                <body>
                    <div className="container-fluid">
                        <h1 className="text-center">timestamp.me</h1>

                        <div className="well">
                            <h2>User Stories</h2>
                            <ol>
                                <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</li>
                                <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
                                <li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
                            </ol>
                        </div>

                        <div className="example">
                            <h2>Example usage:</h2>
                            <code>https://baskoroi-timestamp.herokuapp.com/May%2017%2016</code><br />
                            <code>https://baskoroi-timestamp.herokuapp.com/1463443200</code>
                        </div>

                        <div className="example">
                            <h2>Example output:</h2>
                            <code>{'{'} &quot;unix&quot;: 1463443200, &quot;natural&quot;: &quot;May 17, 2016&quot; {'}'}</code>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
});
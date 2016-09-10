module.exports = {
    entry: './views/client.js',
    output: {
        filename: 'bundle.js',
        path: './public/js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};
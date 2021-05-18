const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:  /\.png/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}
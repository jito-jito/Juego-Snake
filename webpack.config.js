const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')




module.exports = {
    entry: './src/frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    // watch: true,
    module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, '/src/backend'),
                    path.resolve(__dirname, '/node_modules'),
                    path.resolve(__dirname, 'index.js')
                  ],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/frontend/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3006,
    }
}
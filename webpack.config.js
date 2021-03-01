const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
        // publicPath: '/static/build/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                            },
                        ],
                    ],
                    plugins: [
                        [
                            '@babel/plugin-proposal-class-properties',
                            { loose: true },
                        ]
                    ],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
    devtool: 'inline-source-map',
};
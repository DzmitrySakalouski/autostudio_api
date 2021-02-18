const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { root } = require('./helpers');

let cleanOptions = {
    verbose: true,
    beforeEmit: true,
    allowExternal: true
};

let webpackConfig = {
    entry: {
        app: path.resolve(__dirname, root('./src/index.ts'))
    },

    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },

    output: {
        path: path.resolve(__dirname, root('./dist/'))
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    resolveLoader: {
        modules: [
            root('node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }]
    },
    plugins: [
        //new CleanWebpackPlugin([path.resolve(__dirname, root('./build/'))], cleanOptions)
    ],
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = webpackConfig;
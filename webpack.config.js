const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


let outDirectory = path.resolve(__dirname, 'dist');
let outputFilename = '[name].js';

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        filename: outputFilename,
        path: outDirectory,
        publicPath: '/'
    },
    devServer: {
        contentBase: outDirectory
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        
    ]
    };


    
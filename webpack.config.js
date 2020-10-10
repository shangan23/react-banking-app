const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'sourcemap',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer:{
        publicPath:'/dist/',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        })
      ]
}
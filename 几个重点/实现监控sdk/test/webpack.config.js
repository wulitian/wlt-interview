const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve(__dirname, 'dist'))
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'monitor.js'
    },
    devServer: {
        hot: true,
        static: path.resolve(__dirname, 'dist'),
        port: 3100,
        host: '0.0.0.0',
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            inject: 'head'
        })
    ]
}

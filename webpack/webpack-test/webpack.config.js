const path = require('path');
const HelloWorldPlugin = require('./plugin/HelloWorldPlugin.js')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: path.resolve(__dirname, "./loader/zhusi-loader.js")
                    },
                    {
                        loader: path.resolve(__dirname, "./loader/console-loader.js")
                    }
                ]
            }
        ]
    },
    plugins: [
        new HelloWorldPlugin()
    ],
    mode: 'development'
}
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
require('./src/test')
module.exports = {
    entry: './src/index.js',// 入口文件
    output: {
        path: path.join(__dirname, 'dist'), // 输出路径
        filename: 'bundle.js' // 输出的文件名称
    },
    // 配置
    module: {
        // 配置加载器
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                include: /node_modules/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()   //15版本需指定plugin
    ],
    node: {
        fs: 'empty'
    }
}

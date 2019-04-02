const path = require('path');
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
            }
        ]
    }
}

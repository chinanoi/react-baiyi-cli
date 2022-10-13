const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        compress: true,
        open: true,
        hot: true,
    },
});
const path = require('path');
const { PROJECT_PATH, isDev } = require('./config/constant');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(PROJECT_PATH, './src/index.tsx'),
    },
    output: {
        filename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js',
        path: path.resolve(PROJECT_PATH, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false,
            minify: isDev ?
                false : {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    collapseBooleanAttributes: true,
                    collapseInlineTagWhitespace: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true,
                    useShortDoctype: true,
                },
        }),
    ],
};
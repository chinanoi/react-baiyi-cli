const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const { isDev, PROJECT_PATH } = require('./constant');

module.exports = {
    entry: {
        index: resolve(PROJECT_PATH, './src/index.tsx'),
    },
    output: {
        filename: `js/[name]${isDev ? ' ' : '.[hash:8]'}.js`,
        path: resolve(PROJECT_PATH, './dist'),
        clean: true
    },
    optimization: {},
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'], // webpack 会按照定义的后缀名的顺序依次处理文件
        alias: {
            Src: resolve(PROJECT_PATH, './src'),
            Components: resolve(PROJECT_PATH, './src/components'),
            Utils: resolve(PROJECT_PATH, './src/utils'),
        },
    },
    cache: {
        type: 'filesystem' // 根据项目大小选择memory 或者 filesystem
    },
    module: {
        rules: [{
                oneOf: [{
                        test: /\.css$/,
                        use: [
                            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false, // css-module 默认是 false
                                    sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
                                },
                            },
                        ],
                    },
                    {
                        // 定义一下，使用 xxx.module.（less|css)
                        test: /.module.(less|css)$/,
                        include: [path.resolve(__dirname, '../src')],
                        use: [
                            // 我们一般情况下，在开发环境中，我们用 'style-loader', 方便我们做热更新。
                            // 生产环境下，我们要放在单独的文件里。
                            !isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 2,
                                    // 开启 css modules
                                    modules: {
                                        localIdentName: '[path][name]__[local]--[hash:base64:4]'
                                    }
                                }
                            },
                            "postcss-loader",
                            "less-loader"
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false,
                                    sourceMap: isDev,
                                    importLoaders: 1, // 指的是这个loader前面有几个loader，这里需要先被 less-loader 处理，所以设置为 1
                                },
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: isDev,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    sourceMap: isDev,
                                    importLoaders: 1, // 需要先被 sass-loader 处理，所以这里设置为 1
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: isDev,
                                },
                            },
                        ],
                    },
                ]
            },
            {
                test: /.(bmp|png|jpg|jepg|git|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: 'static/images/[name][ext]'
                }
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: 'static/fonts/[name][ext]'
                }
            },
            {
                test: /.(mp4|mp3|webm)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: 'static/medias/[name][ext]'
                }
            },
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                context: resolve(PROJECT_PATH, './public'),
                from: '*',
                to: resolve(PROJECT_PATH, './dist'),
                toType: 'dir',
                globOptions: {
                    dot: true,
                    gitignore: true,
                    ignore: ['**/index.html'],
                },
            }, ],
        }),
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
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
        new WebpackBar({
            name: isDev ? 'run' : 'build',
            color: isDev ? '#00b2a9' : '#ee6139',
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: resolve(PROJECT_PATH, './tsconfig.json'),
            },
        })
    ],
};
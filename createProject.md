# this project is using webpack + react family construct

#### step1： to create a webpack project
1. init：npm init -y
2. install webpack：npm i webpack webpack-cli -D
    * add    *"dev": "webpack"*  into package.json -> scripts
3. create folder *src* and *src/index.js* as entry

#### step2：complete webpack configuration
1. create file webpack.config.js
2. deploy the *entry* and *output*、*mode*、*module*、*plugins*、*devtool*

#### step3： loaders
1. npm i css-loader style-loader file-loader -D
    * style-loader：将模块导出的内容作为样式并添加到 DOM 中
    * css-loader：加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码
    * file-loader：将文件发送到输出文件夹，并返回（相对）URL
2. npm i babel-loader @babel/core @babel/preset-env -D
    * babel-core：babel编译库的核心包
    * babel-loader：使用babel
    * babel/preset-env：babel编译时候的规范
3. npm i @babel/polyfill -D  -->transform the newest javascript grammer
4. modify *.babelrc* file to on-demand introduction the newest  grammer in babel-polyfill(because at the beginning the babel-polyfill is all introduce)
use *useBuiltIns*

#### step4：plugins
1. npm i html-webpack-plugin clean-webpack-plugin -D
    * clean-webpack-plugin：在编译之前清除旧的文件，以保证每次都是最新的状态
    * html-webpack-plugin：自动生成html文件

#### step5：add react into project
1. npm i react react-dom -S
2. npm i @babel/preset-react -D ---> let webpack know the grammer of react
3. npm i webpack-dev-server -D --> hot update  
    * add *new webpack.HotModuleReplacementPlugin()* into webpack.config.js/plugin
    * never use HMR in production

#### step6：optimization
1. npm i less less-loader -D -->添加less
2. npm i mini-css-extract-plugin postcss-loader autoprefixer -D
    * postcss-loader：CSS转换工具，负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST）
    * mini-css-extract-plugin：将CSS样式从JS中抽离出来，形成CSS文件 link形式引入
    * autoprefixer：CSS样式自动生成前缀，适配各种浏览器

#### step7：compression css code and turn on tree shaking
1. npm i glob-all purifycss-webpack purify-css -D 
    * glob-all：用于处理多路径文件
    * purifycss-webpack：清除没用到的CSS样式
    * purify-css：清除没用到的CSS样式
2. npm i optimize-css-assets-webpack-plugin cssnano -D
    * cssnano：将你的 CSS 文件做 多方面的的优化，以确保最终生成的文件 对生产环境来说体积是最小的。
    * optimize-css-assets-webpack-plugin：用来压缩CSS文件
#### step8：webpack add *Optimization* *resolve*
#### step9：js open tree shaking
package.json add 
> "sideEffects": [
        "*.css",
        "*.less"
    ]
#### step10：DllPlugin：
> 这个插件是在一个额外的独立的 webpack 设置中创建一个只有 dll 的 bundle(dll-only-bundle)。 这个插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin 映射到相关的依赖上去的。
简单说就是讲公共依赖缓存起来，不用每次运行都打包一遍

#### step11：npm i add-asset-html-webpack-plugin -D
AddAssetHtmlWebpackPlugin： 自动添加 js 到 html 中
#### step12：区分环境
// 合并 webpack 配置对象
npm i webpack-merge -D

// 在执行命令的时候传参
npm i cross-env -D

新建webpack.dev.config.js、webpack.pro.config.js、webpack.base.config.js


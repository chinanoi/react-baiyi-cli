### 第一步：新建项目文件夹，进入文件夹执行初始化
npm init -y

### 第二步：创建各文件
1. .gitignore：git提交代码需要忽略的文件、文件夹

2. .npmrc: 配置npm包下载镜像地址

3. README：代码库介绍文件

4. .prettierrc：格式化规则-各人或公司标准不同
    - 执行：npm install prettier -D  安装prettier对应依赖

5. 创建.prettierignore文件： 忽略某些文件夹

6. 创建.vscode文件夹-并创建setting.json文件--覆盖想要覆盖的编辑器全局配置

7. 代码规范--eslint
    - 执行安装命令：npm install eslint -D
    - 执行npx eslint --init
        - 我的选择配置为：
            How would you like to use ESLint? · problems
            What type of modules does your project use? · esm
            Which framework does your project use? · react
            Does your project use TypeScript? · No / Yes
            Where does your code run? · browser
            What format do you want your config file to be in? · JavaScript
            Would you like to install them now? · Yes
            Which package manager do you want to use? · npm
    - 提前安装npm install typescript -D  避免报错

8. 创建.eslintignore文件 忽略某些文件夹

9. 安装插件 eslint-config-prettier，禁用和 prettier 起冲突的规则。并在 .eslintrc.js 的 extends 中加入:  'prettier'
    npm install eslint-config-prettier -D

10. 利用 lint-staged 和 husky，对 git 缓存区最新改动过的文件进行格式化和 eslint 校验
    npm install husky lint-staged -D

11. 在 package.json 中加入如下配置

  "husky": {
   "hooks": {
     "pre-commit": "lint-staged"
   }
 },
 "lint-staged": {
   "*.{ts,tsx,js}": [
     "eslint --config .eslintrc.js" // --config 指定配置文件，对暂存区的 .ts .tsx .js 进行校验，这边不加 --fix，防止自动修复未知代码
   ],
   "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
     "prettier --write" // --write 不会更改 语法层面的代码，可以加去自动 format
   ]
 }

12. 安装 webpack 和 webpack-cli 命令
    npm install webpack webpack-cli -D

13. 在文件夹下创建config文件夹并创建 constant.js文件 定义公用变量

14. 在 package.json 的 script 中加入命令:   "build": "webpack --config ./webpack.common.js"

15. 安装webpack-merge 区分开发、生产环境
    npm install webpack-merge -D

16. 创建webpack.dev.js   webpack.prod.js 配置开发、生产环境变量

17. 使用 cross-env 在公共配置文件中进行区分开发和生产环境
    - npm install cross-env -D
    - package.json 中的 script 中修改代码
        "start": "cross-env NODE_ENV=development webpack --config ./webpack.dev.js",
        "build": "cross-env NODE_ENV=production webpack --config ./webpack.prod.js"

    - 在 webpack.common.js 中修改 output，hash 值生产环境缓存的时候需要用到，开发环境不需要
        filename: `js/[name]${isDev ? ' ' : '.[hash:8]'}.js`,

18. devtool 增加报错信息,在 webpack.dev.js 加入代码:  devtool: 'cheap-module-source-map'。不需要的生产环境设置为false

19. 本地开发,npm run start查看实时运行页面
    - html-webpack-plugin 将打包完的 js 文件自动引入 html 文件
    - webpack-dev-server 本地起一个 http 服务，通过简单的配置还可指定其端口、热更新的开启等
    npm install webpack-dev-server html-webpack-plugin -D

    - 根目录下新建public文件夹，文件夹中新建index.html文件

20. webpack.dev.js 添加配置  
    devServer: {
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        port: SERVER_PORT, // 指定端口，默认是8080
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
    },

21. 利用 clean-webpack-plugin 插件，每次 npm run build 打包编译清除 dist 文件夹






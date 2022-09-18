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

12. 



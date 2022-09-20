const path = require('path');
const { PROJECT_PATH, isDev } = require('./config/constant');

module.exports = {
    entry: {
        index: path.resolve(PROJECT_PATH, './src/index.tsx'),
    },
    output: {
        filename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js',
        path: path.resolve(PROJECT_PATH, './dist'),
    },
};
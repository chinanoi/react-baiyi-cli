const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../'); // 当前项目根目录
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const isDev = process.env.NODE_ENV !== 'production';
const SERVER_HOST = 'localhost';
const SERVER_PORT = 3007;

module.exports = {
    isDev,
    PROJECT_PATH,
    PROJECT_NAME,
    SERVER_HOST,
    SERVER_PORT,
};
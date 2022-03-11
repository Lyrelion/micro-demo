const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package');

// 判断是否是生产环境
const isProd = process.env.NODE_ENV === 'production';

// 静态资源的公共地址，部署到生产环境时，按需修改前项为项目名称。
const publicPath = isProd ? `/${name}/` : '/';


module.exports = defineConfig({
  transpileDependencies: true,
  publicPath
})

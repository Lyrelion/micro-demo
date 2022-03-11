const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package');

// 判断是否是生产环境
const isProd = process.env.NODE_ENV === 'production';

// 静态资源的公共地址，部署到生产环境时，按需修改前项为项目名称。
const publicPath = isProd ? 'http://localhost:9160/qiankun-vue/' : 'http://localhost:8081';


module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
  devServer: {
    // 修改默认端口，和微应用注册时一样
    port: 8081,
    // 解决主应用加载子应用出现跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
})

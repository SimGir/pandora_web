const { template } = require("lodash");

module.exports = {
  publicPath: './',
  // 打包后的输出目录
  outputDir: 'dist',
  // 静态资源打包目录
  // assetsDir: './assets',
  // 文件名添加哈希
  // filenameHashing: true,
  pages:{
    index:{
      // 入口文件
      entry: 'src/main.js',
      // 模板文件
      template: 'public/index.html',
      // dist/index.html 输出文件
      filename: 'index.html',
      // 页面title
      title: 'Index Page',
      // 提取出通用的chunk
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 保存时是否用eslint-loader 来检查代码
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue内核版本
  runtimeCompiler: true,
  // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 调整内部的 webpack 配置
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为
  devServer: {
   open: process.platform === 'darwin',
   host: '0.0.0.0',
   port: 8080,
   https: false,
   hotOnly: false,
   // 配置代理
   proxy: null,
   before: app => {}
  }
 }
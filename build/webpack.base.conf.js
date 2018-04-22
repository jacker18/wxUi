'use strict'
const path = require('path')
const utils = require('./utils')//实用工具
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack=require("webpack");
// const happyPack=require('happypack');
// const os=require('os');
// const happyThreadPool = happyPack.ThreadPool({ size: os.cpus().length });

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// resolve是解析的意思
module.exports = {//__dirname制定当前执行脚本的路径
  context: path.resolve(__dirname, '../'),//如果绝对路径
  entry: {
    app: './src/main.js'//动态加载的模块不是入口起点。  简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',//主文件名
    publicPath: process.env.NODE_ENV === 'production'//是否是开发模式
      ? config.build.assetsPublicPath//生产模式输出
      : config.dev.assetsPublicPath//生产模式输出
  },
  resolve: {//解析
    extensions: ['.js', '.vue', '.json'],
    alias: {//用来配置依赖文件的匹配，如依赖文件的别名配置、模块的查找目录、默认查找的
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
        "jquery": path.resolve(__dirname, '../static/js/jquery.min.js')
    }
  },
  module: {//匹配规则
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client'),resolve('node_modules/vue-echarts'),resolve('node_modules/resize-detector')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,//设置立即
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',//文件空对象
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'//true：提供 polyfill。"mock"：提供 mock 实现预期接口，但功能很少或没有。"empty"：提供空对象。false: 什么都不提供。预期获取此对象的代码，可能会因为获取不到此对象，触发 ReferenceError 而崩溃。尝试使用 require('modulename') 导入模块的代码，可能会触发 Cannot find module "modulename" 错误。
  },
    plugins: [
        new webpack.ProvidePlugin({//全局挂在插件
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })

    ]
}

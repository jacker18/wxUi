'use strict'
const utils = require('./utils')//实用工具
const webpack = require('webpack')//webpack
const config = require('../config')//配置文件
const merge = require('webpack-merge')//合并
const path = require('path')//公共路径
const apiConfig=require("../config/apiConfig")
const baseWebpackConfig = require('./webpack.base.conf')//基础配置模块
const CopyWebpackPlugin = require('copy-webpack-plugin')//复制资源模块
const HtmlWebpackPlugin = require('html-webpack-plugin')//生成html模块
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')//提示错误的插件
const portfinder = require('portfinder')//端口寻找？

const HOST = process.env.HOST//服务器环境？
const PORT = process.env.PORT && Number(process.env.PORT)//服务器端口
const devWebpackConfig = merge(baseWebpackConfig, {//合并模块基础模块
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before:apiConfig
  },
  plugins: [
    new webpack.DefinePlugin({//定义插件
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),//热替换
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.//文件名基于hash和文件名
    new webpack.NoEmitOnErrorsPlugin(),//在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({//自动生成html
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([//拷贝插件
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

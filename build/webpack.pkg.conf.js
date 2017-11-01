var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.conf')
var components = require('../components.json')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var env = config.pkg.env

module.exports = {
  entry: components,
  output: {
    path: config.pkg.assetsRoot,
    filename: '[name].js',
    publicPath: config.pkg.assetsPublicPath,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: baseWebpackConfig.module.rules.concat(utils.styleLoaders({
      sourceMap: config.pkg.productionSourceMap,
      extract: true
    }))
  },
  devtool: config.pkg.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        relove: baseWebpackConfig.resolve
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true // 发布时注释掉console.log
      },
      sourceMap: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../lib'),
        to: config.pkg.assetsSubDirectory,
        ignore: ['.css']
      }
    ]),
    new ExtractTextPlugin({
      filename: utils.assetsPath('[name].css')
    }),
    new OptimizeCSSPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     minChunks: 2
        // }),
    new FriendlyErrorsPlugin()
  ]
}

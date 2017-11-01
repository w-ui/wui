var webpack = require('webpack')
var path = require('path')
var utils = require('./utils')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var baseWebpackConfig = require('./webpack.base.conf')

module.exports = {
  entry: {
    app: './package/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'Wui',
    libraryTarget: 'window'
  },
  module: {
    rules: baseWebpackConfig.module.rules.concat(utils.styleLoaders({
      sourceMap: false,
      extract: true
    }))
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'kit'
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
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     minChunks: 2
        // }),
    new FriendlyErrorsPlugin()
  ]
}

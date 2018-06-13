var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, dir)
}

var webpackConfig = {
  entry: {
    'wui': resolve('../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    publicPath: '',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.md'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('../src'),
      'packages': resolve('../packages'),
      'example': resolve('../example')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name (file) {
            if (file.indexOf('wui.png') !== -1) {
              return utils.assetsPath('img/wui.png')
            } else {
              return utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      ...utils.styleLoaders({ sourceMap: false })
    ]
  },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
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
      filename: '[name].[contenthash:5].css'
    })
  ],
  profile: true
}

module.exports = webpackConfig

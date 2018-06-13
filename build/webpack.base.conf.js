var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var hljs = require('highlight.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var markdown = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {
      }
    }
    return '' // use external default escaping
  }
})

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: process.env.NODE_ENV === 'production'
      ? config.build.assetsRoot
      : (process.env.NODE_ENV === 'pkg' ? config.pkg.assetsRoot : '/'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : (process.env.NODE_ENV === 'pkg' ? config.pkg.assetsPublicPath : config.dev.assetsPublicPath)
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
      'src': resolve('src'),
      'packages': resolve('packages'),
      'example': resolve('example')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: markdown
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('dev'), resolve('test'), resolve('package')]
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
  }
}

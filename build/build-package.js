
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
const merge = require('webpack-merge')
var webpackConfig = require('./webpack.common')
var fs = require('fs')

var ignore = ['photoswipe']
var packages = {}
var files = fs.readdirSync(path.join(__dirname, '../packages'))
files.forEach(function (file) {
  var key = '../lib/' + file + '/index'
  var stat = fs.lstatSync(path.join(__dirname, '../packages/', file))
  if (stat.isDirectory() && ignore.indexOf(file) === -1) {
    packages[key] = path.join(__dirname, '../packages/', file, 'index.js')
  }
})

let packageConfig = merge(webpackConfig, {
  entry: packages
})

var spinner = ora('building for production...')
spinner.start()

webpack(packageConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  fs.writeFile(path.join(__dirname, '../stats.json'), JSON.stringify(stats.toJson({
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true
  })))
  console.log(chalk.cyan('  Build complete.\n'))
})


var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig = require('./webpack.common.js')
var fs = require('fs')

var spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
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

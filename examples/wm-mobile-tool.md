# waimai-mobile-tool 外卖移动端脚手架

### 项目地址

https://www.npmjs.com/package/waimai-mobile-tool

### 项目用途以及用法

在开始一个新业务项目时，往往要进行项目框架结构的搭建
本工具是新品FE从大量的业务项目中，总结出来的最佳实践

使用方法
1.全局安装waimai-mobile-tool，即$ npm i -g waimai-mobile-tool
2.执行$ wmh5 init [project-name]
3.可以看到会自动生成一个名为[project-name]的项目

### 项目目录结构介绍
<pre>
build               打包配置文件，可以根据webpack规范进行配置打包方式
config              根据生产环境(在线、离线)和开发环境的不同，配置的打包参数
src                 项目源代码
|----assets         静态资源，图片等
|----bridge         百度外卖、百度糯米的端能力，这里对APP提供的API进行封装，方便开发使用
|----components     业务组件
     |----common    能够被引用多次的通用组件
|----pages          页面入口
|----util           常用小工具，如埋点、异常监控等
static              其他静态资源
</pre>

### 启动项目

在了解上述内容后，在[project-name]目录下执行
$ npm i
$ npm run dev
后，就可以把项目的开发环境启动啦~

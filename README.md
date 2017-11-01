<p align="center">
  <img src="wui.png">
</p>

# wui

[![Build Status](https://travis-ci.org/wmfe/wui.svg?branch=master)](https://travis-ci.org/wmfe/wui)
[![Coverage Status](https://coveralls.io/repos/github/wmfe/wui/badge.svg?branch=master)](https://coveralls.io/github/wmfe/wui?branch=master)
[![npm package](https://img.shields.io/npm/v/w-ui.svg)](https://www.npmjs.org/package/w-ui)
[![NPM downloads](http://img.shields.io/npm/dm/w-ui.svg)](https://npmjs.org/package/w-ui)


` A Vue.js 2.0 UI Toolkit for mobile `

Links
---------

Home Page
Docs
awesome-element
Customize Theme
Preview and generate theme online
Wui for React
Starter Kit
Design resources
Boilerplate for bug reports
CodePen
JSFiddle


Install
---------

``` bash
npm install w-ui
```

Quick Start
---------

``` javascript
import Vue from 'vue'
import {
  Select,
  Button
  // ...
} from 'w-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

For more information, please refer to Quick Start in our documentation.


Browser Support
----------------


Development
-----------


Change log
-----------
Detailed changes for each release are documented in the release notes.


Contribution
-------------
Please make sure to read the contributing guide (中文 | English) before making a pull request.

### 目录
     root
        └─src (开发环境的页面展示)
            ├─assets （资源文件）
            ├─router （路由配置）
            └─nav.config.json (展示页面导航注册)
        └─build  （配置文件）
        └─config （配置文件）
        └─dist   （展示页面输出静态资源 npm run build）
        └─pkg    （各种组件独立包，直接import里面的js可以使用, 其中index.js是整个包集合 npm run pkg）
        └─lib  (集合包 npm run kit)
        └─components.json  （各种组件独立包注册）
        └─example （分页面组件示例）
        └─package （全局通用组件, 建议用js命名，体积较小，使用vue命名会额外增加包的体积）

### 开发

    npm i
    npm run dev 可以打开文档页面，查看组件用法
    新建组件：
    1.源文件在package目录下，index.js用于进行调用Vue.install钩子，源代码请在src中编辑
    2.示例请在example目录进行开发，需要配置src/nav.config.json,才能看到目录树
    3.新增的组件请配置在components.json和package/main.js中，这样打包才会输出

 



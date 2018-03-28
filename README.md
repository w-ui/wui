<p align="center">
  <img src="wui.png">
</p>

# [wui](https://w-ui.github.io/#/) （beta）

[![Build Status](https://travis-ci.org/wmfe/wui.svg?branch=master)](https://travis-ci.org/wmfe/wui)
[![Coverage Status](https://coveralls.io/repos/github/wmfe/wui/badge.svg?branch=master)](https://coveralls.io/github/wmfe/wui?branch=master)
[![npm package](https://img.shields.io/npm/v/w-ui.svg)](https://www.npmjs.org/package/w-ui)
[![NPM downloads](http://img.shields.io/npm/dm/w-ui.svg)](https://npmjs.org/package/w-ui)
[![NPM licence](https://img.shields.io/npm/l/w-ui.svg)](https://npmjs.org/package/w-ui)


` A Vue.js UI Toolkit for mobile with 50+ components`

Install
---------

``` bash
npm install w-ui
```

Quick Start
---------

``` html
<template>
  <Button type="primary" @click.native="doClick">点我</Button>
</template>

<script>
import { Button, Alert } from 'w-ui'
export default {
  components: {
    Button,
    Alert
  },
  methods: {
    doClick () {
      Alert('hello, wui');
    }
  }
}
</script>
```

For more information, please refer to Quick Start in our documentation.

[https://w-ui.github.io/#/doc](https://w-ui.github.io/#/doc)


Change log
-----------
#1.1.1

- [x] 【功能】优化accordion组件样式
- [x] 【bug】修复Confirm回调问题


 



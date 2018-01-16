# WUI [![github start](https://img.shields.io/github/stars/w-ui/wui.svg?style=social&amp;label=Star)](https://github.com/w-ui/wui)


[![Build Status](https://travis-ci.org/wmfe/wui.svg?branch=master)](https://travis-ci.org/wmfe/wui) [![Coverage Status](https://coveralls.io/repos/github/wmfe/wui/badge.svg?branch=master)](https://coveralls.io/github/wmfe/wui?branch=master) [![NPM downloads](http://img.shields.io/npm/dm/w-ui.svg)](https://npmjs.org/package/w-ui) [![Github All Releases](https://img.shields.io/github/downloads/w-ui/wui/total.svg)](https://npmjs.org/package/w-ui) [![NPM licence](https://img.shields.io/npm/l/w-ui.svg)](https://npmjs.org/package/w-ui) [![npm package](https://img.shields.io/npm/v/w-ui.svg)](https://www.npmjs.org/package/w-ui) [![GitHub release](https://img.shields.io/github/release/w-ui/wui.svg)](https://github.com/w-ui/wui) [![Github search hit counter](https://img.shields.io/github/search/w-ui/wui/goto.svg)](https://github.com/w-ui/wui) [![bitHound](https://img.shields.io/bithound/dependencies/github/w-ui/wui.svg)](https://github.com/w-ui/wui)


[![GitHub issues](https://img.shields.io/github/issues/w-ui/wui.svg)](https://github.com/w-ui/wui/issues) [![GitHub closed issues](https://img.shields.io/github/issues-closed/w-ui/wui.svg)](https://github.com/w-ui/wui/issues) [![Gitter](https://img.shields.io/gitter/room/w-ui/wui.svg)](https://github.com/w-ui/wui)
# 51组件


### 手机扫码查看示例


<template>
  <w-qrcode :text="url" :size="256" image="/img/wui.png"></w-qrcode>
</template>

<script>
  import Qrcode from 'packages/qrcode'
  export default {
    components: {
      'w-qrcode': Qrcode
    },
    data () {
      return {
        url: location.origin + '/?t=' + Date.now() + '#/demo/Index'
      }
    }
  }
</script>
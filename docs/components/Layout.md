# Layout 页面布局

### 概述

+ 支持顶部插槽和底部插槽
+ 中间区域高度为窗口高度减少顶部slot和底部slot高度，overflow: auto, 内容超出，有滚动

### Demo

```html
<template>

  <w-layout>
    <div slot="top">
      <w-titlebar>
        我是标题栏
        <w-icon slot="icon2" size="16px" color="#ccc" name="heart" @click.native="doLike"></w-icon>
        <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
      </w-titlebar>
    </div>

    <div style="height: 1000px; background-color: coral">
      我的内容滚动区域
    </div>

    <div slot="bottom">
      <w-menubar>
        <w-menubar-item title="外卖" link="/waimai">
          <w-icon slot="icon" name="home"></w-icon>
        </w-menubar-item>
        <w-menubar-item title="发现" link="/found">
          <w-icon slot="icon" name="feed"></w-icon>
        </w-menubar-item>
        <w-menubar-item title="订单" :dot="true" link="/order">
          <w-icon slot="icon" name="reorder"></w-icon>
        </w-menubar-item>
        <w-menubar-item title="我的" link="/mine">
          <w-icon slot="icon" name="user"></w-icon>
        </w-menubar-item>
       </w-menubar>
    </div>
  </w-layout>

</template>

<script>

import Layout from 'packages/layout'
import Titlebar from 'packages/titlebar'
import Menubar from 'packages/menubar'
import MenubarItem from 'packages/menubar-item'
import Icon from 'packages/icon'
import {Toast} from 'packages/dialog'

export default {
  name: 'layout-demo',
  components: {
    'w-layout': Layout,
    'w-titlebar': Titlebar,
    'w-menubar': Menubar,
    'w-menubar-item': MenubarItem,
    'w-icon': Icon
  },
  methods: {
    doLike () {
      Toast('like')
    },
    doShare () {
      Toast('share')
    }
  }
}
</script>

```

###  Layout 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| transparentTop  | top 插槽区域是否透明    | Boolean    |    |  false     |


###  Layout 插槽介绍 slot

| 名称      |  描述   | 说明        | 
|----------|---------|-------------|
| top     | 顶部区域  |            | 
| bottom  | 底部区域  |            | 
| default  | 中间区域 | 中间区域高度为窗口高度减少顶部slot和底部slot高度    | 
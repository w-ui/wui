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
          <w-icon slot="icon" name="light-bulb"></w-icon>
        </w-menubar-item>
        <w-menubar-item title="订单" :dot="true" link="/order">
          <w-icon slot="icon" name="receipt"></w-icon>
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
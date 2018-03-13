<template>
  <w-layout>
    <w-titlebar slot="top" home="/#/demo/Index">
      {{name}}
    </w-titlebar>
    
    <div class="demo-area">
      <component :is="compo"></component>
    </div>

    <w-menubar slot="bottom">
      <w-menubar-item title="示例" link="/demo/Index">
        <w-icon slot="icon" name="light-bulb"></w-icon>
      </w-menubar-item>
      <w-menubar-item title="日志" :dot="true" link="/demo/Log">
        <w-icon slot="icon" name="receipt"></w-icon>
      </w-menubar-item>
    </w-menubar>

  </w-layout>
</template>

<script>
import { Layout } from 'packages/layout'
import { Titlebar } from 'packages/titlebar'
import { Menubar } from 'packages/menubar'
import { MenubarItem } from 'packages/menubar-item'
import { Icon } from 'packages/icon'

export default {
  name: 'demo',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    'w-layout': Layout,
    'w-titlebar': Titlebar,
    'w-menubar': Menubar,
    'w-menubar-item': MenubarItem,
    'w-icon': Icon
  },
  data() {
    let upName = this.name.replace(/^\w/, s0 => s0.toUpperCase())
    return {
      compo: () => import(`../../examples/${upName}.vue`)
    }
  },
  watch: {
    name(val, oldVval) {
      let upName = val.replace(/^\w/, s0 => s0.toUpperCase())
      this.compo = () => import(`../../examples/${upName}.vue`)
    }
  },
  mounted() {
    document.documentElement.style.fontSize =
      window.innerWidth * 100 / 750 + 'px'
  }
}
</script>

<style lang="less-loader">
@import url('../../src/styles/common.less');

.demo-area {
  position: relative;
  background-color: #f0f0f0;
  & > div {
    padding: 8px 0;

    .paragraph {
      padding: 10px;
      border: 1px #f0f0f0 solid;
      border-radius: 4px;
      background-color: #fff;
      margin: 0.1rem 0;

      h3 {
        border-bottom: 1px #f0f0f0 solid;
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

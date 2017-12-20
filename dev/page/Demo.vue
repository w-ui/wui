<template>
  <w-layout>
    <w-titlebar v-if="name != 'Index'" home="/#/demo/Index">
      {{name}}
    </w-titlebar>
    
    <div class="demo-area">
      <component :is="compo"></component>
    </div>

  </w-layout>
</template>

<script>

import Layout from 'packages/layout'
import Titlebar from 'packages/titlebar'

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
    'w-titlebar': Titlebar
  },
  data () {
    let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
    return {
      compo: () => import(`../../examples/${upName}.vue`)
    }
  },
  watch: {
    name(val, oldVval){
      let upName = val.replace(/^\w/, (s0) => s0.toUpperCase())
      this.compo = () => import(`../../examples/${upName}.vue`)
    }
  },
  mounted(){
    document.documentElement.style.fontSize = window.innerWidth * 100 / 750 + 'px'
  }
}
</script>

<style lang="less-loader">
 @import url("../../src/styles/common.less");

 .demo-area{
   position: relative;
   background-color: #f0f0f0;
   & > div {
     padding: 8px 0;

      .paragraph{
        padding: 10px;
        border: 1px #f0f0f0 solid;
        border-radius: 4px;
        background-color: #fff;
        margin: 0.1rem 0;

        h3{
          border-bottom: 1px #f0f0f0 solid;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }
      }
   }
 }
</style>

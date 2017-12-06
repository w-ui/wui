<template>
  <div class="demo-area">
    <component :is="compo"></component>
  </div>
  
</template>

<script>

export default {
  name: 'demo',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
    return {
      compo: () => import(`../../examples/${upName}.vue`)
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
   padding: 0.3rem;
   min-height: 100vh;
 }
</style>

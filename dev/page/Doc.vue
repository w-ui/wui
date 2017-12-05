<template>
  <div class="doc-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </div>
    
    <div id="sidebar">
      <div class="bar-list">
        组件列表
      </div>
      <router-link :to="v.path" v-for="v in routerData" :key="v.name" active-class="bar-item-active">
        <div class="bar-item">
          {{v.title}}
        </div>
      </router-link>
    </div>

    <div class="body-area">

      <div class="doc-area">
        <component :is="compo"></component>
      </div>

      <div class="demo-area">
        <div class="demo-phone">
          <iframe :src="demoSrc" frameborder="0" width="100%" height="100%"></iframe>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import navData from '../nav.config.json'

export default {
  name: 'doc',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      routerData: navData.slice(1) || []
    }
  },
  computed: {
    compo(){
      let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
      return () => import(`../../docs/${upName}.md`)
    },
    demoSrc(){
      let upName = this.name.replace(/^\w/, (s0) => s0.toUpperCase())
      let time = Date.now()
      return `/?t=${time}#/demo/${upName}`
    }
  }
}
</script>

<style lang="less">

#sidebar {
    width: 240px;
    height: 100vh;
    float: left;
    text-align: left;
  }
  .bar-item, .bar-list {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      padding: 0 24px;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: #fff;
  }
  .router-link-exact-active.bar-item-active .bar-item{
      background-color: #f0f0f0;
      color: dodgerblue;
      border-left: 2px dodgerblue solid;
  }
 
  .bar-list {
    cursor: auto;
    font-weight: bold;
  }

.doc-page{
  display: relative;

  .body-area{
    width: 100%;
    padding-left: 250px;
  }

  .doc-area{
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    padding-right: 345px;
    word-break: break-all;
    word-wrap: break-word;
    border-left: 1px solid #eee;

    h1{
      padding: 10px 0px;
      margin: 30px 0;
    }
    h3{
      padding: 10px 0px;
      border-bottom: 1px #f0f0f0 solid;
      margin: 30px 0 10px 0;
      color: #666;
    }
    h4{
      padding: 10px 0px;
      color: #666;
    }
    pre{
      background-color: #f0f0f0;
      border-radius: 6px;
      padding: 10px;
      word-break: break-all;
      word-wrap: break-word;
      margin: 10px 0;
    }
    table{
      empty-cells: show;
      border: 1px solid #cbcbcb;
      border-collapse: collapse;
      border-spacing: 0;

      th{
        background-color: #e5e5e5;
        color: #000;
        text-align: left;
        vertical-align: bottom;
        border: 1px solid #cbcbcb;
        padding: 10px;
        word-wrap: none;
        white-space: nowrap;
      }
      td{
        padding: 10px;
        border: 1px solid #cbcbcb;
        text-align: left;
      }
    }
  }

  .demo-area{
    position: fixed;
    top: 80px;
    right: 10px;
    width: 330px;
    height: 600px;
    padding: 10px;

    .demo-phone{
      height: 600px;
      width: 310px;
      padding: 40px 5px;
      border-radius: 20px;
      box-shadow: 0 0 10px #000;
      border: 1px #ccc solid;
      background-color: #e7e8e9;
    }
    .demo-phone>div{
      border: 1px #ccc solid; 
      border-radius: 4px;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
    }

    .page-qrcode{
      text-align: center;
      padding-top: 10px;
    }
  }

}
</style>

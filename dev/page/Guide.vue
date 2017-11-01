<template>
  <div class="guide-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/resource">资源</router-link></li>
        <li><router-link to="/feedback">反馈</router-link></li>
      </ul>
    </div>

    <section class="page-body">
      <div class="left-panel">
        <Tree></Tree>
      </div>
      <div class="right-panel">
      wui是一个致力于提升『交互效果』,『性能』,『易用性』的组件库。
      </div>
    </section>

  </div>
</template>

<script> 
import Tree from './Tree'
export default {
  name: 'guide',
  components: {
    Tree
  }
}
</script>

<style lang="less-loader">
  .guide-page{
    background-color: #0c1f51;
    color: rgba(0, 0, 0, 0.65);
    header{
      height: 6.5vw;
    }
    
    .page-body{
      min-height: 100vh;
      background-color: #ececec;
      padding: 20px 40px;
      display: flex;

      .left-panel{
        background-color: #fff;
        border-right: 1px #ececec solid;
        height: 100%;
        flex: 2;
        padding: 20px;
      }
      .right-panel{
        background-color: #fff;
        height: 100%;
        flex: 8;
        padding: 20px;
      }
    }
  }
</style>
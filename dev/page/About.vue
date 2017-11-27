<template>
  <div class="about-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </div>

    <section class="page-body">
      <div class="title">更新日志</div>
      <w-timeline>
        <w-timeline-item>
          <p class="time">2017-11-27 18:46:08</p>
          <p class="item">新增Textarea组件及文档</p>
          <p class="item">新增Menubar组件及文档</p>
          <p class="item">新增About页面</p>
          <p class="item">整理构建配置</p>
        </w-timeline-item>
    </w-timeline>
    </section>

  </div>
</template>

<script> 
import Timeline from 'packages/timeline'
import TimelineItem from 'packages/timeline-item'

export default {
  name: 'about',
  components: {
    'w-timeline': Timeline,
    'w-timeline-item': TimelineItem
  }
}
</script>

<style lang="less-loader">
  .about-page{
    background-color: #0c1f51;
    color: rgba(0, 0, 0, 0.65);
    header{
      height: 6.5vw;
    }
    
    .page-body{
      width: 100vw;
      min-height: 100vh;
      background-color: #ececec;
      padding: 20px 40px;

      .title{
        font-size: 28px;
        padding: 10px;
      }

      .time{
        background-color: #e0e0e0;
        border-radius: 4px;
        width: 200px;
        padding: 5px 10px;
        color: #666;
        margin-bottom: 10px;
      }
      .item{
        color: #666;
      }
    }
  }
</style>
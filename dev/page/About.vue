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
          <p class="time">2017-12-07 18:32:40</p>
          <p class="item">新增InfiniteScroll组件及文档 </p>
          <p class="item">scrollcard组件优化 </p>
          <p class="item">官方文档组件页分类优化 </p>
          <p class="item">完善5分钟上手文档 </p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-05 17:53:42</p>
          <p class="item">scrollcard动画效果优化 </p>
          <p class="item" style="color: dodgerblue">发布1.0.1</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-12-01 16:30:24</p>
          <p class="item">新增keyboard安全键盘组件及文档 </p>
          <p class="item">新增scrollcard组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-30 16:52:04</p>
          <p class="item">新增rate组件 </p>
          <p class="item">修复Qrcode二维码组件bug</p>
          <p class="item">新增Popup组件及文档</p>
          <p class="item">官网文档二级路由按需加载，提升页面加载速度</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-29 15:22:21</p>
          <p class="item">cell表单组件添加input，password，number，email等类型的支持 </p>
          <p class="item">新增video组件及文档</p>
          <p class="item">新增多级联动select组件及文档</p>
        </w-timeline-item>

        <w-timeline-item>
          <p class="time">2017-11-28 18:33:50</p>
          <p class="item">新增Backtop组件及文档</p>
          <p class="item">新增Badge组件及文档</p>
          <p class="item">新增Icon组件及文档</p>
          <p class="item">新增ImageClip组件及文档</p>
          <p class="item">部分文档bug修复和修复</p>
        </w-timeline-item>

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
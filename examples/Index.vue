<template>
  <div class="home-page">
    <div class="header">
        <img src="data:image/png;base64,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">
      <div class="title">WUI</div>
    </div>


    <w-grid :rows="2">
      <w-grid-item link="/demo/Button">Button <br>按钮</w-grid-item>
      <w-grid-item link="/demo/Checkbox">Checkbox <br>多选</w-grid-item>
      <w-grid-item link="/demo/Radio">Radio <br>单选</w-grid-item>
      <w-grid-item link="/demo/Cell">Cell <br>表单</w-grid-item>
      <w-grid-item link="/demo/DateTime">DateTime <br>时间控件</w-grid-item>
      <w-grid-item link="/demo/Select">Select <br>下拉列表</w-grid-item>
      <w-grid-item link="/demo/Password">Password <br>密码输入框</w-grid-item>
      <w-grid-item link="/demo/Textarea">Textarea <br>文本框</w-grid-item>
      <w-grid-item link="/demo/Switch">Switch <br>开关</w-grid-item>
      <w-grid-item link="/demo/Keyboard">Keyboard <br>安全键盘</w-grid-item>
      <w-grid-item link="/demo/Grid">Grid <br>布局栅格</w-grid-item>
      <w-grid-item link="/demo/Menubar">Menubar <br>菜单条</w-grid-item>
      <w-grid-item link="/demo/Carousel">Carousel <br>轮播</w-grid-item>
      <w-grid-item link="/demo/ScrollCard">ScrollCard <br>滑动卡片</w-grid-item>
      <w-grid-item link="/demo/InfiniteScroll">InfiniteScroll <br>无限滑动</w-grid-item>
      <w-grid-item link="/demo/Sticky">Sticky <br>吸顶</w-grid-item>
      <w-grid-item link="/demo/Scroll">Scroll <br>滚动</w-grid-item>
      <w-grid-item link="/demo/ScrollComposite2">组件组合效果 <br>scrolltab</w-grid-item>
      <w-grid-item link="/demo/Dialog">Dialog <br>提示框</w-grid-item>
      <w-grid-item link="/demo/Popup">Popup  <br>弹出层</w-grid-item>
      <w-grid-item link="/demo/Accordion">Accordion <br>折叠面板</w-grid-item>
      <w-grid-item link="/demo/Actionsheet">Actionsheet <br>上拉菜单</w-grid-item>
      <w-grid-item link="/demo/Tab">Tab  <br>选项卡</w-grid-item>
      <w-grid-item link="/demo/Badge">Badge  <br>角标</w-grid-item>
      <w-grid-item link="/demo/Icon">Icon  <br>图标</w-grid-item>
      <w-grid-item link="/demo/Rate">Rate  <br>评分</w-grid-item>
      <w-grid-item link="/demo/Timeline">Timeline  <br>时间轴</w-grid-item>
      <w-grid-item link="/demo/Step">Step  <br>步骤条</w-grid-item>
      <w-grid-item link="/demo/Progressbar">Progressbar  <br>进度条</w-grid-item>
      <w-grid-item link="/demo/Loading">Loading  <br>加载</w-grid-item>
      <w-grid-item link="/demo/Countup">Countup  <br>数字动画</w-grid-item>
      <w-grid-item link="/demo/Sortable">Sortable  <br>拖拽排序</w-grid-item>
      <w-grid-item link="/demo/LazyImage">LazyImage  <br>图片懒加载</w-grid-item>
      <w-grid-item link="/demo/ImageClip">ImageClip   <br>图片裁剪</w-grid-item>
      <w-grid-item link="/demo/Backtop">Backtop   <br>返回顶部</w-grid-item>
      <w-grid-item link="/demo/Waterfall">Waterfall   <br>瀑布流</w-grid-item>
      <w-grid-item link="/demo/Qrcode">Qrcode   <br>二维码</w-grid-item>
    </w-grid>
  </div>
</template>

<script>
import Grid from 'packages/grid'
import GridItem from 'packages/grid-item'

export default {
  name: 'Index',
  components: {
    'w-grid': Grid,
    'w-grid-item': GridItem
  }
}
</script>

<style lang="less-loader">
  .home-page{
    text-align: center;
    width: 100%;
    height: 100%;

    .header{
      text-align: center;
      img{
        width: 64px;
        display: inline;
        animation: animationFrames linear 1.2s;
        animation-iteration-count: infinite;
      }
      .title{
        padding-top: 10px;
        font-size: 18px;
      }
    }
    
  }

@keyframes animationFrames{
  0% {
    transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}

@-webkit-keyframes animationFrames {
  0% {
    -webkit-transform:  rotate(0deg) scaleX(1.00) scaleY(1.00) ;
  }
  10% {
    -webkit-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  20% {
    -webkit-transform:  rotate(-3deg) scaleX(0.80) scaleY(0.80) ;
  }
  30% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  40% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  50% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  60% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  70% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  80% {
    -webkit-transform:  rotate(-3deg) scaleX(1.20) scaleY(1.20) ;
  }
  90% {
    -webkit-transform:  rotate(3deg) scaleX(1.20) scaleY(1.20) ;
  }
  100% {
    -webkit-transform:  rotate(0deg) scaleX(1.20) scaleY(1.20) ;
  }
}


</style>
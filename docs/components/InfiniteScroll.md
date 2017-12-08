# InfiniteScroll 无限滚动 

InfiniteScroll 支持的功能比较多，列表内容可自由定义，侵入性也较少，可实现的功能：

+ 水平方向整屏无限循环滚动
+ 水平方向自由无限循环滚动
+ 垂直方向整屏无限循环滚动
+ 垂直方向整屏自由循环滚动

更多实例，参见 
[组件组合效果1](/#/doc/ScrollComposite1)
[组件组合效果2](/#/doc/ScrollComposite2)

### 水平方向整屏无限循环滚动

滚动列表项的高宽可自行设计，整屏滚动模式下，列表项的宽度为包裹容器的宽度，本例中列表项的宽度为tab-area的内容区域的宽度

本例中内容使用了iframe，必须设置containsIframe="true"，屏蔽iframe对事件的消费，才能正常滚动

```javascript
<template>
  <template>
  <div class="tab-area">
    <w-infinite-scroll scrollMode="fullscreen" :containsIframe="true" :pageSize="1">
      <div class="scroll-item" v-for="(item, index) in website" :key="index">
        <iframe :src="item.url" frameborder="none"></iframe>
      </div>
    </w-infinite-scroll>
  </div>
</template>

<script>
export default {
  components: {
    'w-infinite-scroll': InfiniteScroll
  },
  data () {
    return {
      website: [
        {
          url: 'http://www.51hitech.com/',
          title: '51VR'
        },
        {
          url: 'https://www.rizhiyi.com/',
          title: '日志易'
        },
        {
          url: 'https://www.koalareading.com/',
          title: '考拉阅读'
        },
        {
          url: 'http://dding.net/',
          title: '云丁科技'
        },
        {
          url: 'http://www.ximalaya.com/',
          title: '喜马拉雅'
        },
        {
          url: 'https://www.yi23.net/',
          title: '衣二三'
        }
      ]
    }
  }
}
</script>
<style lang="less">
  .tab-area{
    width: 100%;
    height: 100%;

    .scroll-item{
      width: 100%;
      height: 100%;
      border: 1px dodgerblue solid;
    }
  }
</style>

```



###  InfiniteScroll 属性介绍 attribute

| 参数              | 说明         | 类型       | 可选值        | 默认值           |
|------------------|--------------|-----------|--------------|-----------------|
| direction(暂只支持horizontal)        | 类型          | String    |  horizontal, vertical  |       |
| scrollMode(暂只支持fullscreen)        | 背景颜色       | String    |  fullscreen, free      |       |
| pageCount        | 总页数         | Number    |              |                 | 
| containsIframe   | 内容是否包含iframe  | Boolean   |  true        |                 | 


###  ScrollCard 事件介绍 event

| 事件名称       | 参数            |    说明          | 类型         | 
|---------------|----------------|-----------------|--------------|
| change    |  currentIndex  |  当前激活项索引   | Number       |
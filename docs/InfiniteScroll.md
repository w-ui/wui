# InfiniteScroll 无限滚动 

InfiniteScroll 支持的功能比较多，列表内容可自由定义，侵入性也较少，可实现的功能：

+ 水平方向整屏无限循环滚动
+ 水平方向自由无限循环滚动
+ 垂直方向整屏无限循环滚动
+ 垂直方向整屏自由循环滚动

更多实例，参见 滚动组件那些事

### 水平方向整屏无限循环滚动

滚动列表项的高宽可自行设计，整屏滚动模式下，列表项的宽度为包裹容器的宽度，本例中列表项的宽度为tab-area的内容区域的宽度

本例中内容使用了iframe，必须设置containsIframe="true"，屏蔽iframe对事件的🈂消费，才能正常滚动

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


### 水平方向自由无限循环滚动

```javascript
<template>
  <template>
  <div class="tab-area">
    <w-infinite-scroll :containsIframe="true" :pageSize="2">
      <div class="scroll-item" v-for="(item, index) in website" :key="index">
        <iframe :src="item.url" frameborder="none" height="400px"></iframe>
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
          url: 'https://www.synyi.com/',
          title: '森亿智能'
        },
        {
          url: 'https://www.imhuasheng.com/',
          title: '花生理财'
        },
        {
          url: 'http://stardust.ai/',
          title: '星辰数据'
        },
        {
          url: 'http://www.xiaoyangedu.com/site/default.aspx?PageID=1',
          title: '晓羊教育'
        },
        {
          url: 'http://www.taotailang.cn/',
          title: '淘汰郎'
        },
        {
          url: 'http://www.songsonggift.com/',
          title: '人人有福'
        },
        {
          url: 'http://www.daydaycook.com/daydaycook/hk/website/index.do',
          title: '日日煮'
        }
      ]
    }
  }
}
</script>

```



###  InfiniteScroll 属性介绍 attribute

| 参数              | 说明         | 类型       | 可选值        | 默认值           |
|------------------|--------------|-----------|--------------|-----------------|
| direction        | 类型          | String    |  horizontal, vertical  |       |
| scrollMode       | 背景颜色       | String    |  fullscreen, free      |       |
| pageSize         | 每页显示item的条数  | Number    |              |                 | 
| containsIframe   | 内容是否包含iframe  | Boolean   |  true        |                 | 
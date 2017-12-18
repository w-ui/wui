# InfiniteScroll 无限滚动 

无限滚动列表是为无限翻页加载设计，解决了页面应为dom节点过多导致的各种性能问题，可以支持十万级数据的展示，详见性能测试。

<br>

+ Infinite系列组件关注于性能
+ InfiniteScroll用于整个卡片的滑动, 懒加载下个卡片，滑出视野范围的卡片的dom结构会被删除，下次进入失业范围时重新构建
+ InfiniteScroll支持的功能：
（1）水平方向无限循环滚动
（2）垂直方向自由循环滚动

更多实例，参见 
[组件组合效果1](/#/doc/ScrollComposite1)
[组件组合效果2](/#/doc/ScrollComposite2)

### 水平方向整屏无限循环滚动

滚动列表项的高宽可自行设计，整屏滚动模式下，列表项的宽度为包裹容器的宽度，本例中列表项的宽度为tab-area的内容区域的宽度


```html
<template>
  <div>
    <div class="tab-area">
      <w-infinite-scroll scrollMode="fullscreen" @change="pageChange" :pageCount="Infinity">
        <div class="scroll-item" v-for="(item, index) of category" :key="index">
          <div class="item-name" v-text="item.name"></div>
          <div class="product-item" v-for="pro of products" :key=" 'body-item-' + pro">
            <div class="img"></div>
            <div class="info">
              <div class="title" v-text="pro"></div>
              <div class="tag"></div>
              <div class="price"></div>
            </div>
          </div>
        </div>
      </w-infinite-scroll>
    </div>

  </div>
</template>

<script>
import InfiniteScroll from 'packages/infinite-scroll'

let data = [
  {
    name: '新鲜水果',
    id: 1003001,
    icon: 'appleinc'
  },
  {
    name: '酒类饮品',
    id: 1003001,
    icon: 'beer'
  },
  {
    name: '牛奶乳类',
    id: 1003001,
    icon: 'spotify'
  },
  {
    name: '休闲零食',
    id: 1003001,
    icon: 'bullseye'
  },
  {
    name: '卤味鲜食',
    id: 1003001,
    icon: 'envira'
  },
  {
    name: '糖巧饼干',
    id: 1003001,
    icon: 'modx'
  },
  {
    name: '方便速食',
    id: 1003001,
    icon: 'wpbeginner'
  },
  {
    name: '营养冲调',
    id: 1003001,
    icon: 'heart'
  },
  {
    name: '计生用品',
    id: 1003001,
    icon: 'man-woman'
  }
];

export default {
  components: {
    'w-infinite-scroll': InfiniteScroll
  },
  data () {
    return {
      category: [],
      products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  },
  created () {
    this.category.push(data.shift())
  },
  updated () {
    console.log('updated..')
  },
  methods: {
    pageChange (currentPage, lastPage) {
      console.log(currentPage, lastPage)
      if(currentPage > lastPage){
        
        this.category.push(data[Math.floor(Math.random()* data.length)]);
      }
    }
  }
}
</script>

<style lang="less">
  .tab-area{
    width: 100%;
    height: 100%;

    .scroll-item{

      .item-name{
        padding: 10px;
        text-align: center;
        color: #666;
        font-weight: bold;
      }

      .product-item{
          width: 100%;
          display: flex;
          margin-bottom: 20px;

          .img{
            flex: 0 0 130px;
            height: 90px;
            background-color: #eee;
          }
          .info{
            flex: 1 1 100%;
            padding: 0 10px;
            .title{
              width: 100%;
              height: 30px;
              line-height: 30px;
              padding: 0 10px;
              background-color: #eee;
              margin-bottom: 5px;
            }
            .tag{
              width: 40%;
              height: 20px;
              background-color: #eee;
              margin-bottom: 5px;
            }
            .price{
              width: 60%;
              height: 30px;
              background-color: #eee;
            }
          }
      }
    }
  }
  
</style>

```


### 垂直方向整屏无限循环滚动

滚动列表项的宽度可自行设计，整屏滚动模式下，列表项的高度为包裹容器的高度，本例中列表项的宽度为tab-area的内容区域的高度

本例中内容使用了iframe，必须设置containsIframe="true"，屏蔽iframe对事件的消费，才能正常滚动

```javascript
<template>
  <template>
  <div class="tab-area">
    <w-infinite-scroll direction="v" :containsIframe="true" :pageSize="1">
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
| direction        | 类型          | String    |  h, v        |  h              |
| pageCount        | 总页数         | Number    |              |                 | 
| containsIframe   | 内容是否包含iframe  | Boolean   |  true    |                 | 


###  ScrollCard 事件介绍 event

| 事件名称       | 参数            |    说明          | 类型         | 
|---------------|----------------|-----------------|--------------|
| change    |  currentIndex  |  当前激活项索引   | Number       |
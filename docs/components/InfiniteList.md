# InfiniteList 无限滚动列表


+ Infinite系列组件关注于性能

无限滚动列表是为无限翻页加载设计，解决了页面应为dom节点过多导致的各种性能问题，可以支持十万级数据的展示，详见性能测试。

+ InfiniteList支持的功能：
（1）垂直方向自由循环滚动

更多实例，参见 
[组件组合效果1](/#/doc/ScrollComposite1)
[组件组合效果2](/#/doc/ScrollComposite2)


### 垂直方向自由循环滚动

```javascript
<template>
  <div class="scroll-tab">
      <div class="tab-list-body">
        <w-infinite-list ref="infinitelist" @change="pageChange" :pageCount="pageCount">
            <div class="product-item" v-for="pro of products" :key=" 'body-item-' + pro">
              <div class="img"></div>
              <div class="info">
                <div class="title" v-text="pro"></div>
                <div class="tag"></div>
                <div class="price"></div>
              </div>
            </div>
        </w-infinite-list>
      </div>

    </div>
      
    </div>
  </div>
</template>

<script>
import InfiniteList from 'packages/infinite-list'

export default {
  components: {
    'w-infinite-list': InfiniteList,
  },
  data () {
    return {
      products: [],
      pageCount: 1
    }
  },
  methods: {
    pageChange (currentPage, lastPage) {
      let min = currentPage * 20
      let max = (currentPage + 1) * 20
      for(let i=min; i< max; i++) {
        this.products.push(i)
      }
    },
    scroll () {
      return true
    }
  },
  mounted () {
    for(let i=0; i< 20; i++) {
      this.products.push(i)
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
| pageCount        | 总页数         | Number    |              |                 | 
| containsIframe   | 内容是否包含iframe  | Boolean   |  true        |                 | 


###  ScrollCard 事件介绍 event

| 事件名称       | 参数            |    说明          | 类型         | 
|---------------|----------------|-----------------|--------------|
| change    |  currentIndex  |  当前激活项索引   | Number       |
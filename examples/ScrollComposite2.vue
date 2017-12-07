<template>
  <div>
    <div class="tab-area">
      <w-infinite-scroll scrollMode="fullscreen" :containsIframe="true" :pageChange="pageChange" :pageCount="6">
        <div class="scroll-item" v-for="(item, index) of website" :key="index">
          <div class="item-name">{{item.title}}</div>
          <iframe :src="item.url" frameborder="none" height="450px"></iframe>
        </div>
      </w-infinite-scroll>
    </div>

  </div>
</template>

<script>
import InfiniteScroll from 'packages/infinite-scroll'

let data = [
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
    url: 'https://www.yi23.net/',
    title: '衣二三'
  },
  {
    url: 'http://www.bijixia.net/',
    title: '笔记侠'
  },
  {
    url: 'http://laibeikafei.com.cn/',
    title: '莱杯咖啡'
  },
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
  },
  {
    url: 'http://www.liwushuo.com/',
    title: '礼物说'
  },
  {
    url: 'http://www.binguohezi.com/',
    title: '缤果盒子'
  },
  {
    url: 'http://www.myfantang.com/Home/index/index.html',
    title: 'kao铺'
  },
  {
    url: 'http://www.52panghu.com/',
    title: '胖虎'
  },
  {
    url: 'http://www.wochu.cn/',
    title: '我厨'
  }
];

export default {
  components: {
    'w-infinite-scroll': InfiniteScroll
  },
  data () {
    return {
      website: []
    }
  },
  created () {
    this.website.push(data.shift())
  },
  updated () {
    console.log('updated..')
  },
  methods: {
    pageChange (currentPage, lastPage) {
      if(currentPage > lastPage){
        if (data.length > 0) {
          this.website.push(data[Math.floor(Math.random()* data.length)]);
        }
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
      border: 1px dodgerblue solid;

      .item-name{
        background-color: #666;
        padding: 10px;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
  
</style>

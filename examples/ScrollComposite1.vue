<template>
  <div class="scroll-tab">
    <div class="tab-head">
      <w-scroll-card>
        <div class="head-item" v-for="(item, index) of header" :key=" 'head-' + index">
          {{item.title}}
        </div>
      </w-scroll-card>
    </div>
    <div class="tab-body">
      <w-infinite-scroll scrollMode="fullscreen" :containsIframe="true" :pageChange="pageChange" :pageCount="19">
        <div class="body-item" v-for="(item, index) of website" :key=" 'body-' + index">
          <iframe :src="item.url" frameborder="none" height="450px"></iframe>
        </div>
      </w-infinite-scroll>
    </div>

  </div>
</template>

<script>
import ScrollCard from 'packages/scroll-card'
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
    'w-infinite-scroll': InfiniteScroll,
    'w-scroll-card': ScrollCard
  },
  data () {
    return {
      website: [],
      header: []
    }
  },
  created () {
    this.header = data.slice(0)
    this.website.push(data.shift())
  },
  updated () {
    console.log('updated..')
  },
  methods: {
    pageChange (currentPage, lastPage) {
      if(currentPage > lastPage){
        if (data.length > 0) {
          this.website.push(data.shift());
        }
      }
    }
  }
}
</script>

<style lang="less">
  .scroll-tab{
    width: 100%;
    height: 100%;

    .tab-head{
      width: 100%;
      padding-bottom: 10px;

      .head-item{
        padding: 10px 20px;
      }
      .head-item.active{
        border-bottom: 2px dodgerblue solid;
      }
    }

    .body-item{

      .body-name{
        background-color: #666;
        padding: 10px;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
  
</style>

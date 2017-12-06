<template>
  <div>
    <div class="tab-area">
      <w-infinite-scroll scrollMode="fullscreen" :containsIframe="true" :pageSize="1">
        <div class="scroll-item" v-for="(item, index) in website" :key="index">
          <div class="item-name">{{item.title}}</div>
          <iframe :src="item.url" frameborder="none" height="450px"></iframe>
        </div>
      </w-infinite-scroll>
    </div>

  </div>
</template>

<script>
import InfiniteScroll from 'packages/infinite-scroll'

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
          url: 'http://www.xinliangjishipin.com/',
          title: '信良记'
        },
        {
          url: 'https://www.drive.ai/',
          title: 'drive。ai'
        },
        {
          url: 'http://www.mento.ai/',
          title: '子歌'
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
        },
        {
          url: 'https://h5.youzan.com/v2/showcase/homepage?kdt_id=14830402',
          title: 'meng flora'
        },
        {
          url: 'https://www.zhangmen.com/',
          title: '掌门1对1'
        },
        {
          url: 'https://www.qingcloud.com/',
          title: '青云'
        },
        {
          url: 'http://www.kfyao.com/',
          title: '快方送药'
        },
        {
          url: 'https://www.uoolu.com/',
          title: '有路'
        },
        {
          url: 'http://yihang.ai/',
          title: '易航智能'
        },
        {
          url: 'https://www.youzy.cn/',
          title: '优志愿'
        },
        {
          url: 'https://www.qxwz.com/',
          title: '千寻位置'
        },
        {
          url: 'http://www.mallcoo.cn/',
          title: '猫酷'
        },
        {
          url: 'http://www.goluk.com/',
          title: '极路客Goluk'
        },
        {
          url: 'http://www.ehang.com/cn/',
          title: '亿航无人机'
        },
        {
          url: 'http://www.carrobot.com/',
          title: '车萝卜Carrobot'
        },
        {
          url: 'http://www.kuaishou.com',
          title: '快手'
        },
        {
          url: 'https://mobike.com',
          title: '摩拜'
        },
        {
          url: 'http://www.didichuxing.com',
          title: '滴滴出行'
        },
        {
          url: 'https://www.douyu.com/',
          title: '斗鱼'
        },
        {
          url: 'http://www.meituan.com',
          title: '美团'
        },
        {
          url: 'https://www.guazi.com',
          title: '瓜子'
        },
        {
          url: 'http://www.toutiao.com',
          title: '今日头条'
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

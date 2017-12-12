<template>
  <div class="scroll-tab">
    <w-sticky top="0px">
      <w-scroll-card ref="srollcard" @change="itemChange">
        <div class="head-item" v-for="(item, index) of header" :key=" 'head-' + index">
          {{item.name}}
        </div>
      </w-scroll-card>
    </w-sticky>

    <div class="tab-body">
      <w-infinite-scroll ref="infinitescroll" @change="pageChange" :pageCount="pageCount">
        <div class="body-item" v-for="(item, index) of category" :key=" 'head-' + index">
          <template v-if = 'item'>
            <p class="name">{{item.name}}</p>
            <div class="product-item" v-for="pro of item.products" :key=" 'body-item-' + pro">
              <div class="img"></div>
              <div class="info">
                <div class="title">{{pro}}</div>
                <div class="tag"></div>
                <div class="price"></div>
              </div>
            </div>
          </template>
        </div>
      </w-infinite-scroll>
    </div>
  </div>
</template>

<script>
import ScrollCard from 'packages/scroll-card'
import InfiniteScroll from 'packages/infinite-scroll'
import Sticky from 'packages/sticky'

let data = [
  {
    name: '特价专区',
    id: 1003001,
    icon: 'chart',
  },
  {
    name: '满69减30',
    id: 1003001,
    icon: 'price-tag'
  },
  {
    name: '优惠',
    id: 1003001,
    icon: 'ticket'
  },
  {
    name: '热销',
    id: 1003001,
    icon: 'cart'
  },
  {
    name: '新鲜水果',
    id: 1003001,
    icon: 'appleinc'
  },
  {
    name: '冰淇淋',
    id: 1003001,
    icon: 'cutlery'
  },
  {
    name: '特价专区',
    id: 1003001,
    icon: 'bell2'
  },
  {
    name: '饮料/水',
    id: 1003001,
    icon: 'coffee'
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
  },
  {
    name: '个人护理',
    id: 1003001,
    icon: 'bandcamp'
  },
  {
    name: '日用百货',
    id: 1003001,
    icon: ''
  },
  {
    name: '进口食品',
    id: 1003001,
    icon: ''
  },
  {
    name: '百草味',
    id: 1003001,
    icon: ''
  },
  {
    name: '网红新品',
    id: 1003001,
    icon: ''
  },
  {
    name: '休闲食品',
    id: 1003001,
    icon: ''
  }
];

export default {
  components: {
    'w-infinite-scroll': InfiniteScroll,
    'w-scroll-card': ScrollCard,
    'w-sticky': Sticky
  },
  data () {
    return {
      category: [{
        name: data[0].name,
        products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      }],
      header: data,
      pageCount: data.length
    }
  },
  methods: {
    pageChange (currentPage, lastPage) {
      let d = data[currentPage]
      this.category[currentPage] = {
        name: d.name,
        products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      };
      this.$refs.srollcard.setCurrent(currentPage)
    },
    itemChange (currentIndex) {
      let d = data[currentIndex]
      let content = {
        name: d.name,
        products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      };
      this.$set(this.category, currentIndex, content)
      this.$refs.infinitescroll.setCurrent(currentIndex)
    },
    scroll () {

    }
  },
  mounted () {
    this.$refs.srollcard.setCurrent(0)
  }
}
</script>

<style lang="less">
  .scroll-tab{
    width: 100%;
    height: 100%;

    .head-item{
      padding: 10px 20px;
      background-color: #fff;
    }
    .head-item.active{
      border-bottom: 2px dodgerblue solid;
    }

    .body-item{

      .name{
        padding: 10px;
        color: #444;
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

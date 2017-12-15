<template>
  <div class="scroll-tab">
    <div class="tab-body">
      <div class="tab-list">
        <w-scroll-tree ref="srolltree" @change="itemChange" :data="data" :centerActivedItem="false">
        </w-scroll-tree>
      </div>

      <div class="tab-list-body">
        <w-infinite-scroll ref="infinitescroll" @change="pageChange" :pageCount="pageCount" direction="v" :scroll="scroll">
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
      
    </div>
  </div>
</template>

<script>
import ScrollTree from 'packages/scroll-tree'
import InfiniteScroll from 'packages/infinite-scroll'

let data = [
  {
    name: '特价专区',
    id: 1003001,
    icon: 'medall',
    children: [
      {
        name: '满69减30',
        id: 1003001,
        icon: 'camera',
        children: []
      },
      {
        name: '优惠',
        id: 1003001,
        icon: 'announcement',
        children: []
      },
      {
        name: '热销',
        id: 1003001,
        icon: 'magnet',
        children: []
      }
    ]
  },
  {
    name: '新鲜水果',
    id: 1003001,
    icon: 'apple',
    children: []
  },
  {
    name: '冰淇淋',
    id: 1003001,
    icon: 'id-badge',
    children: []
  },
  {
    name: '特价专区',
    id: 1003001,
    icon: 'shield',
    children: [
      {
        name: '饮料/水',
        id: 1003001,
        icon: 'package',
        children: []
      },
      {
        name: '酒类饮品',
        id: 1003001,
        icon: 'world',
        children: []
      },
      {
        name: '牛奶乳类',
        id: 1003001,
        icon: 'brush-alt',
        children: []
      }
    ]
  },
  {
    name: '休闲零食',
    id: 1003001,
    icon: 'palette',
    children: [
      {
        name: '卤味鲜食',
        id: 1003001,
        icon: 'envira',
        children: []
      },
      {
        name: '糖巧饼干',
        id: 1003001,
        icon: 'modx',
        children: []
      },
      {
        name: '方便速食',
        id: 1003001,
        icon: 'mouse',
        children: []
      }
    ]
  },
  {
    name: '营养冲调',
    id: 1003001,
    icon: 'shine',
    children: []
  },
  {
    name: '计生用品',
    id: 1003001,
    icon: 'ticket',
    children: []
  },
  {
    name: '个人护理',
    id: 1003001,
    icon: 'brush',
    children: []
  },
  {
    name: '日用百货',
    id: 1003001,
    icon: 'notepad',
    children: []
  },
  {
    name: '进口食品',
    id: 1003001,
    icon: 'hummer',
    children: [
      {
        name: '百草味',
        id: 1003001,
        icon: 'video-clapper',
        children: []
      }
    ]
  },
  {
    name: '网红新品',
    id: 1003001,
    icon: 'pin2',
    children: []
  },
  {
    name: '休闲食品',
    id: 1003001,
    icon: 'gallery',
    children: []
  }
];

export default {
  components: {
    'w-infinite-scroll': InfiniteScroll,
    'w-scroll-card': ScrollCard
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
      return true
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
      padding: 10px 0px 10px 10px;
      background-color: #f5f5f5;
    }
    .head-item.active{
      background-color: #fff;
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
          flex: 0 0 80px;
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

    .tab-body{
      display: flex;
      height: 480px;
      overflow: hidden;

      .tab-list{
        height: 100%;
        flex: 0 0 90px;
      }

      .tab-list-body{
        flex: 1 1 100%;
        padding-left: 10px;
        overflow: hidden;
      }

    }
  }
  
</style>
<template>
  <div class="scroll-tab">
    <div class="tab-body">
      <div class="tab-list">
        <w-scroll-tree ref="srolltree" @change="itemChange" :data="header" :centerActivedItem="false">
        </w-scroll-tree>
      </div>

      <div class="tab-list-body">
        <w-infinite-scroll ref="infinitescroll" @change="pageChange" :pageCount="pageCount" direction="v" :scroll="scroll">
          <div class="body-item" v-for="(item, index) of category" :key=" 'head-' + index">
            <template v-if='item && item.children && item.children.length > 0'>
              <w-scroll-tab ref="scrolltab" :showSide="false" @change="subItemChange">
                <w-scroll-tab-panel v-for="(child, idx) in item.children" :key="'s-t-p-' + idx" :name="child.name">
                  <w-sticky slot="header">
                    <div class="panel-head-bar">{{child.name}}</div>
                  </w-sticky>
                  <div class="product-item" v-for="pro of child.products" :key=" 'body-item-' + pro">
                    <div class="img"></div>
                    <div class="info">
                      <div class="title">{{pro}}</div>
                      <div class="tag"></div>
                      <div class="price"></div>
                    </div>
                  </div>
                </w-scroll-tab-panel>
              </w-scroll-tab>
            </template>
            <template v-else>
              <template v-if="item">
                <w-scroll-tab :showSide="false">
                  <w-scroll-tab-panel :name="item.name">
                    <w-sticky slot="header">
                      <div class="panel-head-bar">{{item.name}}</div>
                    </w-sticky>
                    <div class="product-item" v-for="pro of item.products" :key=" 'body-item-' + pro">
                      <div class="img"></div>
                      <div class="info">
                        <div class="title">{{pro}}</div>
                        <div class="tag"></div>
                        <div class="price"></div>
                      </div>
                    </div>
                  </w-scroll-tab-panel>
                </w-scroll-tab>
              </template>
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
import ScrollTab from 'packages/scroll-tab'
import ScrollTabPanel from 'packages/scroll-tab-panel'
import InfiniteScroll from 'packages/infinite-scroll'
import Sticky from 'packages/sticky'

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
        children: [],
        products: [1,2,3,4,5,6,7,8,9,10]
      },
      {
        name: '优惠',
        id: 1003001,
        icon: 'announcement',
        children: [],
        products: [1,2,3,4,5]
      },
      {
        name: '热销',
        id: 1003001,
        icon: 'magnet',
        children: [],
        products: [1,2,3]
      }
    ]
  },
  {
    name: '新鲜水果',
    id: 1003001,
    icon: 'apple',
    children: [],
    products: [1,2,3,4,5,6,7]
  },
  {
    name: '冰淇淋',
    id: 1003001,
    icon: 'id-badge',
    children: [],
    products: [1,2,3,4,5,6,7,8,9,10]
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
        children: [],
        products: [1,2,3,4,5]
      },
      {
        name: '酒类饮品',
        id: 1003001,
        icon: 'world',
        children: [],
        products: [1,2,3]
      },
      {
        name: '牛奶乳类',
        id: 1003001,
        icon: 'brush-alt',
        children: [],
        products: [1,2,3,4,5,6,7,8]
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
        children: [],
        products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      },
      {
        name: '糖巧饼干',
        id: 1003001,
        icon: 'modx',
        children: [],
        products: [1,2,3,4,5]
      },
      {
        name: '方便速食',
        id: 1003001,
        icon: 'mouse',
        children: [],
        products: [1]
      }
    ]
  },
  {
    name: '营养冲调',
    id: 1003001,
    icon: 'shine',
    children: [],
    products: [1,2]
  },
  {
    name: '计生用品',
    id: 1003001,
    icon: 'ticket',
    children: [],
    products: [1,2,3,4,5,6,7,8,9]
  },
  {
    name: '个人护理',
    id: 1003001,
    icon: 'brush',
    children: [],
    products: [1,2,3,4]
  },
  {
    name: '日用百货',
    id: 1003001,
    icon: 'notepad',
    children: [],
    products: [1,2,3,4,5,6,7,8]
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
        children: [],
        products: [1,2,3,4,5,6,7,8,9]
      }
    ]
  },
  {
    name: '网红新品',
    id: 1003001,
    icon: 'pin2',
    children: [],
    products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  },
  {
    name: '休闲食品',
    id: 1003001,
    icon: 'gallery',
    children: [],
    products: [1,2,3,4]
  }
];

export default {
  components: {
    'w-infinite-scroll': InfiniteScroll,
    'w-scroll-tree': ScrollTree,
    'w-scroll-tab': ScrollTab,
    'w-scroll-tab-panel': ScrollTabPanel,
    'w-sticky': Sticky
  },
  data () {
    return {
      category: [data[0]],
      header: data,
      pageCount: data.length,
      treeIndex: 0,
      timer: null
    }
  },
  methods: {
    pageChange (currentPage, lastPage) {
      this.currentPage = currentPage
      this.treeIndex = currentPage
      let d = data[currentPage]
      this.$set(this.category, currentPage, d)
      this.$refs.srolltree.setCurrent(currentPage)
    },
    itemChange (currentIndex, subIndex) {
      if (this.treeIndex !== currentIndex) {
        this.treeIndex = currentIndex
        this.$set(this.category, currentIndex, data[currentIndex])
        this.$refs.infinitescroll.setCurrent(currentIndex)
      } else if (subIndex !== undefined) {
        if (this.$refs.scrolltab && this.$refs.scrolltab.length > 0) {
          this.$refs.scrolltab[0].setCurrent(subIndex)
        }
      }
    },
    subItemChange (index) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$refs.srolltree.setCurrent(this.treeIndex, index)
      }, 100)
    },
    scroll () {
      return true
    }
  },
  mounted () {
    this.$refs.srolltree.setCurrent(0)
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
      height: 100%;
      overflow-y: auto;

      .name{
        padding: 10px;
        color: #444;
        font-weight: bold;
      }

      .panel-head-bar{
        background-color: #fff;
        padding: 10px;
        width: 100%;
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
      height: 420px;
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
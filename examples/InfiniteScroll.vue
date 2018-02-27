<template>
  <div>
      <div class="tab-area">
        <w-infinite-scroll scrollMode="fullscreen" @change="pageChange" :pageCount="Infinity">
          <div class="scroll-item" v-for="(item, index) of category" :key="index">
            <div class="item-name">{{item.name}}</div>
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
import { InfiniteScroll } from "packages/infinite-scroll";

let data = [
  {
    name: "新鲜水果",
    id: 1003001,
    icon: "appleinc"
  },
  {
    name: "酒类饮品",
    id: 1003001,
    icon: "beer"
  },
  {
    name: "牛奶乳类",
    id: 1003001,
    icon: "spotify"
  },
  {
    name: "休闲零食",
    id: 1003001,
    icon: "bullseye"
  },
  {
    name: "卤味鲜食",
    id: 1003001,
    icon: "envira"
  },
  {
    name: "糖巧饼干",
    id: 1003001,
    icon: "modx"
  },
  {
    name: "方便速食",
    id: 1003001,
    icon: "wpbeginner"
  },
  {
    name: "营养冲调",
    id: 1003001,
    icon: "heart"
  },
  {
    name: "计生用品",
    id: 1003001,
    icon: "man-woman"
  }
];

export default {
  components: {
    "w-infinite-scroll": InfiniteScroll
  },
  data() {
    return {
      category: [],
      products: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    };
  },
  created() {
    this.category.push(data.shift());
  },
  updated() {},
  methods: {
    pageChange(currentPage, lastPage) {
      if (currentPage > lastPage) {
        this.category.push(data[Math.floor(Math.random() * data.length)]);
      }
    }
  }
};
</script>

<style lang="less">
.tab-area {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;

  .scroll-item {
    .item-name {
      padding: 10px;
      text-align: center;
      color: #666;
      font-weight: bold;
    }

    .product-item {
      width: 100%;
      display: flex;
      margin-bottom: 20px;

      .img {
        flex: 0 0 130px;
        height: 90px;
        background-color: #eee;
      }
      .info {
        flex: 1 1 100%;
        padding: 0 10px;
        .title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          background-color: #eee;
          margin-bottom: 5px;
        }
        .tag {
          width: 40%;
          height: 20px;
          background-color: #eee;
          margin-bottom: 5px;
        }
        .price {
          width: 60%;
          height: 30px;
          background-color: #eee;
        }
      }
    }
  }
}
</style>

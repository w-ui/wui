<template>
  <div>
      <div class="scroll-list">
        <w-infinite-list ref="infinitelist" @change="pageChange" :pageCount="pageCount">
            <div class="product-item" v-for="pro of products" :key=" 'body-item-' + pro">
              <div class="img"></div>
              <div class="info">
                <div class="title">{{pro}}</div>
                <div class="tag"></div>
                <div class="price"></div>
              </div>
            </div>
        </w-infinite-list>
      </div>
  </div>
</template>

<script>
import { InfiniteList } from "packages/infinite-list";

export default {
  components: {
    "w-infinite-list": InfiniteList
  },
  data() {
    return {
      products: [],
      pageCount: Infinity
    };
  },
  methods: {
    pageChange(currentPage, lastPage) {
      if (currentPage > lastPage) {
        let min = currentPage * 20;
        let max = (currentPage + 1) * 20;
        for (let i = min; i < max; i++) {
          this.products.push(i);
        }
      }
    },
    scroll() {
      return true;
    }
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.products.push(i);
    }
    // this.$forceUpdate()
  }
};
</script>

<style lang="less">
.scroll-list {
  width: 100%;
  height: 400px;
  background-color: #fff;
  padding: 10px;

  .product-item {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .img {
      flex: 0 0 80px;
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
</style>
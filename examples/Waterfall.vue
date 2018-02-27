<template>
  <div>
    <w-waterfall :items="items" :columns='2' enter-class="item-enter">
      <div class="image-item" v-for="(item, index) in items" :key="'wf-item-' + index">
          <img :src="item.url"/>
          <div class="image-item-title">
            {{index + '' + item.title}}
          </div>
      </div>
    </w-waterfall>
  </div>
</template>

<script>
import { Waterfall } from "packages/waterfall";
import { LazyImage } from "packages/lazy-image";
import ImageData from "./data.js";

export default {
  components: {
    "w-waterfall": Waterfall,
    "w-lazy-image": LazyImage
  },
  data() {
    return {
      items: ImageData.images
    };
  }
};
</script>

<style lang="less-loader">
.item-enter-before {
  opacity: 0;
}
.item-enter-after {
  opacity: 1;
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.image-item {
  padding: 2px;
  img {
    width: 100%;
  }
  &-title {
  }
}
</style>
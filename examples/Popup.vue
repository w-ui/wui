<template>
  <div>
    <div class="paragraph">
      <w-button type="primary" size="large" @click.native="show = !show">打开弹出层</w-button>
      <w-popup v-model="show">
        <div class="slot-content">
          <img src="https://orig00.deviantart.net/742a/f/2011/344/3/c/cold_facial_profile_by_cvet04ek-d4ioa6k.jpg"/>
        </div>
      </w-popup>
    </div>
  </div>
</template>


<script>
import { Popup } from "packages/popup";
import { Button } from "packages/button";

export default {
  name: "page-popup",
  components: {
    "w-popup": Popup,
    "w-button": Button
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="less">
.slot-content {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
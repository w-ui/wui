<template>
  <div>
    <div class="paragraph">
      <h3>线形进度条</h3>
      <w-progressbar type="line" :progress="progress1"></w-progressbar>
    </div>

    <div class="paragraph">
      <h3>圆形进度条</h3>
      <w-progressbar :progress="progress2" barWidth="4">{{progress2 * 100}}%</w-progressbar>
      <w-button size="large" @click.native="progress2 = 0.9">设置为90%</w-button>
    </div>

  </div>
</template>

<script>
import { ProgressBar } from "packages/progressbar";
import { Button } from "packages/button";

export default {
  components: {
    "w-progressbar": ProgressBar,
    "w-button": Button
  },
  data() {
    return {
      progress1: 0.5,
      progress2: 0.2
    };
  }
};
</script>
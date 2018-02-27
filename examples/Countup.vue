<template>
  <div>
    <div class="paragraph">
      <h3>自动触发</h3>
      <div class="money">
        <w-countup endnum="1200" duration="3" decimals="2" separator="," prefix="$" suffix="美元"
></w-countup>
      </div>
    </div>

    <div class="paragraph">
      <h3>手动触发</h3>
      <div class="money">
        <w-countup endnum="100" suffix="%" :start="start1"></w-countup>
      </div>
      <w-button size="large" @click.native="start1 = true">启动</w-button>
    </div>

  </div>
</template>

<script>
import { Countup } from "packages/countup";
import { Button } from "packages/button";

export default {
  components: {
    "w-countup": Countup,
    "w-button": Button
  },
  data() {
    return {
      start1: false
    };
  }
};
</script>


<style lang="less">
.money {
  font-size: 0.9rem;
  color: dodgerblue;
}
</style>
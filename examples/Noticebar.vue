<template>
  <div>
    <div class="paragraph">
      <w-noticebar>WUI是一个基于vue的移动端组件库</w-noticebar>
    </div>
  </div>
</template>


<script>
import { Noticebar } from "packages/noticebar";

export default {
  components: {
    "w-noticebar": Noticebar
  }
};
</script>

<template>
  <div :style="{position: 'relative', width: '300px'}">
    <search :searchCb="search" placeholder="placeholder" :onChangeCb="onChange" :onChangeCallInterval="1000" :result="array"></search>
  </div>
</template>

<script>
import { search } from "packages/search/src/Search";

export default {
  components: {
    search
  },
  data() {
    return {
      array: []
    };
  },
  methods: {
    search(keywords) {
      console.log(keywords);
    },
    onChange(keywords) {
      console.log("change");
      console.log(keywords);
      this.array = [
        {
          caption: "aaa",
          key: "aaakey"
        },
        {
          caption: "bbb",
          key: "bbbkey"
        },
        {
          caption: "ccc",
          key: "ccckey"
        },
        {
          caption: "ddd",
          key: "ddddkey"
        }
      ];
    }
  }
};
</script>

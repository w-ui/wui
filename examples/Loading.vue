
<template>
  <div>
    <w-loading v-show="loading"></w-loading>
    <w-button size="large" @click.native="toggleLoading">点我查看加载效果</w-button>
  </div>
</template>

<script>
import Loading from 'packages/loading/src/Loading.vue'
import Button from 'packages/button'

export default {
  data() {
    return {
      loading: false
    }
  },
  components: {
    'w-loading': Loading,
    'w-button': Button
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    }
  }
}
</script>

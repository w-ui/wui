
<template>
  <div>
    <div class="paragraph">
      <w-button size="large" @click.native="toggleLoading">点我查看加载效果</w-button>
    </div>
  </div>
</template>

<script>
import { Loading } from 'packages/loading'
import { Button } from 'packages/button'

export default {
  components: {
    'w-button': Button
  },
  methods: {
    toggleLoading() {
      let ins = Loading();
      console.log(ins);
      setTimeout(() => {
        ins.hide()
      }, 5000)
    }
  }
}
</script>

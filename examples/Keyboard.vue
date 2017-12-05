<template>
  <div>
    <w-button size="large" @click.native="show = !show">支付</w-button>
    <w-keyboard v-model="show"></w-keyboard>
  </div>
</template>


<script>
import Keyboard from 'packages/keyboard'
import Button from 'packages/button'

export default {
  components: {
    'w-keyboard': Keyboard,
    'w-button': Button
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
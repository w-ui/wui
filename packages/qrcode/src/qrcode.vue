<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { drawQrcode } from './qrwrap.js'

export default {
  name: 'w-qrcode',
  props: {
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 128
    }
  },
  mounted() {
    drawQrcode(this.$refs.canvas, {
      render: 'canvas',
      size: this.size,
      text: this.text,
      image: this.image
    })
  }
}
</script>


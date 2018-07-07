<template>
    <i :class="classes" :style="styles"></i>
</template>

<script type="text/babel">
export default {
  name: 'w-icon',
  props: {
    name: String,
    color: {
      type: String,
      default: '#888'
    },
    size: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value)
      },
      default: '.4rem'
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      if (this.custom) {
        return 'custom-' + this.name
      }
      return 'ti-' + this.name
    },
    styles() {
      const style = {}

      if (!!this.size) {
        style.fontSize = this.size
      }

      if (!!this.color) {
        style.color = this.color
      }

      return style
    }
  }
}
</script>

<style lang="less">
@import './icons.less';
</style>

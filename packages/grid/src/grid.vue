<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'w-grid',
  props: {
    cols: {
      validator(value) {
        return ['2', '3', '4', '5', '6'].indexOf(value + '') > -1
      },
      default: '2'
    }
  },
  computed: {
    classes() {
      return 'wui-grid-' + this.cols
    }
  }
}
</script>

<style lang="less">
@import './grid.less';
</style>

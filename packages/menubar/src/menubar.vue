<template>
    <div class="wui-menubar" :class="classes" :style="{color: activeColor}">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'w-menubar',
  props: {
    fixed: Boolean,
    activeColor: {
      default: '#09BB07'
    }
  },
  computed: {
    classes() {
      return this.fixed ? 'menubar-fixed' : ''
    }
  }
}
</script>

<style lang="less">
@import './menubar.less';
</style>

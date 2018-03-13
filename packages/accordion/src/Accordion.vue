<template>
  <div class="wui-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'w-accordion',
  data() {
    return {
      opening: false
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    open(uid) {
      if (this.opening) return

      this.$children.forEach(item => {
        if (item._uid === uid) {
          item.show ? item.closeItem() : item.openItem()
        } else {
          !this.accordion && item.closeItem()
        }
      })
    }
  }
}
</script>

<style lang="less">
@import '../index.less';
</style>

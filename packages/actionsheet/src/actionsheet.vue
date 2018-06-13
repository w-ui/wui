<template>
    <div v-if="value" class="wui-actionsheet">
        <div class="mask-actionsheet" @click.stop="close"></div>
        <div class="actionsheet">
            <a v-for="(item,index) in items" :key="'__as__'+index" @click.stop="itemClick(item)" class="actionsheet-item" >{{item.label}}</a>
            <a v-if="cancel" @click.stop="close" class="actionsheet-action">{{cancel}}</a>
        </div>
    </div>
</template>

<script type="text/babel">
import { addClass, removeClass, getScrollview } from 'src/utils'

export default {
  name: 'w-actionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      require: true
    },
    cancel: String
  },
  watch: {
    value(val) {
      val &&
        this.isIOS &&
        addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')

      this.show = val
    }
  },
  methods: {
    itemClick(item) {
      if (item) {
        typeof item.method == 'function' && item.method()
        !item.stay && this.close()
      }
    },
    close() {
      this.isIOS &&
        removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug')

      this.$emit('input', false)
    }
  },
  destroyed() {
    this.close()
  },
  mounted() {
    this.scrollView = getScrollview(this.$el)

    this.isIOS = !!(
      (window.navigator && window.navigator.userAgent) ||
      ''
    ).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>

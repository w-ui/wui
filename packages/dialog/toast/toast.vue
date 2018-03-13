<template>
    <div class="wui-dialog-white-mask">
        <div class="wui-toast" :class="iconsClass == '' ? 'wui-toast-none-icon' : ''">
            <div v-if="iconsClass" :class="iconsClass"></div>
            <p class="wui-toast-content" v-html="content"></p>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    content: String,
    icon: String,
    timeout: Number,
    callback: Function
  },
  computed: {
    iconsClass() {
      let _icon = ''
      if (this.icon === 'success' || this.icon === 'error') {
        _icon = 'wui-toast-' + this.icon + '-icon'
      }
      return _icon
    }
  }
}
</script>

<style lang="less">
@import './toast.less';
</style>

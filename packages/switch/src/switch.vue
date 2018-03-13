<template>
    <input type="checkbox" class="wui-switch" v-model="checked"/>
</template>

<script type="text/babel">
export default {
  name: 'w-switch',
  data() {
    return {
      checked: false
    }
  },
  props: {
    value: Boolean
  },
  watch: {
    checked(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.checked = this.value
  }
}
</script>

<style lang="less">
@import './switch.less';
</style>

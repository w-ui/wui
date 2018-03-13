<template>
    <div class="wui-tab-panel-item" :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'wui-tab-panel',
  props: {
    title: String,
    active: Boolean,
    tabkey: [String, Number]
  },
  computed: {
    classes() {
      return this.$parent.activeIndex == this._uid ? 'wui-tab-active' : ''
    }
  },
  watch: {
    active() {
      this.$parent.init(true)
    },
    label() {
      this.$parent.init('label')
    }
  }
}
</script>

<template>
    <button :class="classes" :style="{backgroundColor: bgcolor, color: color}">
        <a v-for="item in items" :key="'btn-g-' + item.value " :class="{active: val === item.value, disable: !!item.disable}" @click="activeItem(item)">{{item.name}}</a>
    </button>
</template>

<script type="text/babel">
export default {
  name: 'w-button-group',
  props: {
    type: {
      validator(value) {
        return (
          ['primary', 'danger', 'warning', 'light', 'disabled'].indexOf(value) >
          -1
        )
      },
      default: 'primary'
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) > -1
      }
    },
    bgcolor: {
      type: String
    },
    color: {
      type: String
    },
    shape: {
      validator(value) {
        return ['square', 'circle'].indexOf(value) > -1
      },
      default: 'square'
    },
    items: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number]
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  computed: {
    classes() {
      let s = this.size === 'large' ? 'w-btn-group-large' : 'w-btn-group-normal'
      let b = 'w-btn-group-' + this.type
      if (this.border) {
        b = 'w-btn-group-' + this.type + '-border'
      }
      let bo = 'w-tn-group-bg'
      if (this.disabled) {
        b = 'w-btn-group-disabled'
      }
      if (this.bgcolor) {
        b = ''
      }
      return (
        'w-button-group ' +
        s +
        ' ' +
        b +
        (this.shape === 'circle' ? ' w-btn-group-circle' : '')
      )
    }
  },
  methods: {
    activeItem(item) {
      if (!item.disable) {
        this.val = item.value
        this.$emit('input', item.value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './button-group.less';
</style>

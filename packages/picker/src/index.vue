<template>
    <div @click.stop="open" class="wui-picker-input">{{displayValue}}</div>
</template>

<script type="text/babel">
import Vue from 'vue'
import PickerComponent from './picker.vue'
import { pageScroll } from '../../../src/utils'

export default {
  name: 'w-picker',
  data() {
    return {
      picker: null,
      currentValue: this.value,
      tmpNum: 0,
      displayValue: ''
    }
  },
  props: {
    columns: {
      type: Array
    },
    items: {
      type: Object
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    columns(val, oldVal) {},
    items(val, oldVal) {}
  },
  methods: {
    open() {
      if (this.readonly) return
      this.picker.open()
    },
    close() {
      this.picker.close()
    },
    removeElement() {
      if (this.picker && this.picker.$el)
        document.body.removeChild(this.picker.$el)
    },
    setDisplayText(val) {
      let result = []
      for (let key in val) {
        let arr = this.items[key]
        arr.forEach(item => {
          if (item.value == val[key]) {
            result.push(item.name)
          }
        })
      }
      this.displayValue = result.join(' ')
    },
    render() {
      this.removeElement()

      const picker = Vue.extend(PickerComponent)
      const props = this._props
      props.parentEL = this.$el

      this.picker = new picker({
        el: document.createElement('div'),
        data: props
      })

      document.body.appendChild(this.picker.$el)

      this.picker.$on('confirm', value => {
        if (this.tmpNum > 0 || this.initEmit) {
          this.setDisplayText(value)
          this.currentValue = value
          this.$emit('input', value)
        }
        this.tmpNum++
      })

      this.picker.$on('change', value => {
        this.$emit('change', value)
      })
    },
    updateColumn(column) {
      let allData = this.items[column]
      if (allData && allData.length > 0) {
        this.$nextTick(() => {
          this.picker.scrolloToPosition(column, allData, value => {
            this.$emit('change', {
              column,
              value
            })
          })
        })
      }
    }
  },
  mounted() {
    this.render()
    this.setDisplayText(this.value)
  },
  beforeDestroy() {
    pageScroll.unlock()
    this.removeElement()
  }
}
</script>

<style lang="less">
@import './picker.less';
</style>

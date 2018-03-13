<template>
    <div @click.stop="open" class="wui-select-input">{{displayValue}}</div>
</template>

<script type="text/babel">
import Vue from 'vue'
import SelectComponent from './select.vue'
import { pageScroll } from 'src/utils'

export default {
  name: 'w-select',
  data() {
    return {
      select: null,
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
      this.select.open()
    },
    close() {
      this.select.close()
    },
    removeElement() {
      if (this.select && this.select.$el)
        document.body.removeChild(this.select.$el)
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

      const Select = Vue.extend(SelectComponent)
      const props = this._props
      props.parentEL = this.$el

      this.select = new Select({
        el: document.createElement('div'),
        data: props
      })

      document.body.appendChild(this.select.$el)

      this.select.$on('confirm', value => {
        if (this.tmpNum > 0 || this.initEmit) {
          this.setDisplayText(value)
          this.currentValue = value
          this.$emit('input', value)
        }
        this.tmpNum++
      })

      this.select.$on('change', value => {
        this.$emit('change', value)
      })
    },
    updateColumn(column) {
      let allData = this.items[column]
      if (allData && allData.length > 0) {
        this.$nextTick(() => {
          this.select.scrolloToPosition(column, allData, value => {
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
@import './select.less';
</style>

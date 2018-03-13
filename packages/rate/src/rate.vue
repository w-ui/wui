<template>
    <span class="wui-rate">
        <a href="javascript:;" v-for="item in ~~count" :key="'r_' + item"
           :class="index >= item ? 'rate-active' : ''"
           :style="{color: index >= item ? activeColor : color}"
           @click="!readonly && choose(item)"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.94 47.94" width="16px" height="16px">
            <path :fill=" index >= item ? activeColor : color " d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                C22.602,0.567,25.338,0.567,26.285,2.486z"/>
        </svg>
        </a>
        <span class="wui-rate-text" v-if="!!str" v-html="str"></span>
    </span>
</template>

<script type="text/babel">
export default {
  name: 'w-rate',
  data() {
    return {
      index: 0,
      str: ''
    }
  },
  watch: {
    value(val) {
      this.choose(val)
    }
  },
  props: {
    count: {
      validator(val) {
        return /^(([1-9]\d*)|0)$/.test(val)
      },
      default: 5
    },
    color: {
      default: '#CCC'
    },
    activeColor: {
      default: '#FF5D50'
    },
    value: {
      validator(val) {
        return /^(([1-9]\d*)|0)$/.test(val)
      }
    },
    showText: {
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    choose(index) {
      this.index = index
      this.$emit('input', index)
      if (!!this.showText) {
        this.str = (this.showText[index - 1] || '').replace('$', index)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.choose(this.value)
    })
  }
}
</script>

<style lang="less">
@import './rate.less';
</style>

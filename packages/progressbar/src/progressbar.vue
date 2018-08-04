<template>
    <div class="wui-progressbar">
        <div class="progressbar-content" v-if="type != 'line'"><slot></slot></div>
        <svg :viewBox="viewBox" v-show="show" :preserveAspectRatio="type == 'line' ? 'none' : ''">
            <path :fill-opacity="type == 'line' ? 1: 0"
                  :d="getPathString"
                  :fill="bgColor"
                  :stroke="bgColor"
                  :stroke-width="width"
            ></path>
            <path fill-opacity="0" ref="trailPath"
                  :d="getPathString"
                  :stroke="barColor"
                  :stroke-width="barWidth ? barWidth : width"
                  :style="{strokeDasharray: stroke.dasharray, strokeDashoffset: stroke.dashoffset}"
            ></path>
        </svg>
    </div>
</template>

<script type="text/babel">
import { getScrollview, checkInview } from '../../../src/utils'

export default {
  name: 'w-progressbar',
  data() {
    return {
      viewBox: '0 0 100 100',
      show: false,
      stroke: {
        dasharray: '',
        dashoffset: ''
      }
    }
  },
  props: {
    type: {
      validator(value) {
        return ['circle', 'line'].indexOf(value) > -1
      },
      default: 'circle'
    },
    bgColor: {
      type: String,
      default: '#E5E5E5'
    },
    width: {
      validator(val) {
        return /^\d*$/.test(val)
      },
      default: 4
    },
    barWidth: {
      validator(val) {
        return /^\d*$/.test(val)
      },
      default: 0,
      require: true
    },
    barColor: {
      default: '#20a0ff'
    },
    progress: {
      validator(val) {
        return /^(0(.\d+)?|1(\.0+)?)$/.test(val)
      },
      default: 0
    }
  },
  methods: {
    init() {
      const length = (this.length = this.$refs.trailPath.getTotalLength())
      this.stroke.dashoffset = length
      this.stroke.dasharray = length + ',' + length

      this.scrollview = getScrollview(this.$el)

      this.show = true

      if (this.type == 'line') {
        this.viewBox = '0 0 100 ' + (this.width ? this.width : this.barWidth)
      }

      this.$nextTick(() => {
        this.scrollHandler()
      })

      this.bindEvent()
    },
    scrollHandler() {
      if (checkInview(this.scrollview, this.$el)) {
        this.stroke.dashoffset = this.length - this.progress * this.length
      }
    },
    bindEvent() {
      this.scrollview.addEventListener('scroll', this.scrollHandler)
      window.addEventListener('resize', this.scrollHandler)
    },
    unbindEvent() {
      this.scrollview.removeEventListener('scroll', this.scrollHandler)
      window.removeEventListener('resize', this.scrollHandler)
    }
  },
  watch: {
    progress(val) {
      this.stroke.dashoffset = this.length - val * this.length
    }
  },
  computed: {
    getPathString() {
      if (this.type == 'line') {
        return 'M 0,{R} L 100,{R}'.replace(/\{R\}/g, this.width / 2)
      } else {
        const r = 50 - Math.max(this.width, this.barWidth) / 2
        return 'M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}'
          .replace(/\{R\}/g, r)
          .replace(/\{2R\}/g, 2 * r)
      }
    }
  },
  mounted() {
    this.init()
  },
  destoryed() {
    this.unbindEvent()
  }
}
</script>

<style lang="less">
@import './progressbar.less';
</style>

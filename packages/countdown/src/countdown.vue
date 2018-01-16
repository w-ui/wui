<template>
  <div class="wui-countdown">
    <span v-if="showTimeString">{{timeString}}</span>
    <div v-show="false" class="wui-clocker-tpl" ref="slotNode">
        <slot></slot>
    </div>
    <div v-if="$slots.default" class="wui-self-styled-time" v-html="cacheSlotString">
    </div>
  </div>
</template>

<script>
import Clocker from './clocker'

export default {
  name: 'w-countdown',
  mounted () {
    // let format = '%D 天 %H 小时 %M 分 %S 秒'
    // if (this.lang === 'en') { // eslint-disable-line
    //     format = '%D d %H h %M m %S s'
    // } else if (this.lang === 'zh-CN') { // eslint-disable-line
    //     format = '%D 天 %H 小时 %M 分 %S 秒'
    // }

    this.$nextTick(() => {
      this.slotString = this.$refs.slotNode.innerHTML
      if (this.slotString !== '') {
        this.showTimeString = false
      }
      this.render()
    })
  },
  methods: {
    render () {
      if (!this.time) return
      this.clocker = new Clocker(this.time)
      .on('tick', event => {
        this.update(event)
        this.$emit('on-tick', event)
      })
      .on('finish', () => {
        this.timeString = '00:00:00'
        this.$emit('finish')
      })
      .start()
    },
    update (event) {
      if (this.showTimeString) {
        this.timeString = event.strftime(this.format)
      } else {
        let str = event.strftime(this.slotString)
        if (str !== this.cacheSlotString) {
            this.cacheSlotString = str
        }
      }
    }
  },
  props: {
    time: {
        type: [String, Number],
        required: true
    },
    lang: {
        type: String,
        default: 'zh-CN'
    },
    format: {
      type: String,
      default: '%D 天 %H 小时 %M 分 %S 秒'
    }
  },
  watch: {
    time () {
      this.clocker.remove()
      this.render()
    }
  },
  data () {
    return {
      showTimeString: true,
      timeString: '',
      slotString: '',
      cacheSlotString: '',
      html: ''
    }
  },
  beforeDestroy () {
    if (this.clocker) {
      this.clocker.remove()
      this.clocker = null
    }
  }
}
</script>

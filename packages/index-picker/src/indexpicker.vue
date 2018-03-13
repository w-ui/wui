<template>
  <div ref="scrollbody" @touchstart="onTouchstart" @mousedown="onTouchstart" @touchmove="onTouchmove" @mousemove="onTouchmove">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'body-scroll',
  data() {
    return {
      startY: 0,
      startX: 0,
      bodyHeight: 0,
      maxScrollTop: 0,
      scrollTop: 0
    }
  },
  methods: {
    onTouchstart(e) {
      let point = e.touches ? e.touches[0] : e
      this.startY = point.clientY
      this.startX = point.clientX
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      this.maxScrollTop = this.bodyHeight - window.innerHeight - this.barHight
      console.log('>>>[maxScrollTop]', this.maxScrollTop)
      e.preventDefault()
    },
    onTouchmove(e) {
      let point = e.touches ? e.touches[0] : e
      let m_sX = point.clientX - this.startX
      let m_sY = point.clientY - this.startY
      if (Math.abs(m_sY) > Math.abs(m_sX)) {
        e.preventDefault()
        e.stopPropagation()

        let st = this.scrollTop - m_sY
        if (st > this.maxScrollTop) {
          st = this.maxScrollTop
        }
        console.log('>>>[scrollTop]', this.maxScrollTop)
        document.documentElement.scrollTop = st
        document.body.scrollTop = st

        if (this.maxScrollTop - st <= 3) {
          this.$emit('stickyChange', true)
        } else {
          this.$emit('stickyChange', false)
        }
      }
    },
    onTouchend(e) {
      this.logDom.innerHTML += '<p>touchEnd:' + Date.now() + '</p>'
      this.logDom.scrollTop = 999999999

      this.maxScrollTop = this.bodyHeight - window.innerHeight - this.barHight
      let st = document.documentElement.scrollTop || document.body.scrollTop

      if (st > this.maxScrollTop) {
        st = this.maxScrollTop
      }
      document.documentElement.scrollTop = st
      document.body.scrollTop = st

      if (this.maxScrollTop - st <= 3) {
        this.$emit('stickyChange', true)
      } else {
        this.$emit('stickyChange', false)
      }
    }
  },
  mounted() {
    this.barHight = 0
    this.logDom = document.querySelector('.log')
    this.$nextTick(() => {
      this.bodyHeight = document.body.offsetHeight
      window.addEventListener('touchend', this.onTouchend, false)
      window.addEventListener('mouseup', this.onTouchend, false)
      window.addEventListener('scroll', this.onTouchend, false)
    })
  },

  destroyed() {
    window.removeEventListener('touchend', this.onTouchend, false)
    window.removeEventListener('mouseup', this.onTouchend, false)
  }
}
</script>

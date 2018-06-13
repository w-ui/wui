<template>
  <div v-if= "direction === 'h'" class="wui-scroll-card-h">
    <div class="wui-scroll-nav" ref="nav">
      <div class="wui-scroll-container" ref="box" @touchstart="touchstart" @mousedown="touchstart">
        <slot></slot>
      </div>
    </div>
  </div>
  <div v-else class="wui-scroll-card-v">
    <div class="wui-scroll-nav" ref="nav">
      <div class="wui-scroll-container" ref="box" @touchstart="touchstart" @mousedown="touchstart">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'w-scroll-picker',
  data() {
    return {
      drag: false,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      currentIndex: 0,
      offsetW: 0,
      offsetH: 0,
      lastTime: 0,
      timer: null,
      total: 0,
      ww: 0
    }
  },
  props: {
    direction: {
      type: String,
      default: 'h'
    },
    change: Function,
    centerActivedItem: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    touchstart(e) {
      this.drag = true
      let tar = e.targetTouches || [e]
      tar = tar[0]
      this.startX = tar.pageX
      this.startY = tar.pageY
      this.startTime = Date.now()
      this.offsetW = 0
      this.offsetH = 0

      if (this.direction == 'h') {
        this.currentX = this.getCurrentX()
        this.setBound()
      } else if (this.direction == 'v') {
        this.currentY = this.getCurrentY()
        this.setBoundVertical()
      }
      e.preventDefault()
      e.stopPropagation()
    },
    touchmove(e) {
      if (this.drag) {
        // let now = Date.now();
        // if(this.lastTime){
        //   let remaining = 50 - now + this.lastTime;
        //   if(remaining <= 0){
        //     this.lastTime = now;
        //     clearInterval(this.timer);
        //     this.move(e);
        //   } else {
        //     clearInterval(this.timer);
        //     this.timer = setTimeout(this.move.bind(this, e), remaining);
        //   }
        // } else {
        //   this.lastTime = now;
        //   this.move(e);
        // }
        this.move(e)
        e.preventDefault()
        e.stopPropagation()
      }
    },
    touchend(e) {
      if (this.drag) {
        this.drag = false
        if (this.direction == 'h') {
          let curx = this.getCurrentX()
          if (curx > this.maxsw) {
            this.bounceBack(this.maxsw - this.itemWidth / 2, 0)
            this.$emit('input', 0)
          } else if (curx < this.minsw) {
            this.bounceBack(this.minsw + this.itemWidth / 2, 0)
            this.$emit('input', this.total - 1)
          } else {
            this.momentumMove(e)
          }
        } else {
          let cury = this.getCurrentY()
          if (cury > this.maxsh) {
            this.bounceBack(0, this.maxsh - this.itemWidth / 2)
            this.$emit('input', 0)
          } else if (cury < this.minsh) {
            this.bounceBack(0, this.minsh + this.itemWidth / 2)
            this.$emit('input', this.total - 1)
          } else {
            this.momentumMove(e)
          }
        }
      }
    },
    move(e) {
      if (this.drag) {
        let tar = e.targetTouches || [e]
        tar = tar[0]
        if (this.direction == 'h') {
          let offsetX = tar.pageX - this.startX
          this.offsetW = offsetX
          let lastx = this.currentX + offsetX
          lastx = this.getDamping(lastx)
          this.translateTo(lastx, 0, 0, true)
        } else {
          let offsetY = tar.pageY - this.startY
          this.offsetH = offsetY
          let lasty = this.currentY + offsetY
          lasty = this.getDamping(lasty)
          this.translateTo(0, lasty, 0, true)
        }
      }
    },
    bounceBack(x, y, t) {
      let ti = t || 500
      this.translateTo(x, y, ti)
    },
    getDamping(s) {
      let max = this.maxsw
      let min = this.minsw
      if (this.direction === 'v') {
        max = this.maxsh
        min = this.minsh
      }
      if (s > max) {
        return max + Math.round(s / 4)
      } else if (s < min) {
        return Math.round(min - (min - s) / 4)
      } else {
        return s
      }
    },
    momentumMove(e) {
      let difft = Date.now() - this.startTime
      if (this.direction == 'h') {
        let curx = this.getCurrentX()
        if (difft > 500 || Math.abs(this.offsetW) < 10) {
          return
        } else {
          let v = Math.abs(this.offsetW) / difft
          const a = 0.0004
          let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
          let last = Math.round(curx + s)
          let t = Math.round(s / v)

          if (last < this.minsw) {
            last = Math.round(this.minsw - this.ww / (v * 6))
          } else if (last > this.maxsw) {
            // 向右
            last = Math.round(this.ww / (v * 6))
          }
          t < 300 && (t = 300)
          t > 600 && (t = 600)

          let idx = Math.ceil((last - this.maxsw) / this.itemWidth)
          last = idx * this.itemWidth + this.maxsw - this.itemWidth / 2
          this.translateTo(last, 0, t)

          setTimeout(() => {
            curx = this.getCurrentX()
            if (curx > this.maxsw) {
              this.bounceBack(this.maxsw - this.itemWidth / 2, 0)
              this.$emit('input', 0)
            } else if (curx < this.minsw) {
              this.bounceBack(this.minsw + this.itemWidth / 2, 0)
              this.$emit('input', this.total - 1)
            } else {
              this.$emit('input', Math.abs(idx))
            }
          }, t)
        }
      } else {
        let cury = this.getCurrentY()
        if (difft > 500 || Math.abs(this.offsetH) < 10) {
          return
        } else {
          let v = Math.abs(this.offsetH) / difft
          const a = 0.0002
          let s = v * v / (2 * a) * (this.offsetH < 0 ? -1 : 1)
          let last = Math.round(cury + s)
          let t = Math.round(s / v)

          if (last < this.minsh) {
            last = Math.round(this.minsh - this.hh / (v * 6))
          } else if (last > 0) {
            // 向右
            last = Math.round(this.hh / (v * 6))
          }
          t < 300 && (t = 300)
          t > 600 && (t = 600)

          let idx = Math.ceil((last - this.maxsh) / this.itemWidth)
          last = idx * this.itemWidth + this.maxsh - this.itemWidth / 2
          this.translateTo(0, last, t)

          setTimeout(() => {
            cury = this.getCurrentY()
            if (cury > this.maxsh) {
              this.bounceBack(0, this.maxsh - this.itemWidth / 2)
              this.$emit('input', 0)
            } else if (cury < this.minsh) {
              this.bounceBack(0, this.minsh + this.itemWidth / 2)
              this.$emit('input', this.total - 1)
            } else {
              this.$emit('input', Math.abs(idx))
            }
          }, t)
        }
      }
    },
    getCurrentX() {
      let cx = '0'
      let trans = this.$refs.box.style.transform
      if (trans) {
        let mats = trans
          .replace(/\s/g, '')
          .match(/translate3d\(([^,]+),(?:.*?)\)/)
        if (mats && mats.length > 1) {
          cx = mats[1].replace('px', '')
        }
      }
      return Number.isNaN(cx) ? 0 : parseInt(cx)
    },
    getCurrentY() {
      let cy = '0'
      let trans = this.$refs.box.style.transform
      if (trans) {
        let mats = trans
          .replace(/\s/g, '')
          .match(/translate3d\((?:.*?),(.*?),(?:.*?)\)/)
        if (mats && mats.length > 1) {
          cy = mats[1].replace('px', '')
        }
      }
      return Number.isNaN(cy) ? 0 : parseInt(cy)
    },
    centerItem(index) {
      if (index > 0 && index < this.total) {
        this.currentIndex = index
        if (this.direction === 'h') {
          let last = this.maxsw - index * this.itemWidth - this.itemWidth / 2
          this.translateTo(last, 0, 600)
          this.$emit('input', this.currentIndex)
        } else {
          let last = this.maxsh - index * this.itemWidth - this.itemWidth / 2
          this.translateTo(0, last, 600)
          this.$emit('input', this.currentIndex)
        }
      }
    },
    translateTo(x, y, t, immediately) {
      let time = t || 300
      t < 300 && (t = 300)
      t > 1200 && (t = 1200)

      if (immediately) {
        this.$refs.box.style.webkitTransition = 'none'
        this.$refs.box.style.transition = 'none'
      } else {
        this.$refs.box.style.webkitTransition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
        this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
      }
      this.$refs.box.style.webkitTransform = `translate(${x}px, ${y}px)`
      this.$refs.box.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    setCurrent(index) {
      if (index >= 0 && index < this.total) {
        this.centerItem(index)
      }
    },
    setBound() {
      let width = this.$refs.box.offsetWidth
      let halfWidth = this.$el.offsetWidth / 2
      this.ww = this.$el.offsetWidth
      this.maxsw = halfWidth //max scroll width
      this.minsw = this.ww - width - halfWidth //max scroll width
      if (this.minsw > 0) {
        this.minsw = 0
      }
      this.itemWidth = width / this.total
    },
    setBoundVertical() {
      let height = this.$refs.box.offsetHeight
      let halfHeight = this.$el.offsetHeight / 2
      this.hh = this.$el.offsetHeight
      this.maxsh = halfHeight //max scroll width
      this.minsh = this.hh - height - halfHeight //max scroll width
      if (this.minsh > 0) {
        this.minsh = 0
      }
      this.itemWidth = height / this.total
    }
  },

  mounted() {
    this.total = this.$slots.default.length
    if (this.direction == 'h') {
      this.setBound()
      this.setCurrent(this.value)
    } else {
      this.setBoundVertical()
      this.setCurrent(this.value)
    }

    this.$el.addEventListener('touchmove', this.touchmove, { passive: true })
    this.$el.addEventListener('touchend', this.touchend, { passive: true })

    window.addEventListener('mousemove', this.touchmove, false)
    window.addEventListener('mouseup', this.touchend, false)
  },
  destroyed() {
    window.removeEventListener('mousemove', this.touchmove, false)
    window.removeEventListener('mouseup', this.touchend, false)
  }
}
</script>

<style lang="less">
@import './scrollpicker.less';
</style>

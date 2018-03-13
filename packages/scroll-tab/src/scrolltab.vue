<template>
    <div class="wui-scroll-tab">
        <div class="scroll-tab-nav" v-if="showSide">
            <div class="scroll-tab-item" v-for="(item, index) in navList" :class="activeIndex == index ? 'scroll-tab-active' : ''"
               @click="moveHandler(index)" :key="'scrolltab-' + index">
                <div class="scroll-tab-icon" v-if="item.icon"><i :class="'ti-' + item.icon"></i></div>
                <div class="scroll-tab-title">{{item.name}}</div>
            </div>
        </div>
        <div class="scroll-tab-content" ref="scrollView">
            <div class="scroll-tab-container" ref="box" @touchstart="touchstart" @mousedown="touchstart">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'w-scroll-tab',
  props: {
    name: String,
    showSide: {
      type: Boolean,
      default: true
    },
    canScroll: {
      type: Function
    }
  },
  data() {
    return {
      navList: [],
      activeIndex: 0,
      sizeInfo: [],
      maxScrollTop: 0,

      drag: false,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentY: 0,
      offsetH: 0,
      lastTime: 0,
      timer: null,
      hh: 0
    }
  },
  methods: {
    getPanels() {
      return this.$children.filter(
        item => item.$options.name === 'w-scroll-tab-panel'
      )
    },
    touchstart(e) {
      this.drag = true
      let tar = e.targetTouches || [e]
      tar = tar[0]
      this.startX = tar.pageX
      this.startY = tar.pageY
      this.startTime = Date.now()
      this.offsetH = 0
      this.currentY = this.getCurrentY()
      this.hh = this.$refs.scrollView.offsetHeight
      this.maxScrollTop = this.hh - this.$refs.box.offsetHeight
      console.log(
        this.maxScrollTop +
          '-' +
          window.innerHeight +
          '-' +
          this.hh +
          '-' +
          this.$refs.box.offsetHeight
      )
      if (this.maxScrollTop > 0) {
        this.maxScrollTop = 0
      }

      // e.preventDefault();
    },
    touchmove(e) {
      if (this.drag) {
        // if(!this.timer){
        //     this.timer = setTimeout(() => {
        //         this.timer = null;
        //         this.move(e);
        //     }, 16);
        // }
        this.move(e)
      }
    },
    touchend(e) {
      if (this.drag) {
        this.drag = false
        let cury = this.getCurrentY()
        if (cury >= 0) {
          this.bounceBack(0, 0)
        } else if (cury <= this.maxScrollTop) {
          this.bounceBack(0, this.maxScrollTop)
        } else {
          this.momentumMove(e)
        }
      }
    },
    move(e) {
      if (this.drag) {
        if (this.canScroll && !this.canScroll()) {
          return
        }
        let tar = e.targetTouches || [e]
        tar = tar[0]

        let offsetX = tar.pageX - this.startX
        let offsetY = tar.pageY - this.startY

        if (Math.abs(offsetY) > Math.abs(offsetX)) {
          this.offsetH = offsetY
          let lasty = this.currentY + offsetY
          if (lasty >= 0 || lasty <= this.maxScrollTop) {
          } else {
            lasty = this.getDamping(lasty)
            this.translateTo(0, lasty, 0, true)
            this.scrollHandler(lasty)
            e.preventDefault()
            e.stopPropagation()
          }
        }
      }
    },
    momentumMove(e) {
      let difft = Date.now() - this.startTime

      let cury = this.getCurrentY()
      if (difft > 500 || Math.abs(this.offsetH) < 10) {
        return
      } else {
        let v = Math.abs(this.offsetH) / difft
        const a = 0.0002
        let s = v * v / (2 * a) * (this.offsetH < 0 ? -1 : 1)
        let last = Math.round(cury + s)
        let t = Math.round(s / v)

        if (last < this.maxScrollTop) {
          // last = Math.round(this.maxScrollTop - this.hh / 2 * (v / 8))
          last = this.maxScrollTop
        } else if (last > 0) {
          // 向右
          // last = Math.round(this.hh / 2 * (v / 8))
          last = 0
        }
        this.translateTo(0, last, t)
        this.scrollHandler(last)

        setTimeout(() => {
          cury = this.getCurrentY()
          if (cury >= 0) {
            this.bounceBack(0, 0)
          } else if (cury < this.maxScrollTop) {
            this.bounceBack(0, this.maxScrollTop)
          }
        }, t)
      }
    },
    bounceBack(x, y, t) {
      let ti = t || 500
      this.translateTo(x, y, ti)
    },
    setDefault() {
      const panels = this.getPanels()
      let num = 0
      panels.forEach((panel, index) => {
        this.navList.push({
          name: panel.name,
          _uid: index,
          icon: panel.icon
        })
        if (panel.active) {
          this.activeIndex = index
          this.moveHandler(index)
        } else {
          ++num
          if (num >= panels.length) this.activeIndex = 0
        }
      })
      this.$emit('change', this.activeIndex)
    },
    translateTo(x, y, t, immediately) {
      let time = t || 300
      time < 300 && (time = 300)
      time > 600 && (time = 600)

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
    getDamping(s) {
      let max = 0
      let min = this.maxScrollTop
      if (s > max) {
        return Math.round(s / 4)
      } else if (s < min) {
        return Math.round(min - (min - s) / 4)
      } else {
        return s
      }
    },
    moveHandler(index) {
      let size = this.sizeInfo[index]
      let itemOffsetTop = size.offsetTop
      if (index == 0) {
        itemOffsetTop = 0
      }
      if (itemOffsetTop < this.maxScrollTop) {
        itemOffsetTop = this.maxScrollTop
      }
      this.translateTo(0, -itemOffsetTop, 200)
      this.activeIndex = index
      this.$emit('change', this.activeIndex)
    },
    scrollHandler(y) {
      let panels = this.getPanels()
      let panelsLength = panels.length
      let match = false

      this.sizeInfo.forEach((item, index) => {
        if (item && item.offsetTop <= -y) {
          match = true
          this.activeIndex = index
        }
      })
      if (match) {
        this.$emit('change', this.activeIndex)
      } else {
        this.$emit('unsticky')
      }
    },
    setCurrent(index) {
      this.moveHandler(index)
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.translateTo(0, this.maxScrollTop, 0, true)
        this.$emit('change', this.getPanels().length - 1)
      })
    },
    scrollToTop() {
      this.$nextTick(() => {
        this.translateTo(0, 0, 0, true)
        this.$emit('change', 0)
      })
    },
    init() {
      const panels = this.getPanels()
      panels.forEach((panel, index) => {
        this.sizeInfo.push({
          offsetTop: panel.$el.offsetTop,
          offsetHeight: panel.$el.offsetHeight
        })
      })
      let lastChild = this.sizeInfo[this.sizeInfo.length - 1]
      this.hh = this.$refs.scrollView.offsetHeight
      this.maxScrollTop = this.hh - this.$refs.box.offsetHeight
      if (this.maxScrollTop > 0) {
        this.maxScrollTop = 0
      }
      this.setDefault()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.$refs.scrollView.addEventListener('touchmove', this.touchmove, false)
      this.$refs.scrollView.addEventListener('mousemove', this.touchmove, false)

      this.$refs.scrollView.addEventListener('touchend', this.touchend, false)
      this.$refs.scrollView.addEventListener('mouseup', this.touchend, false)
    })
  }
  // updated () {
  //     if (this.maxScrollTop >= 0) {
  //         this.maxScrollTop = this.hh - this.$refs.box.offsetHeight;
  //     }
  // }
}
</script>

<style lang="less">
@import './scrolltab.less';
</style>

require('./infinitescroll.less')

export default {
  name: 'w-infinite-scroll',
  data () {
    return {
      drag: false,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      offsetW: 0,
      offsetH: 0,
      currentPage: 0,
      pageInfo: [],
      lastCount: 0,
      toBottom: false,
      ww: 0,
      hh: 0
    }
  },
  props: {
    direction: {
      type: String,
      default: 'h'
    },
    containsIframe: {
      type: Boolean,
      default: false
    },
    pageCount: {
      type: Number,
      default: Infinity,
      required: true
    },
    canScroll: {
      type: Function
    }
  },
  methods: {
    touchstart (e) {
      this.drag = true
      let tar = e.touches || [e]
      tar = tar[0]

      this.startX = tar.pageX
      this.startY = tar.pageY
      this.startTime = Date.now()
      this.offsetW = 0
      this.offsetH = 0
      this.currentX = this.getCurrentX()
      this.currentY = this.getCurrentY()
    },
    touchmove (e) {
      if (this.drag) {
        let tar = e.changedTouches || [e]
        tar = tar[0]
        
        if (this.direction === 'h') {
          let offsetX = tar.pageX - this.startX
          let offsetY = tar.pageY - this.startY

          if (Math.abs(offsetX) > Math.abs(offsetY)) {
            this.offsetW = offsetX
            let lastx = this.currentX + offsetX

            if (lastx > 0 || lastx < this.minsw) {
            } else {
              this.translateTo(lastx, 0,  0, true)
              e.preventDefault()
              e.stopPropagation()
            }
          }
        } else {
          if (this.canScroll && !this.canScroll()) {
            return;
          }
          let offsetX = tar.pageX - this.startX
          let offsetY = tar.pageY - this.startY

          if (Math.abs(offsetY) > Math.abs(offsetX)) {
            this.offsetH = offsetY
            let lasty = this.currentY + offsetY
            if (lasty > 0 || lasty < this.minsh ) {
            } else {
                this.translateTo(0, lasty, 0, true)
                e.preventDefault()
                e.stopPropagation()
            }
          }
        }
      }
    },
    touchend (e) {
      if (this.drag) {
        this.drag = false
        
        if (this.direction === 'h') {
          let curx = this.getCurrentX()
          if (curx > this.maxsw) {
            this.bounceBack(this.maxsw, 0, 600)
          } else if (curx < this.minsw) {
            this.bounceBack(this.minsw, 0, 600)
          } else {
            this.momentumMove(e)
          }
        } else {
          let cury = this.getCurrentY()
          if (cury > this.maxsh) {
            this.bounceBack(0, this.maxsh)
          } else if (cury < this.minsh) {
            this.bounceBack(0, this.minsh)
          } else {
            this.momentumMove(e)
          }
        }
      }
    },
    bounceBack (x, y, t) {
      let ti = t || 300
      this.translateTo(x, y, ti)
    },
    getDamping (s) {
      let max = 0
      let min = this.minsw
      if (this.direction === 'v') {
        min = this.minsh
      }
      if (s > max) {
        return Math.round(s/4)
      } else if (s < min) {
        return Math.round(min - (min - s ) / 4)
      } else {
        return s
      }
    },
    getCurrentX () {
      let cx = '0'
      let trans = this.$refs.box.style.transform
      if (trans) {
        let mats = trans.replace(/\s/g, '').match(/translate3d\(([^,]+),(?:.*?)\)/)
        if (mats && mats.length > 1) {
          cx = mats[1].replace('px', '')
        }
      }
      return Number.isNaN(cx) ? 0 : parseInt(cx)
    },
    getCurrentY () {
      let cy = '0'
      let trans = this.$refs.box.style.transform
      if (trans) {
        let mats = trans.replace(/\s/g, '').match(/translate3d\((?:.*?),(.*?),(?:.*?)\)/)
        if (mats && mats.length > 1) {
          cy = mats[1].replace('px', '')
        }
      }
      return Number.isNaN(cy) ? 0 : parseInt(cy)
    },
    momentumMove (e) {
      let difft = Date.now() - this.startTime
      if (this.direction === 'h') {
        let curx = this.getCurrentX()
        this.stepOneItem(curx, 0, 300)
      } else {
        let cury = this.getCurrentY()
        this.stepOneItem(0, cury, 300)
      }
    },
    stepOneItem (curx, cury, t) {
      let lastP = this.currentPage
      if (this.direction === 'h') {
        if (Math.abs(this.offsetW) >= this.ww / 6) {
          let last
          if (this.offsetW < 0) {
            if (this.updatePageIndex('forward')) {
              last = -this.currentPage * this.ww
            } else {
              let back = -lastP * this.ww
              this.translateTo(back, 0, t)
            }
          } else {
            if (this.updatePageIndex('backward')) {
              last = -this.currentPage * this.ww
            } else {
              let back = -lastP * this.ww
              this.translateTo(back, 0, t)
            }
          }
          this.translateTo(last, 0, t)
          this.$emit('change', this.currentPage, lastP)
        } else {
          let back = -lastP * this.ww
          this.translateTo(back, 0, t)
        }
      } else {
        if (Math.abs(this.offsetH) >= this.hh / 6) {
          let last
          if (this.offsetH < 0) {
            if (this.updatePageIndex('forward')) {
              last = -this.currentPage * this.hh
            } else {
              let back = -lastP * this.hh
              this.translateTo(0, back, t)
            }
          } else {
            if (this.updatePageIndex('backward')) {
              last = -this.currentPage * this.hh
              this.scrollToBottom()
            } else {
              let back = -lastP * this.hh
              this.translateTo(0, back, t)
            }
          }
          this.translateTo(0, last, t)
          this.$emit('change', this.currentPage, lastP)
        } else {
          let back = -lastP * this.hh
          this.translateTo(0, back, t)
        }
      }
    },
    updatePageIndex (dir) {
      if (dir === 'forward') {
        let next = this.currentPage + 1
        if (next >= this.pageCount) {
          return false
        } else {
          this.currentPage = next
        }
      } else if (dir === 'backward') {
        let prev = this.currentPage - 1
        if (prev < 0) {
          return false
        } else {
          this.currentPage = prev
        }
      }
      return true
    },
    setCurrent (index) {
      this.$nextTick(() => {
        if (index >= 0 && index < this.pageCount) {
          this.currentPage = index
          if (this.direction === 'h') {
            let last = -index * this.ww
            this.translateTo(last, 0, 300)
          } else {
            let last = -index * this.hh
            this.translateTo(0, last, 300)
          }
        }
      })
    },
    translateTo (x, y, t, immediately) {
      let time = t || 300
      time < 300 && (time = 300);
      time > 600 && (time = 600);
 
      if (immediately) {
          this.$refs.box.style.webkitTransition = 'none'
          this.$refs.box.style.transition = 'none'
      } else {
          // this.$refs.box.style.webkitTransition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
          // this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
          this.$refs.box.style.webkitTransition = `${time}ms all linear`
          this.$refs.box.style.transition = `${time}ms all linear`
          // this.$refs.box.style.webkitTransition = `${time}ms all cubic-bezier(0.7, 0, 1, 1)`
          // this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.7, 0, 1, 1)`
          // this.$refs.box.style.webkitTransition = `${time}ms all cubic-bezier(0, 0, 0, 0.7)`
          // this.$refs.box.style.transition = `${time}ms all cubic-bezier(0, 0, 0, 0.7)`
      }
      this.$refs.box.style.webkitTransform = `translate(${x}px, ${y}px)`
      this.$refs.box.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    scrollToBottom () {
      this.toBottom = true
    },
    checkScroll () {
      if (this.offsetH > 0) {
        // down
        if (this.currentPage === 0) {
          return false
        }
        if (this.currentPage < this.pageCount) {
          return true
        }
      }  else {
        // up
        if (this.currentPage >= this.pageCount) {
          return false
        }
        if (this.currentPage > 0) {
          return true
        }
      }
      return false
    }
  },
  render (h) {
    if (!this.pageInfo[this.currentPage]) {
      this.pageInfo[this.currentPage] = ({
        startIndex: this.currentPage - 1 < 0 ? 0 : this.currentPage - 1,
        endIndex: this.currentPage + 1 >= this.pageCount ? this.pageCount - 1 : this.currentPage + 1
      })
    }

    let size, cls, sly
    if (this.direction === 'h') {
      size = this.ww
      cls = 'wui-infinite-scroll-h'
      sly = {width: this.ww + 'px'}
    } else if (this.direction === 'v') {
      size = this.hh
      cls = 'wui-infinite-scroll-v'
      sly = {height: this.hh + 'px'}
    }

    if (size) {
      return (
        <div class={cls}>
          <div class='wui-infinite-list' ref='list'>
            <div class='wui-infinite-container' ref='box'>
              {
                this.$slots.default.map((vnode, i) => {
                  let pi = this.pageInfo[this.currentPage]
                  if (pi && vnode.tag) {
                    if (i >= pi.startIndex && i <= pi.endIndex) {
                      return (
                        <div class='wui-infinite-item' style={sly}>
                          { vnode }
                          {this.containsIframe ? <div class='wui-infinite-item-mask' /> : ''}
                        </div>
                      )
                    }
                  }
                  return <div class='wui-infinite-item' style={sly}></div>
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div class={cls}>
          <div class='wui-infinite-list' ref='list'>
            <div class='wui-infinite-container' ref='box'></div>
          </div>
        </div>
      )
    }
  },
  updated () {
    if (this.toBottom) {
      let child = this.$slots.default[this.currentPage]
      child.children.forEach(item => {
        let ins = item.componentInstance
        if (ins && ins.$options.name === 'w-scroll-tab') {
          ins.scrollToBottom()
          return false
        }
      })
      this.toBottom = false
    }
  },
  mounted () {
    this.$nextTick(() => {

      this.ww = this.$el.offsetWidth
      this.hh = this.$el.offsetHeight
      this.maxsw = 0
      this.maxsh = 0
      this.minsw = (1 - this.pageCount) * this.ww
      this.minsh = (1 - this.pageCount) * this.hh

      this.$el.addEventListener('touchstart', this.touchstart, {passive: true})
      this.$el.addEventListener('mousedown', this.touchstart, {passive: true})

      this.$el.addEventListener('touchmove', this.touchmove, false)
      this.$el.addEventListener('mousemove', this.touchmove, false)

      this.$el.addEventListener('touchend', this.touchend, {passive: true})
      this.$el.addEventListener('mouseup', this.touchend, {passive: true})

    })
  },
  destroyed () {
    // window.removeEventListener('touchend', this.touchmove, false)
    // window.removeEventListener('mouseup', this.touchend, false)
  }
}


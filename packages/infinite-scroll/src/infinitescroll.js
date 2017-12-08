require('./infinitescroll.less')

export default {
  name: 'w-infinite-scroll',
  data () {
    return {
      drag: false,
      startX: 0,
      startTime: 0,
      currentX: 0,
      offsetW: 0,
      lastTime: 0,
      timer: null,
      currentPage: 0,
      pageInfo: [],
      lastCount: 0
    }
  },
  props: {
    direction: {
      type: String,
      default: 'horizental'
    },
    scrollMode: {
      type: String,
      default: 'fullscreen'
    },
    containsIframe: {
      type: Boolean,
      default: false
    },
    pageChange: {
      type: Function
    },
    pageCount: {
      type: Number,
      default: Infinity,
      required: true
    }
  },
  methods: {
    touchstart (e) {
      this.drag = true
      let tar = e.touches || [e]
      tar = tar[0]
      this.startX = tar.pageX
      this.startTime = Date.now()
      this.offsetW = 0
      this.currentX = this.getCurrentX()

      this.width = this.$refs.box.offsetWidth
      this.ww = this.$el.offsetWidth
      this.maxsw = 0 // max scroll width
      this.minsw = this.ww - this.width   // max scroll width

      e.preventDefault()
      e.stopPropagation()
    },
    touchmove (e) {
      if (this.drag) {
        let now = Date.now()
        if (this.lastTime) {
          let remaining = 50 - now + this.lastTime
          if (remaining <= 0) {
            this.lastTime = now
            clearInterval(this.timer)
            this.move(e)
          } else {
            clearInterval(this.timer)
            this.timer = setTimeout(this.move.bind(this, e), remaining)
          }
        } else {
          this.lastTime = now
          this.move(e)
        }
        e.preventDefault()
        e.stopPropagation()
      }
    },
    touchend (e) {
      if (this.drag) {
        this.drag = false
        let curx = this.getCurrentX()
        if (curx > this.maxsw) {
          this.bounceBack(this.maxsw)
        } else if (curx < this.minsw) {
          this.bounceBack(this.minsw)
        } else {
          this.momentumMove(e)
        }
      }
    },
    move (e) {
      if (this.drag) {
        let tar = e.changedTouches || [e]
        tar = tar[0]

        let offsetX = tar.pageX - this.startX
        this.offsetW = offsetX
        let lastx = this.currentX + offsetX

        this.translateTo(lastx, 0, true)
      }
    },
    bounceBack (pos, t) {
      let ti = t || 500
      this.translateTo(pos, ti)
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
    momentumMove (e) {
      let difft = Date.now() - this.startTime
      let curx = this.getCurrentX()

      if (difft > 500 || Math.abs(this.offsetW) < 10) {
        if (this.scrollMode === 'fullscreen') {
          this.stepOneItem(curx, 300)
        }
      } else {
        let v = Math.abs(this.offsetW) / difft
        const a = 0.0004
        let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
        let t = Math.round(s / v)

        if (this.scrollMode === 'free') {
          let last = Math.round(curx + s)
          if (last < this.minsw) {
            last = Math.round(this.minsw - this.ww / 2 * (v / 8))
            t = Math.round(Math.abs(last - curx) / v)
          } else if (last > 0) {
            // 向右
            last = Math.round(this.ww / 2 * (v / 8))
            t = Math.round(Math.abs(last - curx) / v)
          }
          this.translateTo(last, t)
        } else if (this.scrollMode === 'fullscreen') {
          this.stepOneItem(curx, 300)
        }

        setTimeout(() => {
          curx = this.getCurrentX()
          if (curx > this.maxsw) {
            this.bounceBack(this.maxsw)
          } else if (curx < this.minsw) {
            this.bounceBack(this.minsw)
          }
        }, t)
      }
    },
    stepOneItem (curx, t) {
      let lastP = this.currentPage
      if (Math.abs(this.offsetW) >= this.ww / 4) {
        let last
        if (this.offsetW < 0) {
          if (this.updatePageIndex('forward')) {
            last = -this.currentPage * this.ww
          } else {
            let back = -lastP * this.ww
            this.translateTo(back, t)
          }
        } else {
          if (this.updatePageIndex('backward')) {
            last = -this.currentPage * this.ww
          } else {
            let back = -lastP * this.ww
            this.translateTo(back, t)
          }
        }
        this.translateTo(last, t)
        this.$emit('change', this.currentPage, lastP)
      } else {
        let back = -lastP * this.ww
        this.translateTo(back, t)
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
          let last = -index * this.ww
          this.translateTo(last, 600)
        }
      })
    },
    translateTo (pos, t, immediately) {
      let time = t || 300
      if (immediately) {
        this.$refs.box.style.transition = 'none'
      } else {
        this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
      }
      this.$refs.box.style.transform = `translate3d(${pos}px, 0, 0)`
    }
  },
  render (h) {
    if (!this.pageInfo[this.currentPage]) {
      this.pageInfo[this.currentPage] = ({
        startIndex: this.currentPage - 1 < 0 ? 0 : this.currentPage - 1,
        endIndex: this.currentPage + 1 >= this.pageCount ? this.pageCount - 1 : this.currentPage + 1
      })
    }
    if (this.scrollMode === 'fullscreen' && this.ww) {
      return (
        <div class='wui-infinite-scroll'>
          <div class='wui-infinite-list' ref='list'>
            <div class='wui-infinite-container' ref='box'>
              {
                this.$slots.default.map((vnode, i) => {
                  let pi = this.pageInfo[this.currentPage]
                  if (pi && vnode.tag) {
                    if (i >= pi.startIndex && i <= pi.endIndex) {
                      return (
                        <div class='wui-infinite-item' style={{width: this.ww + 'px'}}>
                          { vnode }
                          {this.containsIframe ? <div class='wui-infinite-item-mask' /> : ''}
                        </div>
                      )
                    }
                  }
                  return <div class='wui-infinite-item' style={{width: this.ww + 'px'}}></div>
                })
              }
            </div>
          </div>
        </div>
      )
    }

    if (this.scrollMode === 'free') {
      return (
        <div class='wui-infinite-scroll'>
          <div class='wui-infinite-list' ref='list'>
            <div class='wui-infinite-container' ref='box'>
              {
                this.$slots.default.map((vnode, i) => {
                  let pi = this.pageInfo[this.currentPage]
                  if (i >= pi.startIndex && i < pi.endIndex) {
                    const vnodeEle = vnode.tag ? vnode : null
                    return (
                      <div class='wui-infinite-item'>
                        { vnodeEle }
                        {this.containsIframe ? <div class='wui-infinite-item-mask' /> : ''}
                      </div>
                    )
                  } else {
                    return <div class='wui-infinite-item'></div>
                  }
                })
              }
            </div>
          </div>
        </div>
      )
    }

    return (
      <div class='wui-infinite-scroll'>
        <div class='wui-infinite-list' ref='list'>
          <div class='wui-infinite-container' ref='box'>
          </div>
        </div>
      </div>
    )
  },
  mounted () {
    this.ww = this.$el.offsetWidth

    this.$refs.box.addEventListener('touchstart', this.touchstart, true)
    this.$refs.box.addEventListener('mousedown', this.touchstart, true)
    window.addEventListener('touchmove', this.touchmove, true)
    window.addEventListener('touchend', this.touchend, true)
    window.addEventListener('mousemove', this.touchmove, true)
    window.addEventListener('mouseup', this.touchend, true)
    this.$forceUpdate()
  },
  destroyed () {
    window.removeEventListener('touchmove', this.touchmove, true)
    window.removeEventListener('touchend', this.touchend, true)
    window.removeEventListener('mousemove', this.touchmove, true)
    window.removeEventListener('mouseup', this.touchend, true)
  }
}

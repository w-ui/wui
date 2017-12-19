require('./infinitelist.less')

export default {
  name: 'w-infinite-scroll',
  data () {
    return {
      drag: false,
      startY: 0,
      startTime: 0,
      currentY: 0,
      offsetH: 0,
      currentPage: 0,
      pageInfo: [],
      sizeInfo: [],
      lastCount: 0,
      ww: 0,
      hh: 0
    }
  },
  props: {
    containsIframe: {
      type: Boolean,
      default: false
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

      this.startY = tar.pageY
      this.startTime = Date.now()
      this.offsetH = 0
      this.currentY = this.getCurrentY()

      this.hh = this.$el.offsetHeight
      let height = this.$refs.box.offsetHeight
      this.maxsh = 0
      this.minsh = this.hh - height
      e.preventDefault()
      e.stopPropagation()
    },
    touchmove (e) {
      if (this.drag) {
        let tar = e.changedTouches || [e]
        tar = tar[0]

        let offsetY = tar.pageY - this.startY
        this.offsetH = offsetY
        let lasty = this.currentY + offsetY
        this.translateTo(0, lasty, true)
        e.preventDefault()
      }
    },
    touchend (e) {
      if (this.drag) {
        this.drag = false
        let cury = this.getCurrentY()
        if (cury > this.maxsh) {
          this.prevPage()
        } else if (cury < this.minsh) {
          this.nextPage()
        } else {
          this.momentumMove(e)
        }
      }
    },
    bounceBack (x, y, t) {
      let ti = t || 500
      this.translateTo(x, y, ti)
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

      let cury = this.getCurrentY()
      if (difft > 500 || Math.abs(this.offsetH) < 10) {
        // this.slotClick(e)
        return
      } else {
        let v = Math.abs(this.offsetH) / difft
        const a = 0.0002
        let s = v * v / (2 * a) * (this.offsetH < 0 ? -1 : 1)
        let last = Math.round(cury + s)
        let t = Math.round(s / v)

        if (last < this.minsh) {
          last = Math.round(this.minsh - this.hh / 2 * (v / 8))
        } else if (last > 0) {
          // 向右
          last = Math.round(this.hh / 2 * (v / 8))
        }
        t < 300 && (t = 300)
        t > 1200 && (t = 1200)
        this.translateTo(0, last, t)

        setTimeout(() => {
          cury = this.getCurrentY()
          if (cury > this.maxsh) {
            this.bounceBack(0, this.maxsh)
          } else if (cury < this.minsh) {
            this.bounceBack(0, this.minsh)
          }
        }, t)
      }
    },
    prevPage () {
      if (this.currentPage - 1 > -1) {
        this.currentPage--
        this.$emit('change', this.currentPage, this.currentPage + 1)
      } else {
        this.bounceBack(0, this.maxsh)
      }
    },
    nextPage () {
      if (this.currentPage + 1 < this.pageCount) {
        let cury = this.getCurrentY()
        if (cury < this.minsh - 40) {
          this.bounceBack(0, this.minsh - 40)
        }
        this.$refs.bottomLoader.style.bottom = 0
        this.currentPage++
        this.$emit('change', this.currentPage, this.currentPage - 1)
        setTimeout(() => {
          this.bounceBack(0, this.minsh)
          this.$refs.bottomLoader.style.bottom = '-40px'
        }, 1000)
      } else {
        this.bounceBack(0, this.minsh)
      }
    },
    setCurrent (index) {
      this.$nextTick(() => {
        if (index >= 0 && index < this.pageCount) {
          this.currentPage = index
          if (this.direction === 'h') {
            let last = -index * this.ww
            this.translateTo(last, 0, 600)
          } else {
            let last = -index * this.hh
            this.translateTo(0, last, 600)
          }
        }
      })
    },
    translateTo (x, y, t, immediately) {
      let time = t || 300
      if (immediately) {
        this.$refs.box.style.transition = 'none'
      } else {
        this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
      }
      this.$refs.box.style.transform = `translate3d(${x}px, ${y}px, 0)`
    },
    checkScroll (e) {
      let ctar = e.currentTarget
      let tar = e.target
      while (tar.parentNode && tar.parentNode !== ctar) {
        tar = tar.parentNode
      }
      if (tar) {
        let sh = tar.scrollHeight
        let oh = tar.offsetHeight
        if (this.direction === 'v') {
          if (e.pageY < this.startY) {
            if (sh > oh && tar.scrollTop < sh - oh) {
              return false
            }
          } else {
            if (tar.scrollTop > 0) {
              return false
            }
          }
        }
        return true
      }
    }
  },
  render (h) {
    if (this.$slots.default && this.$slots.default.length > 0) {
      let count = this.$slots.default.length
      if (count > this.lastCount) {
        if (!this.pageInfo[this.currentPage]) {
          this.pageInfo[this.currentPage] = ({
            startIndex: this.lastCount,
            endIndex: count
          })
          this.lastCount = count
        }
      }
      if (this.hh) {
        return (
          <div class='wui-infinite-list-v'>
            <div class='wui-infinite-list-wrapper' ref='list'>
              <div class='wui-infinite-list-container' ref='box'>
                {
                  this.$slots.default.map((vnode, i) => {
                    let pi = this.pageInfo[this.currentPage]
                    let si = this.sizeInfo[this.currentPage]
                    if (pi && vnode.tag) {
                      if (i >= pi.startIndex && i <= pi.endIndex) {
                        return (
                          <div class='wui-infinite-list-item'>
                            { vnode }
                            {this.containsIframe ? <div class='wui-infinite-list-item-mask' /> : ''}
                          </div>
                        )
                      }
                    }
                    if (si && si[i]) {
                      return <div class='wui-infinite-list-item' style={{height: si[i].h + 'px'}}></div>
                    }
                    return <div class='wui-infinite-list-item'></div>
                  })
                }
              </div>
              <div class='page-loader-bottom' ref='bottomLoader'>
                <slot name='loader-bottom'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='40px' height='40px' viewBox='0 0 50 50'>
                    <path fill='#000' d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'>
                      <animateTransform attributeType='xml'
                        attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/>
                    </path>
                  </svg>
                </slot>
              </div>
            </div>
          </div>
        )
      }
    }
    return (
      <div class='wui-infinite-list-v'>
        <div class='wui-infinite-list-wrapper' ref='list'>
          <div class='wui-infinite-list-container' ref='box'></div>
        </div>
      </div>
    )
  },
  updated () {
    let children = this.$refs.box.children
    let p = this.pageInfo[this.currentPage]
    
    if (!this.sizeInfo[this.currentPage]) {
      this.sizeInfo[this.currentPage] = []
      let si = this.sizeInfo[this.currentPage];
      for (let i=p.startIndex; i<p.endIndex; i++) {
        let child = children[i]
        si.push({h: child.offsetHeight});
      }
    }
  },
  mounted () {
    this.hh = this.$el.offsetHeight
    this.$refs.box.addEventListener('touchstart', this.touchstart, false)
    this.$refs.box.addEventListener('mousedown', this.touchstart, false)
    this.$refs.box.addEventListener('touchmove', this.touchmove, false)
    this.$refs.box.addEventListener('mousemove', this.touchmove, false)
    window.addEventListener('touchend', this.touchend, false)
    window.addEventListener('mouseup', this.touchend, false)

    this.$nextTick(() => {
      this.hh = this.$el.offsetHeight

      let children = this.$refs.box.children
      let p = this.pageInfo[this.currentPage]
      if (!this.sizeInfo[this.currentPage]) {
        this.sizeInfo[this.currentPage] = []
        let si = this.sizeInfo[this.currentPage];
        for (let i=p.startIndex; i<p.endIndex; i++) {
          let child = children[i]
          si.push({h: child.offsetHeight});
        }
      }
    })
    // window.addEventListener('touchmove', this.touchmove, true)
    // window.addEventListener('touchend', this.touchend, true)
    // window.addEventListener('mousemove', this.touchmove, true)
    // window.addEventListener('mouseup', this.touchend, true)
  },
  destroyed () {
    // window.removeEventListener('touchmove', this.touchmove, true)
    // window.removeEventListener('touchend', this.touchend, true)
    window.removeEventListener('mousemove', this.touchmove, false)
    window.removeEventListener('mouseup', this.touchend, false)
  }
}

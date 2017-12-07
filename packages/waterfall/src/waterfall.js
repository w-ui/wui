import './waterfall.less'
import { addClass, removeClass } from 'src/utils'

export default {
  props: {
    items: {
      type: Array
    },
    columns: {
      default: 2,
      type: Number
    },
    enterClass: {
      type: String
    }
  },
  data () {
    let colData = []
    for (let i = 0; i < this.columns; i++) {
      colData.push([])
    }
    return {
      columnData: colData,
      currentIndex: 0,
      currentColumn: 0,
      pageIndex: 0,
      columnHeight: colData.slice(0),
      columnMap: {},
      screenHeight: window.innerHeight,
      loadedAll: false
    }
  },
  created () {
  },
  mounted () {
    let me = this
    let move = this.getRandomName()
    let end = this.getRandomName()
    let scroll = this.getRandomName()
    var moveFlag = false
    var timer

    window[move] = function (e) {
      timer && clearTimeout(timer)
      moveFlag = true
      timer = setTimeout(window[end], 100)
    }
    window[scroll] = function (e) {
      timer && clearTimeout(timer)
      moveFlag = true
      timer = setTimeout(window[end], 100)
    }
    window[end] = function (e) {
      if (moveFlag) {
        moveFlag = false
        me.checkPage()
      }
    }
    document.removeEventListener('touchmove', window[move])
    document.removeEventListener('touchend', window[end])
    document.addEventListener('touchmove', window[move], false)
    document.addEventListener('touchend', window[end], false)
    // document.body.addEventListener('scroll', window[move], false)
    window.addEventListener('scroll', window[move], false)
    this.nextPage()
  },
  watch: {
    currentIndex (val, oldVal) {
      (() => {
        this.$nextTick(() => {
          let vnode = this.$slots.default[val - 1]
          addClass(vnode.elm, this.enterClass + '-before')
          let imgs = vnode.elm.querySelectorAll('img')
          if (imgs && imgs.length > 0) {
            imgs = Array.prototype.slice.call(imgs, 0)
            Promise.all(imgs.map(img => {
              return new Promise((resolve, reject) => {
                let timer = setTimeout(() => {
                  resolve(20)
                }, 1000)
                img.onload = () => {
                  clearTimeout(timer)
                  resolve(img.height)
                  removeClass(vnode.elm, this.enterClass + '-before')
                  addClass(vnode.elm, this.enterClass + '-after')
                }
                img.onerror = () => {
                  clearTimeout(timer)
                  resolve(20)
                }
              })
            })).then((data) => {
              this.computeHeight(val - 1)
            })
          } else {
            this.computeHeight(val - 1)
          }
        })
      })(val)
    }
  },
  render (h) {
    return (
      <div class='wui-waterfall'>
        <div class='waterfall-content'>
          {
            this.columnData.map((item, i) => (
              <div class='wui-waterfall-column' key={'column-' + i}>
                {
                  item.map(itm => this.$slots.default[itm])
                }
              </div>
            ))
          }
        </div>
        {this.loadedAll ? (<div class='no-more'>- 没有更多了 -</div>) : ''}
      </div>
    )
  },
  methods: {
    computeHeight (index) {
      let col = this.columnMap[index]
      let vnode = this.$slots.default[index]
      let h = vnode.elm.offsetHeight
      this.columnHeight[col] = parseInt(this.columnHeight[col]) + parseInt(h)
      let [min, minCol] = this.getColumn()
      this.currentColumn = minCol
      if (min > this.pageIndex * this.screenHeight) {
      } else {
        this.next()
      }
    },
    getRandomName () {
      return 'func_' + (Math.random() * 1000000).toString(32) + '_' + Date.now().toString(32)
    },
    getColumn () {
      let min = this.columnHeight[0]
      let minColumn = 0
      for (let i = 0; i < this.columnHeight.length; i++) {
        if (this.columnHeight[i] < min) {
          min = this.columnHeight[i]
          minColumn = i
        }
      }
      return [min, minColumn]
    },
    next () {
      if (!this.loadedAll && this.currentIndex < this.$slots.default.length) {
        this.columnData[this.currentColumn].push(this.currentIndex)
        this.columnMap[this.currentIndex] = this.currentColumn
        this.currentIndex++
      } else {
        this.loadedAll = true
      }
    },
    nextPage () {
      this.pageIndex++
      this.next()
    },
    checkPage () {
      let st = document.documentElement.scrollTop || document.body.scrollTop
      if (st - 50 > (this.pageIndex - 1) * this.screenHeight) {
        this.nextPage()
      }
    }
  }
}

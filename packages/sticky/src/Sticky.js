
import {getScrollview, getZIndex} from 'src/utils'
import './sticky.less'

export default {
  name: 'w-sticky',
  props: {
    top: {
      type: [String],
      default: '0'
    },
    name: String
  },
  data () {
    return {
      child: null,
      stickyHeight: 0,
      parsedTop: parseFloat(this.top, 10),
      position: 'static',
      zIndex: getZIndex(),
      appendFlag: false
    }
  },
  methods: {
    scrollHandler () {
      let offset = this.$el.getBoundingClientRect()
      let poffset = this.scroller.getBoundingClientRect()
      if (offset.top - poffset.top <= this.parsedTop) {
        this.appendToBoby(offset, poffset)
      } else {
        this.removeFromBody()
      }
    },
    appendToBoby (rect, rectp) {
      if (!this.appendFlag) {
        this.body.style.cssText = `display: block; position: fixed; left: ${rect.left}px; top: ${rectp.top}px; width: ${rect.width}px; height: ${rect.height}px`;
        this.body.appendChild(this.child)
        this.appendFlag = true
      }
    },
    removeFromBody () {
      if (this.appendFlag) {
        this.$el.appendChild(this.child)
        this.appendFlag = false
      }
    },
    checkSupport () {
      let el = document.createElement('a')
      let mStyle = el.style
      mStyle.cssText = 'position:sticky; position:-webkit-sticky;'
      return mStyle.position.indexOf('sticky') !== -1
    },
    removeSticky () {
      if (this.appendFlag) {
        this.$el.appendChild(this.child)
        this.appendFlag = false
      }
    }
  },
  render (h) {
    return (
      <div class='sticky'
        style={{
          top: this.top,
          bottom: this.bottom,
          zIndex: this.zIndex
        }}
      >
        {this.$slots.default}
      </div>
    )
  },
  mounted () {
    // 保证 this.$el 已经插入文档
    this.$nextTick(() => {
      let child = this.$el.firstElementChild
      if (!this.checkSupport() && child) {
        this.child = child
        let height = this.$el.offsetHeight
        
        let div = document.createElement('div')
        div.className = "wui-sticky-4Ho3qRy8-wrapper"
        document.body.appendChild(div);
        this.body = div

        this.$el.style.height = height + 'px'
        this.scroller = getScrollview(this.$el)
        this.scroller.addEventListener('scroll', this.scrollHandler, false)
        window.addEventListener('touchmove', this.scrollHandler, false)
      }
    })
  },
  destroyed () {
    this.body.remove()
    window.removeEventListener('scroll', this.scrollHandler, false)
    window.addEventListener('touchmove', this.scrollHandler, false)
  }
}

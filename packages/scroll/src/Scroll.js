require('./scroll.less')

export default {
  name: 'w-scroll',
  data () {
    return {
      scrollerStyle: {
        transform: 'translate(0px, 0px) translateZ(0px)',
        transitionDuration: '0ms'
      },
      transitionDuration: 0,
      scrollTime: 600,
      timer: null,
      maxScrollX: 0,
      maxScrollY: 0,
      startX: 0,
      startY: 0,
      distX: 0,
      distY: 0,
      x: 0,
      y: 0,
      directionX: 0,
      directionY: 0,
      endTime: 0,
      dragFlag: false
    }
  },
  props: {
    scrollDirection: {
      type: String,
      default: 'horizontal' // 滑动方向  h为水平， v为垂直方向
    },
    refreshStatus: {
      // 判断是否需要重新更新组件
      type: [Boolean, Number]
    },
    activeTargetPos: {
      type: String,
      default: 'center' // active dom位置
    },
    moreShadow: {
      type: Boolean,
      default: false // 阴影部分展示
    },
    scrollToEle: {
      // active dom
      type: HTMLDivElement,
      default: undefined
    },
    moveCallback: {
      // 滚动时回调
      type: Function,
      default: i => 0
    },
    moveEndback: {
      // 滚动停止时时回调
      type: Function,
      default: i => 0
    },
    beyondFn: {
      // 滚动时超出更多时回调
      type: Function,
      default: i => 0
    },
    cancelBeyondFn: {
      // 滚动时取消超出更多时回调
      type: Function,
      default: i => 0
    },
    afterRelease: {
      // 列表尾部滚动完成回调
      type: Function,
      default: i => 0
    },
    beforeRelease: {
      // 列表头部滚动完成回调
      type: Function,
      default: i => 0
    }
  },
  watch: {
    refreshStatus () {
      this.$nextTick(() => {
        this.refresh()
      })
    },
    scrollToEle () {
      const { scrollToEle, activeTargetPos } = this
      let pos = this.getOffset(scrollToEle)
      pos.left -= this.wrapperOffset.left
      pos.top -= this.wrapperOffset.top
      const elRect = this.getRect(scrollToEle)
      const wrapperRect = this.getRect(this.wrapper)
      let offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2)
      let offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2)

      switch (activeTargetPos) {
        case 'left':
        case 'top':
          offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 5)
          offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 5)
          break
        case 'right':
        case 'bottom':
          offsetX = Math.round(elRect.width / 2 - wrapperRect.width * 2 / 3)
          offsetY = Math.round(elRect.height / 2 - wrapperRect.height * 2 / 3)
          break
        case 'center':
          offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2)
          offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2)
          break
        default:
          offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2)
          offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2)
      }

      pos.left -= offsetX || 0
      pos.top -= offsetY || 0

      pos.left = pos.left > 0
        ? 0
        : pos.left < this.maxScrollX ? this.maxScrollX : pos.left
      pos.top = pos.top > 0
        ? 0
        : pos.top < this.maxScrollY ? this.maxScrollY : pos.top
      this.scrollTo(pos.left, pos.top, this.scrollTime, this.EASEING.circular)
    }
  },
  methods: {
    momentum (current, start, time, lowerMargin, wrapperSize, deceleration) {
      // 距离 & 运动时间处理
      let distance = current - start
      const speed = Math.abs(distance) / time
      // 减速变量
      deceleration = deceleration === undefined ? 0.0006 : deceleration
      // 减速路程
      let destination = current +
        speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1)
      // 持续时间 速度消减至0所需时间
      let duration = speed / deceleration
      if (destination < lowerMargin) {
        destination = wrapperSize
          ? lowerMargin - wrapperSize / 2.5 * (speed / 8)
          : lowerMargin
        // destination = Math.max(destination, lowerMargin);
        distance = Math.abs(destination - current)
        duration = distance / speed
      } else if (destination > 0) {
        // 向右
        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0
        // destination = 0;
        distance = Math.abs(current) + destination
        duration = distance / speed
      }
      // 获得最终移动距离 & 持续时间
      return {
        destination: Math.round(destination),
        duration: duration
      }
    },
    getOffset (el) {
      let left = -el.offsetLeft
      let top = -el.offsetTop

      while (el === el.offsetParent) {
        left -= el.offsetLeft
        top -= el.offsetTop
      }

      return {
        left: left,
        top: top
      }
    },
    getRect (el) {
      return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    refresh () {
      const scroller = this.$refs.scroll
      if (!scroller) {
        return
      }
      const wrapper = this.$refs.scroll.parentElement
      this.scroller = scroller
      this.wrapper = wrapper
      // offset
      this.wrapperOffset = this.getOffset(this.wrapper)
      // wrapper
      this.wrapperWidth = wrapper.clientWidth
      this.wrapperHeight = Math.min(wrapper.clientHeight, wrapper.parentElement && wrapper.parentElement.clientHeight)
      // scroller
      this.scrollerWidth = scroller.clientWidth
      this.scrollerHeight = scroller.clientHeight
      // maxScroll
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight

      this.maxScrollX = this.scrollDirection === 'horizontal'
        ? this.maxScrollX
        : 0
      this.maxScrollY = this.scrollDirection === 'horizontal'
        ? 0
        : this.maxScrollY

      this.endTime = 0
      this.directionX = 0
      this.directionY = 0
      this.hasHorizontalScroll = this.maxScrollX < 0
      this.hasVerticalScroll = this.maxScrollY < 0
      this.translateTo(0, 0)
      // reset moreShadow
      if (this.scrollDirection === 'vertical') {
        this.moreShadow = false
      }
    },
    calcPath (x) {
      // svg阴影处理
      x = x < 0
        ? Math.max(Math.floor(100 + (x - this.maxScrollX) / 10), 95)
        : 100
      return `M100 0 C ${x} 5, ${x} 95, 100 100`
    },
    translateTo (x = 0, y = 0, time = 0) {
      x = Math.round(x)
      y = Math.round(y)
      this.x = x
      this.y = y
      this.scrollerStyle = {
        transform: `translate(${x}px, ${y}px) translateZ(0px)`,
        transitionDuration: `${this.transitionDuration}ms`
      }
      if (this.transitionTimingFunction) {
        this.scrollerStyle.transitionTimingFunction = this.transitionTimingFunction
      }
    },
    rAF (callback) {
      this.timer = setTimeout(callback, 1000 / 60)
    },
    animateTo (destX, destY, duration, easingFn) {
      const that = this
      const startTime = this.getCurrentTime()
      const destTime = startTime + duration
      // 处理缓动的step函数
      function step () {
        let now = that.getCurrentTime()
        if (now >= destTime) {
          that.isAnimating = false
          that.transitionDuration = 0
          // 滚动停止时回调
          const endStatus = that.hasHorizontalScroll
            ? destX > 0 ? destX === 0 : destX >= that.maxScrollX
            : destY > 0 ? destY === 0 : destY >= that.maxScrollY
          if (
            typeof that.moveEndback === 'function' && that.moved && endStatus
          ) {
            that.moveEndback()
          }
          that.translateTo(destX, destY)
          that.resetScroll(that.scrollTime)
          return
        }
        now = (now - startTime) / duration
        const easing = easingFn(now)
        that.easing = easing

        // 防抖
        that.transitionDuration = duration
        if (that.x !== destX || that.y !== destY) {
          that.translateTo(destX, destY)
        }
        // 步行
        if (that.isAnimating) {
          that.rAF(step)
        }
      }
      this.isAnimating = true
      step()
    },
    scrollTo (x, y, time = 0, easing) {
      easing = easing || this.EASEING.circular
      if (easing.style) {
        this.transitionTimingFunction = easing.style
      }
      if (!time) {
        this.translateTo(x, y)
      } else {
        this.animateTo(x, y, time, easing.fn)
      }
    },
    getCurrentTime () {
      // 获取当前时间
      return Date.now() || new Date().getTime()
    },
    resetScroll (time = 0) {
      let x = this.x
      let y = this.y
      if (!this.hasHorizontalScroll || this.x > 0) {
        x = 0
      } else if (this.x < this.maxScrollX) {
        x = this.maxScrollX
      }

      if (!this.hasVerticalScroll || this.y > 0) {
        y = 0
      } else if (this.y < this.maxScrollY) {
        y = this.maxScrollY
      }
      if (x === this.x && y === this.y) {
        return false
      }

      this.scrollTo(x, y, time, this.EASEING.circular)

      return true
    },
    onTouchstart (e) {
      this.dragFlag = true
      const point = e.touches ? e.touches[0] : e
      // 初始化数据
      this.moved = false // 是否移动的标志
      this.distX = 0 //
      this.distY = 0 //
      this.directionX = 0 // x方向移动数
      this.directionY = 0 // y方向移动数
      // this.directionLocked = 0;    // 方向锁
      // 开始时间
      this.startTime = this.getCurrentTime()
      // scroller开始位置x开始位置
      this.startX = this.x || 0
      this.startY = this.y || 0
      // 触点
      this.pointX = point.clientX
      this.pointY = point.clientY
      this.translateTo(this.x, this.y)
      this.transitionDuration = 0
      clearTimeout(this.timer)
    },
    onTouchmove (e) {
      // const pos = this.calcPos(e);
      if (!this.dragFlag) return
      this.moved = true
      // point 触点
      const point = e.changedTouches ? e.changedTouches[0] : e
      let deltaX = point.clientX - this.pointX // 当前触点的clientX - 开始时的clientX = 触点当次增量x
      let deltaY = point.clientY - this.pointY // 触点增量y
      const timestamp = this.getCurrentTime()
      // 最近上一次的触点位置
      this.pointX = point.clientX
      this.pointY = point.clientY
      // 触点移动的距离
      this.distX += deltaX
      this.distY += deltaY
      const absDistX = Math.abs(this.distX)
      const absDistY = Math.abs(this.distY)

      this.directionX = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0 // -1 手势向左   1 手势向右
      this.directionY = deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0 // -1 手势向上   1 手势向下

      if (this.scrollDirection === 'horizontal') {
        if (absDistY > absDistX) {
          return
        }
        if (absDistX > 10) {
          e.preventDefault()
        }
      }
      if (this.scrollDirection === 'vertical') {
        e.preventDefault()
        if (absDistY < absDistX) {
          return
        }
      }
      // 触点至少移动10px才会触发scroll的move 并且 移动大于300ms
      if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
        return
      }

      deltaX = this.hasHorizontalScroll ? deltaX : 0
      deltaY = this.hasVerticalScroll ? deltaY : 0
      // // this.x this.y 是最近上一次的scroller位置
      let newX = this.x + deltaX
      let newY = this.y + deltaY
      if (this.scrollDirection === 'horizontal') {
        newY = 0
      } else {
        newX = 0
      }
      if (newX > 0 || newX < this.maxScrollX) {
        newX = this.x + deltaX / 3
      }
      if (newY > 0 || newY < this.maxScrollY) {
        newY = this.y + deltaY / 3
      }

      // this.moved = true;
      this.translateTo(newX, newY)
      if (timestamp - this.startTime > 300) {
        // 300ms更新一次
        this.startTime = timestamp
        this.startX = this.x
        this.startY = this.y
      }
      // 回弹阴影效果大小
      if (this.moreShadow && this.scrollDirection === 'horizontal') {
        this.path = this.calcPath(newX)
      }
      // 滚动时回调
      if (typeof this.moveCallback === 'function') {
        this.moveCallback()
      }
      // 滚动超出时回调
      if (typeof this.beyondFn === 'function') {
        this.beyondStatus = this.scrollDirection === 'horizontal'
          ? this.x && this.x <= this.maxScrollX
          : this.y && this.y <= this.maxScrollY
        this.beyondStatus && this.beyondFn()
      }
      // 滚动超出取消时回调
      if (typeof this.cancelBeyondFn === 'function' && this.beyondStatus) {
        const cancelBeyondStatus = this.scrollDirection === 'horizontal'
          ? newX > this.maxScrollX || this.directionX === 1
          : newY > this.maxScrollY || this.directionY === 1
        cancelBeyondStatus && this.cancelBeyondFn()
        this.beyondStatus = false
      }
    },
    onTouchend (e) {
      this.dragFlag = false
      this.path = this.calcPath(0)
      this.endTime = this.getCurrentTime()
      let easing = ''
      let time = 0
      let newX = Math.round(this.x)
      let newY = Math.round(this.y)
      const duration = this.endTime - this.startTime
      const absDistX = Math.abs(newX - this.startX)
      const absDistY = Math.abs(newY - this.startY)

      // 判断是否为点击
      if (!this.moved) {
        return
      }

      if (this.scrollDirection === 'horizontal') {
        if (absDistY > absDistX) {
          return
        }
      }
      if (this.scrollDirection === 'vertical') {
        if (absDistY < absDistX) {
          return
        }
      }
      // if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
      //     // 处理尾部开始滑动的碰壁回弹
      //     this.scrollTo(newX, newY, 50);
      //     return;
      // }
      if (this.resetScroll(this.scrollTime)) {
        // 滚动完成时尾部回调
        if (typeof this.afterRelease === 'function') {
          if (
            (this.x <= this.maxScrollX && !~this.directionX) ||
            (this.y <= this.maxScrollY && !~this.directionY)
          ) {
            this.afterRelease()
          }
        }
        // 滚动完成时头部回调
        if (typeof this.beforeRelease === 'function') {
          if (
            (this.x >= 0 && this.directionX === 1) ||
            (this.y >= 0 && this.directionY === 1)
          ) {
            this.beforeRelease()
          }
        }
        return
      }

      this.scrollTo(newX, newY)
      if (duration < 300) {
        const momentumX = this.hasHorizontalScroll
          ? this.momentum(
              this.x,
              this.startX,
              duration,
              this.maxScrollX,
              this.wrapperWidth
            )
          : { destination: newX, duration: 0 }
        const momentumY = this.hasVerticalScroll
          ? this.momentum(
              this.y,
              this.startY,
              duration,
              this.maxScrollY,
              this.wrapperHeight
            )
          : { destination: newY, duration: 0 }

        newX = momentumX.destination
        newY = momentumY.destination

        time = Math.max(momentumX.duration, momentumY.duration)
      }

      if (newX !== this.x || newY !== this.y) {
        if (
          newX > 0 ||
          newX < this.maxScrollX ||
          newY > 0 ||
          newY < this.maxScrollY
        ) {
          // 处理碰壁回弹
          easing = this.EASEING.quadratic
        }
        this.scrollTo(newX, newY, time, easing)
      }
    }
  },
  render (h) {
    const shadowSvgEle = this.moreShadow &&
      <svg
        class='scroll-shadow'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
    >
        <path d={this.path} stroke='transparent' fill='#e7e7e7' />
      </svg>
    const scrollClass = {
      inner: `scroll-${this.scrollDirection}-inner`,
      item: `scroll-${this.scrollDirection}-item`
    }
    return this.$slots.default &&
      <div class='scroll-wrap'>
        <div
          class={scrollClass.inner}
          ref='scroll'
          style={this.scrollerStyle}
          on-touchstart={this.onTouchstart}
          on-touchmove={this.onTouchmove}
          on-touchend={this.onTouchend}
          on-mousedown={this.onTouchstart}
          on-mousemove={this.onTouchmove}
          on-mouseup={this.onTouchend}
        >
          {this.$slots.default.map(vnode => {
            const vnodeEle = vnode.tag ? vnode : null
            return vnodeEle &&
              <div class={scrollClass.item}>
                {vnodeEle}
              </div>
          })}
        </div>
        {shadowSvgEle}
      </div>
  },
  mounted () {
    this.$nextTick(() => {
      this.refresh()
    })
    this.EASEING = {
      quadratic: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function fn (k) {
          return k * (2 - k)
        }
      },
      circular: {
        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
        fn: function fn (k) {
          return Math.sqrt(1 - --k * k)
        }
      }
    }
  }
}

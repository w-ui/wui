<template>
  <div v-if= "direction === 'h'" class="wui-scroll-h">
    <div class="wui-scroll-h-nav" ref="nav">
      <div class="wui-scroll-h-container" ref="box" @touchstart="touchstart" @mousedown="touchstart">
        <slot></slot>
      </div>
    </div>
  </div>
  <div v-else class="wui-scroll-v">
    <div class="wui-scroll-v-nav" ref="nav">
      <div class="wui-scroll-v-container" ref="box" @touchstart="touchstart" @mousedown="touchstart">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
    export default {
        name: 'w-scroll',
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
          scrollBounce: {
            type: Boolean,
            default: true
          }
        },
        methods: {
          touchstart(e) {
            this.drag = true
            let tar = e.targetTouches || [e];
            tar = tar[0]
            this.startX = tar.pageX
            this.startY = tar.pageY
            this.startTime = Date.now()
            this.offsetW = 0
            this.offsetH = 0
            this.currentX = this.getCurrentX()
            this.currentY = this.getCurrentY()
          },
          touchmove(e) {
            if (this.drag) {
              this.move(e);
              e.preventDefault();
              e.stopPropagation();
            }
          },
          touchend(e){
            if(this.drag){
              this.drag = false
              if (this.direction == 'h') {
                let curx = this.getCurrentX()
                if(curx > this.maxsw){
                  this.bounceBack(this.maxsw, 0)
                } else if(curx < this.minsw){
                  this.bounceBack(this.minsw, 0)
                } else {
                  this.momentumMove(e)
                }
              } else {
                let cury = this.getCurrentY()
                if(cury > this.maxsh){
                  this.bounceBack(0, this.maxsh)
                } else if(cury < this.minsh){
                  this.bounceBack(0, this.minsh)
                } else {
                  this.momentumMove(e)
                }
              }
            }
          },
          move(e){
            if(this.drag){
              let tar = e.targetTouches || [e];
              tar = tar[0];
              if (this.direction == 'h') {
                let offsetX = tar.pageX - this.startX;
                this.offsetW = offsetX;
                let lastx = this.currentX + offsetX;
                if (lastx > 0) {
                    if (!this.scrollBounce) {
                        e.stopPropagation()
                        return;
                    }
                }  else if (lastx < this.minsw) {
                    if (!this.scrollBounce) {
                        e.stopPropagation()
                        return;
                    }
                }
                lastx = this.getDamping(lastx)
                this.translateTo(lastx, 0, 0, true)
                e.preventDefault()
                e.stopPropagation()
              } else {
                let offsetY = tar.pageY - this.startY;
                this.offsetH = offsetY;
                let lasty = this.currentY + offsetY;
                if (lasty > 0) {
                    if (!this.scrollBounce) {
                        e.stopPropagation()
                        return;
                    }
                }  else if (lasty < this.minsh) {
                    if (!this.scrollBounce) {
                        e.stopPropagation()
                        return;
                    }
                }
                lasty = this.getDamping(lasty)
                this.translateTo(0, lasty, 0, true)
                e.preventDefault()
                e.stopPropagation()
              }
            }
          },
          bounceBack(x, y, t) {
            let ti = t || 600
            this.translateTo(x, y, ti)
          },
          getDamping (s) {
            let max = 0
            let min = this.minsw
            if (this.direction === 'v') {
              min = this.minsh
            }
            if (s > max) {
              return Math.round(s/3)
            } else if (s < min) {
              return Math.round(min - (min - s ) / 3)
            } else {
              return s
            }
          },
          momentumMove(e) {
            let difft = Date.now() - this.startTime;
            if (this.direction == 'h') {
              let curx = this.getCurrentX()
              if(difft > 500 || Math.abs(this.offsetW) < 10){
                return;
              } else {
                let v = Math.abs(this.offsetW) / difft
                const a = 0.0004
                let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
                let last = Math.round(curx + s); 
                let t = Math.round(s / v)

                if (last < this.minsw) {
                    if (this.scrollBounce) {
                        last = Math.round(this.minsw - this.ww / (6 * v))
                    } else {
                        last = this.minsw
                    }
                } else if (last > 0) {
                    // 向右
                    if (this.scrollBounce) {
                        last = Math.round(this.ww / (6 * v))
                    } else {
                        last = 0
                    }
                }
                t < 300 && (t = 300);
                t > 600 && (t = 600);
                this.translateTo(last, 0, t)

                setTimeout(() => {
                  curx = this.getCurrentX()
                  if(curx > this.maxsw){
                    this.bounceBack(this.maxsw, 0)
                  } else if(curx < this.minsw){
                    this.bounceBack(this.minsw, 0)
                  }
                }, t)
              }
            } else {
              let cury = this.getCurrentY()
              if(difft > 500 || Math.abs(this.offsetH) < 10){
                return;
              } else {
                let v = Math.abs(this.offsetH) / difft
                const a = 0.0002
                let s = v * v / (2 * a) * (this.offsetH < 0 ? -1 : 1)
                let last = Math.round(cury + s); 
                let t = Math.round(s / v)

                if (last < this.minsh) {
                    if (this.scrollBounce) {
                        last = Math.round(this.minsh - this.hh / (6 * v))
                    } else {
                        last = this.minsh
                    }
                } else if (last > 0) {
                  // 向右
                    if (this.scrollBounce) {
                        last = Math.round(this.hh / (6 * v))
                    } else {
                        last = 0
                    }
                }
                t < 300 && (t = 300);
                t > 600 && (t = 600);
                this.translateTo(0, last, t)

                setTimeout(() => {
                  cury = this.getCurrentY()
                  if(cury > this.maxsh){
                    this.bounceBack(0, this.maxsh)
                  } else if(cury < this.minsh){
                    this.bounceBack(0, this.minsh)
                  }
                }, t)
              }
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
          translateTo (x, y, t, immediately) {
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
          }
        },
        
        mounted() {
            this.$nextTick(() => {
                this.total = this.$slots.default.length;
                if (this.direction == 'h') {
                    let width = this.$refs.box.offsetWidth;
                    this.ww = this.$el.offsetWidth;
                    this.maxsw = 0; //max scroll width
                    this.minsw = this.ww - width;   //max scroll width
                    if (this.minsw > 0) {
                        this.minsw = 0
                    }
                } else {
                    let height = this.$refs.box.offsetHeight;
                    this.hh = this.$el.offsetHeight;
                    this.maxsh = 0; //max scroll width
                    this.minsh = this.hh - height;   //max scroll width
                    if (this.minsh > 0) {
                        this.minsh = 0
                    }
                }
                this.$el.addEventListener('touchmove', this.touchmove, {passive: true});
                this.$el.addEventListener('touchend', this.touchend, {passive: true});

                window.addEventListener('mousemove', this.touchmove, false);
                window.addEventListener('mouseup', this.touchend, false);
            })
        },
        destroyed() {
          window.removeEventListener('mousemove', this.touchmove, false);
          window.removeEventListener('mouseup', this.touchend, false);
        }
    }
</script>

<style lang="less">
    @import "./scroll.less";
</style>

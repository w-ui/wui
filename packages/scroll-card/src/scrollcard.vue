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
        name: 'w-scroll-card',
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
          }
        },
        methods: {
          touchstart(e){
            this.drag = true
            let tar = e.targetTouches || [e];
            tar = tar[0]
            this.startX = tar.pageX
            this.startY = tar.pageY
            this.startTime = Date.now()
            this.offsetW = 0
            this.offsetH = 0

            if (this.direction == 'h') {
              this.currentX = this.getCurrentX()
              let width = this.$refs.box.offsetWidth;
              this.ww = this.$el.offsetWidth;
              this.maxsw = 0; //max scroll width
              this.minsw = this.ww - width;   //max scroll width
              if (this.minsw > 0) {
                this.minsw = 0
              }
            } else if(this.direction == 'v') {
              this.currentY = this.getCurrentY()
              let height = this.$refs.box.offsetHeight;
              this.hh = this.$el.offsetHeight;
              this.maxsh = 0; //max scroll width
              this.minsh = this.hh - height;   //max scroll width
              if (this.minsh > 0) {
                this.minsh = 0
              }
            }
            e.preventDefault();
            e.stopPropagation();
          },
          touchmove(e){
            if(this.drag){
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
                console.log(curx, this.maxsw, this.minsw)
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
                this.translateTo(lastx, 0, 0, true)
              } else {
                let offsetY = tar.pageY - this.startY;
                this.offsetH = offsetY;
                let lasty = this.currentY + offsetY;
                this.translateTo(0, lasty, 0, true)
              }
            }
          },
          bounceBack(x, y, t) {
            let ti = t || 500
            this.translateTo(x, y, ti)
          },
          momentumMove(e) {
            let difft = Date.now() - this.startTime;
            if (this.direction == 'h') {
              let curx = this.getCurrentX()
              if(difft > 500 || Math.abs(this.offsetW) < 10){
                this.slotClick(e);
                return;
              } else {
                let v = Math.abs(this.offsetW) / difft
                const a = 0.0004
                let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
                let last = Math.round(curx + s); 
                let t = Math.round(s / v)

                if (last < this.minsw) {
                  last = Math.round(this.minsw - this.ww / 2 * (v / 8))
                } else if (last > 0) {
                  // 向右
                  last = Math.round(this.ww / 2 * (v / 8))
                }
                t < 300 && (t = 300);
                t > 1200 && (t = 1200);

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
                this.slotClick(e);
                return;
              } else {
                let v = Math.abs(this.offsetH) / difft
                const a = 0.0002
                let s = v * v / (2 * a) * (this.offsetH < 0 ? -1 : 1)
                let last = Math.round(cury + s); 
                let t = Math.round(s / v)

                if (last < this.minsh) {
                  last = Math.round(this.minsh - this.hh / 2 * (v / 8))
                } else if (last > 0) {
                  // 向右
                  last = Math.round(this.hh / 2 * (v / 8))
                }
                t < 300 && (t = 300);
                t > 1200 && (t = 1200);
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
          slotClick(e){
            let cur = e.target;
            let pnode = cur;
            if(!pnode) return;
            if(cur == this.$refs.box) {
              return;
            } else if(cur.parentNode == this.$refs.box) {
              pnode = cur;
            } else {
              while(pnode && pnode.parentNode != this.$refs.box){
                pnode = pnode.parentNode;
              }
            }
            if(pnode){
              this.centerItem(pnode);
            }
          },
          centerItem(node){
            this.$slots.default.map((child, index) => {
              if (child.elm === node) {
                node.classList.add('active');
                this.currentIndex = index;
              } else {
                child.elm.classList.remove('active')
              }
            })
            if (!this.centerActivedItem) {
              return;
            }
            let rectParent = this.$el.getBoundingClientRect()
            let rect = node.getBoundingClientRect()
            if (this.direction == 'h') {
              let left = rect.left - rectParent.left
              let curx = this.getCurrentX()
              let offset = 0
              if(left > this.ww/2){
                offset = curx - (left - this.ww/2 + rect.width/2)
                offset < this.minsw && (offset = this.minsw);
                offset > this.maxsw && (offset = this.maxsw);
              } else {
                offset = curx + (this.ww/2 - left -rect.width/2)
                offset > this.maxsw && (offset = this.maxsw);
                offset < this.minsw && (offset = this.minsw);
              }
              this.translateTo(offset, 0, 600)
              this.$emit('change', this.currentIndex)
            } else {
              let top = rect.top - rectParent.top
              let cury = this.getCurrentY()
              let offset = 0
              if(top > this.hh/2){
                offset = cury - (top - this.hh/2 + rect.height/2)
                offset < this.minsh && (offset = this.minsh);
                offset > this.maxsh && (offset = this.maxsh);
              } else {
                offset = cury + (this.hh/2 - top -rect.height/2)
                offset > this.maxsh && (offset = this.maxsh);
                offset < this.minsh && (offset = this.minsh);
              }
              this.translateTo(0, offset, 600)
              this.$emit('change', this.currentIndex)
            }
          },
          translateTo (x, y, t, immediately) {
            let time = t || 300
            t < 300 && (t = 300);
            t > 1200 && (t = 1200);
            
            if (immediately) {
              this.$refs.box.style.transition = 'none'
            } else {
              this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
            }
            this.$refs.box.style.transform = `translate3d(${x}px, ${y}px, 0)`
          },
          setCurrent (index) {
            if (index >= 0 && index < this.total) {
              this.currentX = index
              this.centerItem(this.$slots.default[index].elm);
            }
          }
        },
        
        mounted() {
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

          this.$refs.box.addEventListener('touchmove', this.touchmove, false);
          this.$refs.box.addEventListener('touchend', this.touchend, false);
          window.addEventListener('mousemove', this.touchmove, false);
          window.addEventListener('mouseup', this.touchend, false);
        },
        destroyed() {
          this.$refs.box.removeEventListener('touchmove', this.touchmove, false)
          this.$refs.box.removeEventListener('touchend', this.touchend, false)
          window.removeEventListener('mousemove', this.touchmove, false);
          window.removeEventListener('mouseup', this.touchend, false);
        }
    }
</script>

<style lang="less">
    @import "./scrollcard.less";
</style>

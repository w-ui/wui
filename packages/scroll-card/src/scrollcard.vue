<template>
    <div class="wui-scroll-card">
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
              startTime: 0,
              currentX: 0,
              offsetW: 0,
              lastTime: 0,
              timer: null
            }
        },
        props: {
          change: Function,
        },
        methods: {
          touchstart(e){
            this.drag = true
            let tar = e.targetTouches || [e];
            tar = tar[0]
            this.startX = tar.pageX
            this.startTime = Date.now()
            this.offsetW = 0
            this.currentX = this.getCurrentX()

            this.width = this.$refs.box.offsetWidth;
            this.ww = this.$el.offsetWidth;
            this.maxsw = 0; //max scroll width
            this.minsw = this.ww - this.width;   //max scroll width

            e.preventDefault();
            e.stopPropagation();
          },
          touchmove(e){
            if(this.drag){
              let now = Date.now();
              if(this.lastTime){
                let remaining = 50 - now + this.lastTime;
                if(remaining <= 0){
                  this.lastTime = now;
                  clearInterval(this.timer);
                  this.move(e);
                } else {
                  clearInterval(this.timer);
                  this.timer = setTimeout(this.move.bind(this, e), remaining);
                }
              } else {
                this.lastTime = now;
                this.move(e);
              }
              e.preventDefault();
              e.stopPropagation();
            }
          },
          touchend(e){
            if(this.drag){
              this.drag = false
              let curx = this.getCurrentX()
              if(curx > this.maxsw){
                this.bounceBack(this.maxsw)
              } else if(curx < this.minsw){
                this.bounceBack(this.minsw)
              } else {
                this.momentumMove(e)
              }
            }
          },
          move(e){
            if(this.drag){
              let tar = e.targetTouches || [e];
              tar = tar[0];

              let offsetX = tar.pageX - this.startX;
              this.offsetW = offsetX;
              let lastx = this.currentX + offsetX;

              this.translateTo(lastx, 0, true)
            }
          },
          bounceBack(pos, t) {
            let ti = t || 500
            this.translateTo(pos, t)
          },
          momentumMove(e) {
            let difft = Date.now() - this.startTime;
            let curx = this.getCurrentX()

            if(difft > 500 || Math.abs(this.offsetW) < 10){
              this.slotClick(e);
              return;
            } else {
              let v = Math.abs(this.offsetW) / difft
              const a = 0.0002
              let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
              let last = Math.round(curx + s); 
              let t = Math.round(s / v)

              if (last < this.minsw) {
                last = Math.round(this.minsw - this.ww / 2 * (v / 8))
              } else if (last > 0) {
                // 向右
                last = Math.round(this.ww / 2 * (v / 8))
              }

              this.translateTo(last, t)

              setTimeout(() => {
                curx = this.getCurrentX()
                if(curx > this.maxsw){
                  this.bounceBack(this.maxsw)
                } else if(curx < this.minsw){
                  this.bounceBack(this.minsw)
                }
              }, t)

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
              this.$slots.default.map(node => {
                node.elm.classList.remove('active')
              })
              pnode.classList.add('active');
              this.centerItem(pnode);
            }
          },
          centerItem(node){
            let rect = node.getBoundingClientRect();
            let offset = 0
            if(rect.left > this.ww/2){
              offset = this.currentX - (rect.left - this.ww/2 + rect.width/2)
              offset < this.minsw && (offset = this.minsw);
              offset > this.maxsw && (offset = this.maxsw);
            } else {
              offset = this.currentX + (this.ww/2 - rect.left -rect.width/2)
              offset > this.maxsw && (offset = this.maxsw);
              offset < this.minsw && (offset = this.minsw);
            }
            this.translateTo(offset, 300)
          },
          translateTo (pos, t, immediately) {
            let time = t || 300
            t < 300 && (t = 300);
            t > 1200 && (t = 1200);
            
            if (immediately) {
              this.$refs.box.style.transition = 'none'
            } else {
              this.$refs.box.style.transition = `${time}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`
            }
            this.$refs.box.style.transform = `translate3d(${pos}px, 0, 0)`
          }
        },
        
        mounted() {
          window.addEventListener('touchmove', this.touchmove, false);
          window.addEventListener('touchend', this.touchend, false);
          window.addEventListener('mousemove', this.touchmove, false);
          window.addEventListener('mouseup', this.touchend, false);
        },
        destroyed() {
          window.removeEventListener('touchmove', this.touchmove, false)
          window.removeEventListener('touchend', this.touchend, false)
          window.removeEventListener('mousemove', this.touchmove, false);
          window.removeEventListener('mouseup', this.touchend, false);
        }
    }
</script>

<style lang="less">
    @import "./scrollcard.less";
</style>

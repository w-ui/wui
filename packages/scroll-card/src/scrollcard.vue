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
              isAnimate: false,
              lastTime: 0,
              timer: null
            }
        },
        props: {
          change: Function,
        },
        methods: {
          touchstart(e){
            if(this.isAnimate) {
              return;
            }
            this.drag = true
            let tar = e.targetTouches || [e];
            tar = tar[0]
            this.startX = tar.pageX
            this.startTime = Date.now()
            this.offsetW = 0

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
              this.currentX += this.offsetW;
              if(this.currentX > this.maxsw){
                this.bounceBack(this.maxsw)
              } else if(this.currentX < this.minsw){
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

              this.$refs.box.style.transition = "none";
              this.$refs.box.style.transform = `translate3d(${lastx}px, 0, 0)`
            }
          },
          bounceBack(pos, t) {
            let ti = t || 500
            this.$refs.box.style.transition = `${ti}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`;
            this.$refs.box.style.transform = `translate3d(${pos}px, 0, 0)`
            this.currentX = pos;
          },
          momentumMove(e) {
            let difft = Date.now() - this.startTime;
            if(difft > 500 || Math.abs(this.offsetW) < 10){
              this.slotClick(e);
              return;
            } else {

              // let p = this.momentum(e.pageX, this.startX, difft, this.minsw, this.ww)
              // let last = p.destination
              // let ti = p.duration
              // console.log(p);
              
              let v = Math.abs(this.offsetW) / difft
              const a = 0.0004
              let s = v * v / (2 * a) * (this.offsetW < 0 ? -1 : 1)
              let last = Math.round(this.currentX + s); 
              let t = Math.round(s / v)

              if (last < this.minsw) {
                last = Math.round(this.minsw - this.ww / 2 * (v / 8))
                t = Math.round(Math.abs(last - this.currentX) / v)
              } else if (last > 0) {
                // 向右
                last = Math.round(this.ww / 2 * (v / 8))
                t = Math.round(Math.abs(last - this.currentX) / v)
              }

              // if(last > 0 && last > this.ww){
              //   last = Math.floor(this.ww/2)
              // }
              // if(last < 0 && last < this.minsw - this.ww){
              //   last = this.minsw - this.ww/2;
              // }

              this.$refs.box.style.transition = `${t}ms all cubic-bezier(0.1, 0.57, 0.1, 1)`;
              this.$refs.box.style.transform = `translate3d(${last}px, 0, 0)`

              this.isAnimate = true
              setTimeout(() => {
                this.isAnimate = false
                this.currentX = last;
                if(this.currentX > this.maxsw){
                  this.bounceBack(this.maxsw)
                } else if(this.currentX < this.minsw){
                  this.bounceBack(this.minsw)
                }
              }, t)

            }
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
            this.$refs.box.style.transition = "0.3s all cubic-bezier(0.1, 0.57, 0.1, 1)";
            this.$refs.box.style.transform = `translate3d(${offset}px, 0, 0)`
            this.currentX = offset
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

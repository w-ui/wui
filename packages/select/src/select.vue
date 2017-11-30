
<template>
    <div>
        <div class="wui-select-mask" v-show="show" @click.stop="close"></div>
        <div class="wui-select" :class="show ? 'wui-select-active' : ''">
            <div class="wui-select-head">
                <a @click.stop="close">取消</a>
                <a @click.stop="setValue">确定</a>
            </div>
            <div class="wui-select-content">
                <div class="wui-select-item" v-for="column in columns">
                    <div class="wui-select-item-box" :ref="'Component_' + column">
                        <div class="wui-select-item-content" :ref="'Content_' + column">
                            <span v-for="item in items[column]" :data-value="item.value" v-html="item.name"></span>
                        </div>
                    </div>
                </div>
                <div class="wui-select-shade"></div>
                <div class="wui-select-indicator"><span></span></div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Scroller from './scroller';
    import {addClass, removeClass, getScrollview, isIOS, pageScroll} from 'src/utils';
    export default {
      data() {
        return {
          values: {},
          show: false,
          parentEL: null,
          scroller: [],
          type: '',
          scrolling: {},
          readonly: false
        }
      },
      methods: {
          render() {
              const _this = this;

              _this.columns.forEach((item) => {
                  const component = _this.$refs['Component_' + item][0];
                  const content = _this.$refs['Content_' + item][0];

                  _this.scroller[item] = new Scroller(component, content, {
                      itemHeight: 38,
                      onSelect(value) {
                          _this.values[item] = value;
                          _this.scrolling[item] = false;
                          _this.$emit('change', {
                              column: item,
                              value
                          });
                      },
                      callback(top, isDragging) {
                          if(isDragging) {
                              _this.scrolling[item] = true;
                          }
                          content.style.webkitTransform = 'translate3d(0, ' + (-top) + 'px, 0)'
                      }
                  });
                  
                    _this.scroller[item].setDimensions(component.clientHeight, content.offsetHeight, _this.items[item].length);
                    if(_this.value[item] != undefined){
                        _this.scroller[item].select(_this.value[item], false);
                        _this.$emit('change', {
                            column: item,
                            value: _this.value[item]
                        });
                    }
                    _this.scrolling[item] = false;
                  
              });

              _this.setValue();
          },
          
          scrolloToPosition(item, allDatas, callback) {
              const _this = this;

              const scroller = _this.scroller[item];
              if (!scroller) return;

              scroller.setDimensions(_this.$refs['Component_' + item][0].clientHeight, _this.$refs['Content_' + item][0].offsetHeight, allDatas.length);

              setTimeout(() => {
                  const indatas = _this.inDatas(allDatas, _this.values[item]);
                  let selval = indatas ? _this.values[item] : allDatas[0].value;
                  if (!_this.scrolling[item]) {
                      scroller.select(selval, false);
                  }
                  typeof callback === 'function' && callback(selval);
              }, 0);
          },
          setValue() {
              this.currentValue = this.values;
              this.$emit('confirm', this.values);
              this.close();
          },
          inDatas(items, key) {
              let b = false;
              items.forEach((item) => {
                  if (item.value == key) b = true;
              });
              return b;
          },
          open() {
              if (this.readonly) return;
              this.show = true;
              if (isIOS) {
                  pageScroll.lock();
                  addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
              }
          },
          close() {
              this.show = false;
              if (isIOS) {
                  pageScroll.unlock();
                  removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
              }
          }
      },
      mounted() {
          this.scrollView = getScrollview(this.parentEL);

          this.$nextTick(this.render);
      },
      beforeDestroy() {
          this.columns.forEach((item) => {
              this.scroller[item] = null;
          });
      }
    }
</script>

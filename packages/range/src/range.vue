<template>
    <div class="ion-range" :class="[modeClass, colorClass, {'range-pressed': pressed}, {'range-disabled':disabled},{'range-has-pin':pin}]">
        <div ref="slider"
             class="range-slider"
             @mouseup="pointerUp($event)"
             @touchend="pointerUp($event)"
             @mousemove="pointerMove($event)"
             @touchmove="pointerMove($event)"
             @mousedown="pointerDown($event)"
             @touchstart="pointerDown($event)">
            <div class="range-tick" v-for="(t, i) in ticks" :style="{ left: t.left }" :key="'r_t_' + i"
                 :class="{'range-tick-active':t.active}"
                 role="presentation"></div>
            <div class="range-bar" role="presentation"></div>
            <div class="range-bar range-bar-active" :style="{ left: barL,right:barR }" ref="bar"
                 role="presentation"></div>
            <RangeKnobHandle
                    :ratio="ratioA"
                    :val="valA"
                    :pin="pin"
                    :pressed="pressedA"
                    :min="min"
                    :max="max"
                    :disabled="disabled">
            </RangeKnobHandle>
            <RangeKnobHandle
                    :ratio="ratioB"
                    :val="valB"
                    :pin="pin"
                    :pressed="pressedB"
                    :min="min"
                    :max="max"
                    :disabled="disabled"
                    v-if="multi">
            </RangeKnobHandle>
        </div>
    </div>
</template>
<script type="text/javascript">
/**
 *
 * @component Range
 * @description
 *
 * ## 表单组件 / Range滑块组件
 *
 *
 * ### 注意
 *
 * @props {String} [color] - 颜色
 * @props {Boolean} [disabled=false] - 是否禁用
 * @props {Boolean} [dualKnobs=false] - 选择的拖动按钮, 默认是一个, true为两个
 * @props {Number} [max=100] - range的最大值
 * @props {Number} [min=0] - range的最小值
 * @props {String} [mode='ios'] - 模式
 * @props {Boolean} [pin=false] - 当拖动knob时显示大头针提示
 * @props {Boolean} [snaps=false] - 类似于卡槽, 如果为true, 则在range上画标尺, 并且拖动中knob只能停留在标尺标记处
 * @props {Number} [step=1] - 移动的步伐/粒度
 * @props {String| Number| Object} [value] - v-model对应的值, 需要出发input事件
 *
 * @slot range-right - 在range组件右边, 一般放Icon
 * @slot range-left - 在range组件左边, 一般放Icon
 *
 * @demo #/range
 *
 * @usage
 * <List>
 *    <ListHeader>
 *        <span>Brightness</span>
 *        <Badge slot="item-right">{{brightness}}</Badge>
 *    </ListHeader>
 *    <Item>
 *         <Range v-model="brightness">
 *            <Icon slot="range-left" small name="sunny"></Icon>
 *            <Icon slot="range-right" name="sunny"></Icon>
 *        </Range>
 *    </Item>
 * </List>
 *
 * */
import RangeKnobHandle from './range-knob-handle.vue'
import { addClass, isString, isObject, isNumber } from '../../../src/utils'

export default {
  name: 'w-range',
  data() {
    return {
      ticks: [], // 移动的标尺
      pressed: false, // 拖动knob

      barL: 0, // 左边bar的位置
      barR: 0, // 右边bar的位置

      ratioA: 0, // 左边bar的比例
      ratioB: 0, // 右边bar的比例
      valA: 0,
      valB: 0,
      pressedA: false,
      pressedB: false,

      _sliderEl: null, // slider的DOM句柄
      _rect: null, // _sliderEl的尺寸对象
      _activeB: null, // 是否激活了B按钮
      _timer: 0,
      drag: false,

      valueInner: this.value // value内部值
    }
  },
  props: {
    /**
     * 颜色: "primary", "secondary", "danger", "light", and "dark"
     */
    color: String,
    /**
     * 是否禁用
     * */
    disabled: Boolean,
    /**
     * 选择的拖动按钮, 默认是一个, true为两个
     * */
    multi: Boolean,
    /**
     * range的最大值
     * */
    max: {
      type: Number,
      default: 100
    },
    /**
     *  range的最小值
     * */
    min: {
      type: Number,
      default: 0
    },
    /**
     * 当拖动knob时显示大头针提示
     * */
    pin: Boolean,
    /**
     * 类似于卡槽, 如果为true, 则在range上画标尺,
     * 并且拖动中knob只能停留在标尺标记处
     * */
    snaps: Boolean,
    /**
     * 移动的步伐/粒度
     * */
    step: {
      type: Number,
      default: 1
    },

    /**
     * v-model对应的值,
     * 需要出发input事件
     */
    value: [String, Number, Object]
  },
  computed: {
    // 环境样式
    modeClass() {
      return `range range-ios`
    },
    // 颜色
    colorClass() {
      return this.color ? `range-ios-${this.color}` : ''
    },

    /**
     * 返回knob现在的位置比, ratio数值在0/1之间,
     * 如果使用了两个knob, 则返回最小那个
     */
    ratio() {
      if (this.multi) {
        return Math.min(this.ratioA, this.ratioB)
      }
      return this.ratioA
    },

    /**
     * 在有两个knob的情况下, 返回最大的按个knob的ratio
     */
    ratioUpper() {
      if (this.multi) {
        return Math.max(this.ratioA, this.ratioB)
      }
      return 0
    }
  },
  methods: {
    /**
     * 拖动开始
     * @param {UIEvent} ev
     * @return {boolean}
     * */
    pointerDown(ev) {
      if (this.disabled) {
        return false
      }
      this.drag = true
      // prevent default so scrolling does not happen
      ev.preventDefault()
      ev.stopPropagation()

      // get the start coordinates
      const current = this.pointerCoord(ev)

      // 获取slider元素的尺寸
      const rect = (this._rect = this._sliderEl.getBoundingClientRect())

      // 判断点击的位置离那个knob近
      const ratio = this.clamp(0, (current.x - rect.left) / rect.width, 1)
      this._activeB =
        Math.abs(ratio - this.ratioA) > Math.abs(ratio - this.ratioB)

      // 更新激活状态的knob位置

      this.updateRange(current, rect, true)

      // return true so the pointer events
      // know everything's still valid
      return true
    },

    /**
     * 拖动处理
     * @param {UIEvent} ev
     * */
    pointerMove(ev) {
      if (!this.disabled && this.drag) {
        // prevent default so scrolling does not happen
        ev.preventDefault()
        ev.stopPropagation()
        const current = this.pointerCoord(ev)

        // update the active knob's position
        this.updateRange(current, this._rect, true)

        // 告知v-model
        this.$_emit()
      }
    },

    $_emit() {
      // 频发触发会导致卡顿
      this.$emit('input', this.valueInner)
    },

    /**
     * 拖动停止
     * @param {UIEvent} ev
     * */
    pointerUp(ev) {
      this.drag = false
      if (!this.disabled) {
        // prevent default so scrolling does not happen
        ev.preventDefault()
        ev.stopPropagation()

        // update the active knob's position
        this.updateRange(this.pointerCoord(ev), this._rect, false)
      }
    },

    pointerCoord(ev) {
      if (ev) {
        var changedTouches = ev.changedTouches
        if (changedTouches && changedTouches.length > 0) {
          var touch = changedTouches[0]
          return { x: touch.clientX, y: touch.clientY }
        }
        var pageX = ev.pageX
        if (pageX !== undefined) {
          return { x: pageX, y: ev.pageY }
        }
      }
      return { x: 0, y: 0 }
    },

    clamp(min, n, max) {
      return Math.max(min, Math.min(n, max))
    },

    /**
     * 更新knob的位置
     * @param {PointerCoordinates} current
     * @param {ClientRect} rect
     * @param {boolean} isPressed
     */
    updateRange(current, rect, isPressed) {
      // figure out where the pointer is currently at
      // update the knob being interacted with
      let ratio = this.clamp(0, (current.x - rect.left) / rect.width, 1)
      let val = this.ratioToValue(ratio)

      if (this.snaps) {
        // snaps the ratio to the current value
        ratio = this.valueToRatio(val)
      }

      // update which knob is pressed
      this.pressed = isPressed

      if (this._activeB) {
        // when the pointer down started it was determined
        // that knob B was the one they were interacting with
        this.pressedB = isPressed
        this.pressedA = false
        this.ratioB = ratio

        if (val === this.valB) {
          // hasn't changed
          return false
        }
        this.valB = val
      } else {
        // interacting with knob A
        this.pressedA = isPressed
        this.pressedB = false
        this.ratioA = ratio

        if (val === this.valA) {
          // hasn't changed
          return false
        }
        this.valA = val
      }

      // value has been updated
      if (this.multi) {
        // dual knobs have an lower and upper value
        if (!this.valueInner) {
          // ensure we're always updating the same object
          this.valueInner = {}
        }
        this.valueInner.min = Math.min(this.valA, this.valB)
        this.valueInner.max = Math.max(this.valA, this.valB)
      } else {
        // single knob only has one value
        this.valueInner = this.valA
        // console.debug(`range, updateKnob: ${ratio}, value: ${this.valueInner}`);
      }

      this.updateBar()
      return true
    },

    /**
     * @param {number} ratio
     */
    ratioToValue(ratio) {
      ratio = Math.round((this.max - this.min) * ratio)
      ratio = Math.round(ratio / this.step) * this.step + this.min
      return this.clamp(this.min, ratio, this.max)
    },
    /**
     * @param {number} value
     */
    valueToRatio(value) {
      value = Math.round((value - this.min) / this.step) * this.step
      value = value / (this.max - this.min)
      return this.clamp(0, value, 1)
    },

    /**
     * 更新bar的位置
     */
    updateBar() {
      const ratioA = this.ratioA
      const ratioB = this.ratioB
      if (this.multi) {
        this.barL = `${Math.min(ratioA, ratioB) * 100}%`
        this.barR = `${100 - Math.max(ratioA, ratioB) * 100}%`
      } else {
        this.barL = ''
        this.barR = `${100 - ratioA * 100}%`
      }

      this.updateTicks()
    },

    /**
     * 更新bar的位置
     * 更新标尺
     */
    updateTicks() {
      const ticks = this.ticks
      const ratio = this.ratio

      if (this.snaps && ticks) {
        if (this.multi) {
          var upperRatio = this.ratioUpper

          ticks.forEach(t => {
            t.active = t.ratio >= ratio && t.ratio <= upperRatio
          })
        } else {
          ticks.forEach(t => {
            t.active = t.ratio <= ratio
          })
        }
      }
    },

    /**
     * 在rangebar上画上移动的标尺
     * */
    createTicks() {
      if (this.snaps) {
        this.$nextTick(function() {
          this.ticks = []
          for (var value = this.min; value <= this.max; value += this.step) {
            var ratio = this.valueToRatio(value)
            this.ticks.push({
              ratio: ratio,
              left: `${ratio * 100}%`
            })
          }
          this.updateTicks()
        })
      }
    },

    /**
     * init
     * 为父元素item设置class需要等待mounted之后
     */
    initDOM() {
      // 在item父元素上添加类item-range
      if (this.itemComponent) {
        if (this.itemComponent.$el) {
          addClass(this.itemComponent.$el, 'item-range')
        }
      }

      // 获取slider的DOM
      this._sliderEl = this.$refs.slider

      // // 为range左右添加属性
      // if (this.$slots && this.$slots['range-left']) {
      //   this.$slots['range-left'].forEach(function (item) {
      //     item.elm.setAttribute('range-left', '')
      //   })
      // }
      // if (this.$slots && this.$slots['range-right']) {
      //   this.$slots['range-right'].forEach(function (item) {
      //     item.elm.setAttribute('range-right', '')
      //   })
      // }
    },
    /**
     * init
     * 初始化传入数据并更新视图
     */
    initData() {
      // 设置标尺
      this.createTicks()

      // 设置value的初始状态
      if (isString(this.valueInner)) {
        let val = Math.round(this.valueInner)
        if (!isNaN(val)) {
          this.valueInner = val
        } else {
          this.valueInner = 0
        }
      }

      if (isNumber(this.valueInner)) {
        this.ratioA = this.valueToRatio(this.valueInner)
      }

      if (isObject(this.valueInner)) {
        this.valA = Math.min(this.valueInner.min, this.valueInner.max)
        this.valB = Math.max(this.valueInner.max, this.valueInner.min)

        this.ratioA = this.valueToRatio(this.valA)
        this.ratioB = this.valueToRatio(this.valB)
      }
      // 更新bar
      this.updateBar()
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    this.$nextTick(() => {
      this.initDOM()
    })
  },
  components: {
    RangeKnobHandle: RangeKnobHandle
  }
}
</script>

<style lang="less">
@import './range.less';
</style>

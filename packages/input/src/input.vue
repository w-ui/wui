<template>
  <div class="wui-input-item">
    <div class="cell-icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <div class="wui-input">
      <template v-if="type == 'varycode'">
        <input type="text" v-model="currentValue" :name="name" @focus="showClear = true" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled">
        <a v-if="!start" class="send-btn" @click="countdown">获取验证码</a>
        <a v-else class="countdown-btn">{{this.remain}}s</a>
      </template>
      <template v-if="type == 'password'">
        <input v-if="!showPwd" type="password" v-model="currentValue" :name="name" @focus="showClear = true" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled">
        <input v-if="showPwd" type="text" v-model="currentValue" :name="name" @focus="showClear = true" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled">
        <a v-if="type == 'password'" class="wui-input-password" tabindex="-1" @click.stop="showPwd = !showPwd">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85" width="16px" height="16px">
            <g>
              <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2   s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025   c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3   C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7   c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z" :fill="showPwd ? '#666' : '#ccc'"/>
            </g>
          </svg>
        </a>
      </template>
      <input v-if="type == 'input'" type="text" v-model="currentValue" :name="name" @focus="showClear = true" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled">
      <input v-if="type == 'number'" type="number" v-model="currentValue" :name="name" @focus="showClear = true" @blur="blurHandler" :maxlength="max" :placeholder="placeholder" :autocomplete="autocomplete" :readonly="readonly" :disabled="disabled">
      <span class="wui-input-clear" tabindex="-1" @click="clearInput" v-show="showClearIcon && showClear && !isempty && !readonly && type != 'varycode'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
          <circle cx="25" cy="25" r="25" fill="#ccc"/>
          <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16"/>
          <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34"/>
        </svg>
      </span>
      <span class="wui-input-error" v-if="showErrorIcon" v-show="isShowError">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
          <circle fill="#EFCE4A" cx="25" cy="25" r="25"/>
          <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="10" x2="25" y2="32"/>
          <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/>
        </svg>
      </span>
      <span class="wui-input-warn" v-if="showRequiredIcon && showErrorIcon" v-show="(required || (!!min && min > 0)) && isempty && showWarn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
          <circle fill="#EFCE4A" cx="25" cy="25" r="25"/>
          <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="10" x2="25" y2="32"/>
          <line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/>
        </svg>
      </span>
      <span class="wui-input-success" v-if="showSuccessIcon" v-show="isShowSuccess">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="16px" height="16px">
          <circle fill="lightgreen" cx="25" cy="25" r="25"/>
          <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
          38,15 22,33 12,25 "/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-input',
  props: {
    name: String,
    placeholder: String,
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean,
    regex: String,
    autocomplete: {
      type: String,
      default: 'off'
    },
    showClearIcon: {
      type: Boolean,
      default: true
    },
    showErrorIcon: {
      type: Boolean,
      default: false
    },
    showSuccessIcon: {
      type: Boolean,
      default: false
    },
    showRequiredIcon: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      validator(value) {
        if (value) {
          return ['input', 'password', 'number', 'varycode'].indexOf(value) > -1
        }
        return true
      },
      default: 'input'
    },
    max: {
      validator(val) {
        return /^\d*$/.test(val)
      }
    },
    min: {
      validator(val) {
        return /^\d*$/.test(val)
      }
    },
    wait: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      currentValue: this.value,
      isempty: !this.value,
      iserror: false,
      showPwd: false,
      showClear: false,
      showWarn: true,
      initError: false,
      valid: true,
      errorMsg: '',
      errorCode: '',
      regexObj: {
        email:
          '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
        mobile: '^(86)?1[3,4,5,7,8]\\d{9}$',
        bankcard: '^\\d{15,19}$'
      },
      start: false,
      remain: this.wait
    }
  },
  computed: {
    isShowError() {
      return (
        (!!this.regex || !!this.min || !!this.max || this.required) &&
        this.iserror &&
        this.initError
      )
    },
    isShowSuccess() {
      return (
        (!!this.regex || !!this.min || !!this.max || this.required) &&
        !this.iserror &&
        this.currentValue != ''
      )
    }
  },

  methods: {
    validatorInput(val, showError) {
      this.initError = showError

      if (showError) this.showWarn = false

      if (this.required && val === '') {
        this.setError('不能为空', 'NOT_NULL')
        this.iserror = true
        return
      }

      if (this.type == 'number' && this.min && parseInt(val) < this.min) {
        this.setError(`输入不能小于${this.min}`, 'NOT_MIN_SIZE')
        this.iserror = true
        return
      }

      if (this.type == 'number' && this.max && parseInt(val) > this.max) {
        this.setError(
          `输入不能小于${this.min}，不能大于${this.max}`,
          'NOT_MAX_SIZE'
        )
        this.iserror = true
        return
      }

      const v = val
      const reg = this.trim(this.regex, '/')
      if (!!v && this.regex && !new RegExp(reg).test(v)) {
        this.setError('输入字符不符合规则', 'NOT_REGEX_RULE')
        this.iserror = true
        return
      }

      if (this.regex) {
        if (!new RegExp(this.regex).test(val)) {
          this.setError('输入字符不符合规则', 'NOT_REGEX_RULE')
          this.iserror = true
          return
        }
      }

      this.iserror = false
      this.valid = true
      this.errorMsg = ''
      this.errorCode = ''
    },
    blurHandler() {
      this.validatorInput(this.currentValue, true)

      setTimeout(() => {
        this.showClear = false
      }, 200)
    },
    clearInput() {
      this.currentValue = ''
      this.emitInput()
    },
    emitInput() {
      if (this.regex === 'bankcard') {
        if (/\S{5}/.test(this.currentValue)) {
          this.currentValue = this.currentValue
            .replace(/\s/g, '')
            .replace(/(\d{4})(?=\d)/g, '$1 ')
        }
        this.$emit('input', this.currentValue.replace(/\s/g, ''))
        return
      }
      this.$emit('input', this.currentValue)
    },
    setError(error, code) {
      this.errorMsg = error
      this.errorCode = code
      this.valid = false
    },
    trim(str, char) {
      if (!!str) {
        return str.replace(
          new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'),
          ''
        )
      }
      return str
    },
    countdown() {
      if (!/^\d{11}$/.test(this.currentValue)) {
        this.$el.style.animation = 'shakeBorder linear 1s'
        setTimeout(() => {
          this.$el.style.animation = ''
        }, 1000)
        return
      }
      this.start = true
      let i = 0
      let cd = () => {
        ++i
        this.remain = this.wait - i
        if (this.remain > 0) {
          setTimeout(cd, 1000)
        } else {
          this.start = false
        }
      }
      setTimeout(cd, 1000)
      this.$emit('post', this.currentValue)
    }
  },

  watch: {
    value(val) {
      this.currentValue = val
      this.emitInput()
    },
    currentValue(val) {
      this.isempty = !val
      this.validatorInput(val, true)
      this.emitInput()
    },
    required(val) {
      this.required = val
      this.validatorInput(this.currentValue, false)
    }
  },

  mounted() {
    if (this.type != 'text') {
      this.validatorInput(this.currentValue, false)
    }
  }
}
</script>

<style lang="less">
@import './input.less';
</style>

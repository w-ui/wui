<template>
  <div class="input-item">
   <template v-if="type == 'text'">
    <a class="wui-cell" :href="link">
      <span class="cell-mask" v-if="link"></span>
      <div class="cell-wrapper">
        <div class="cell-title">
          <slot name="icon">
            <i v-if="icon" class="wui" :class="'wui-' + icon"></i>
          </slot>
          <slot name="title">
            <span class="cell-text" v-text="title"></span>
            <span v-if="label" class="cell-label" v-text="label"></span>
          </slot>
        </div>
        <div class="cell-value" :class="{ 'is-link' : link }">
          <slot>
            <span v-text="value"></span>
          </slot>
        </div>
      </div>
      <i v-if="link" class="cell-allow-right"></i>
    </a>
   </template>
   <div v-else class="input-item">
    <div class="wui-cell">
      <div class="cell-wrapper">
        <div class="cell-title">
          <slot name="icon">
            <i v-if="icon" class="wui" :class="'wui-' + icon"></i>
          </slot>
          <slot name="title">
            <span class="cell-text" v-text="title"></span>
            <span v-if="label" class="cell-label" v-text="label"></span>
          </slot>
        </div>
        <div class="cell-value" :class="{ 'is-link' : link }">
          <slot>
            <div class="wui-input">
              <template >
                <span v-if="type == 'text'" v-text="value"></span>
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
              <span class="wui-input-clear" tabindex="-1" @click="clearInput" v-show="showClearIcon && showClear && !isempty && !readonly">
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
          </slot>
        </div>
      </div>

    </div>
    
   </div>

  </div>
</template>

<script>


export default {
  name: 'w-cell',
  props: {
    link: [String, Object],
    icon: String,
    title: String,
    label: String,
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
      default: true
    },
    showSuccessIcon: {
      type: Boolean,
      default: true
    },
    showRequiredIcon: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      validator (value) {
        if(value){
          return ['text', 'input', 'password', 'number'].indexOf(value) > -1;
        }
        return true
      },
      default: 'text'
    },
    max: {
        validator(val) {
            return /^\d*$/.test(val);
        }
    },
    min: {
        validator(val) {
            return /^\d*$/.test(val);
        }
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
            email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
            mobile: '^(86)?1[3,4,5,7,8]\\d{9}$',
            bankcard: '^\\d{15,19}$'
        }
    }
  },
  computed: {
    href() {
      if (this.link && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.path;
      }
      return this.link;
    },
    isShowError() {
      return (!!this.regex || !!this.min || !!this.max || this.required) && this.iserror && this.initError
    },
    isShowSuccess() {
      return (!!this.regex || !!this.min || !!this.max || this.required) && !this.iserror && (this.currentValue != '')
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    },
    validatorInput(val, showError) {
      this.initError = showError;

      if(showError) this.showWarn = false;

      if(this.required && val === '') {
          this.setError('不能为空', 'NOT_NULL');
          this.iserror = true;
          return;
      }

      if (this.type == "number" && this.min && parseInt(val) < this.min) {
          this.setError(`输入不能小于${this.min}`, 'NOT_MIN_SIZE');
          this.iserror = true;
          return;
      }

      if (this.type == "number" && this.max && parseInt(val) > this.max) {
          this.setError(`输入不能小于${this.min}，不能大于${this.max}`, 'NOT_MAX_SIZE');
          this.iserror = true;
          return;
      }

      const v = this.regex !== 'bankcard' ? val.toString().replace(/\s/g, '') : val;
      const reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
      if (!!v && this.regex && !new RegExp(reg).test(v)) {
          this.setError('输入字符不符合规则', 'NOT_REGEX_RULE');
          this.iserror = true;
          return;
      }

      if(this.regex){
        if (!new RegExp(this.regex).test(val)) {
          this.setError('输入字符不符合规则', 'NOT_REGEX_RULE');
          this.iserror = true;
          return;
        }
      }

      this.iserror = false;
      this.valid = true;
      this.errorMsg = '';
      this.errorCode = '';

    },
    blurHandler() {
      this.validatorInput(this.currentValue, true);

      setTimeout(() => {
          this.showClear = false;
      }, 200);
    },
    clearInput() {
      this.currentValue = '';
      this.emitInput();
    },
    emitInput() {
      if (this.regex === 'bankcard') {
          if (/\S{5}/.test(this.currentValue)) {
              this.currentValue = this.currentValue.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
          }
          this.$emit('input', this.currentValue.replace(/\s/g, ''));
          return;
      }
      this.$emit('input', this.currentValue);
    },
    setError(error, code) {
      this.errorMsg = error;
      this.errorCode = code;
      this.valid = false;
    },
    trim(str, char) {
      if (!!str) {
          return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
      }
      return str;
    }
  },

  watch: {
    value(val) {
        this.currentValue = val;
        this.emitInput();
    },
    currentValue(val) {
        this.isempty = !val;
        this.validatorInput(val, true);
        this.emitInput();
    },
    required(val) {
        this.required = val;
        this.validatorInput(this.currentValue, false);
    }
  },

  mounted() {
    if(this.type != 'text'){
      this.validatorInput(this.currentValue, false);
    }
  }

};
</script>

<style lang="less">
  @import './cell.less';
</style>

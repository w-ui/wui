<template>
  <div>
  <form class="search-form" @submit.prevent="submit">
    <div class="search-form-wrap">
      <div :class="{'search-form-inner': true, active: active}">
        <div class="search-form-input-wrap">
          <div class="search-form-icon"></div>
          <input v-model="keyword" ref="input" type="text" name="keyword" class="search-form-input" :placeholder="placeholder || '请输入关键字'" @focus="focus" @keyup="onChange">
          <div v-show="showClear" @click="clear" class="search-form-clear"></div>
        </div>
        <button type="submit" class="search-form-button">搜索</button>
      </div>
    </div>
  </form>
  <div v-for="item in result" v-show="showRef" class="ref-item" @click="submit(item.key)">
    {{item.caption}}
  </div>
  </div>
</template>
<script>

export default {
  name: 'wm-search',
  props: {
    value: String,
    placeholder: String,
    result: Array,
    show: Boolean,
    searchCb: Function,
    onChangeCb: Function,
    onChangeCallInterval: Number
  },
  data () {
    return {
      active: false,
      keyword: this.value || '',
      timeout: null,
      showRef: false
    }
  },
  computed: {
    showClear () {
      return this.keyword
    }
  },
  methods: {
    clear () {
      this.keyword = ''
      this.$refs.input.focus()
    },
    submit (key) {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
      this.active = true
      this.$refs.input.blur()
      if (this.searchCb && Object.prototype.toString.call(this.searchCb) === '[object Function]') {
        if (key && Object.prototype.toString.call(key) === '[object String]') {
          this.searchCb(key)
          this.keyword = key
          this.showRef = false
        } else {
          if (this.keyword) {
            this.searchCb(this.keyword)
            this.showRef = false
          }
        }
      }
    },
    focus () {
      this.active = false
    },
    onChange () {
      if (this.timeout) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
      var func = () => {}
      if (this.onChangeCb && Object.prototype.toString.call(this.onChangeCb) === '[object Function]') {
        func = this.onChangeCb
        this.showRef = true
      }
      this.timeout = setTimeout(func.bind(this, this.keyword), this.onChangeCallInterval || 500)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.input.focus()
    })
  }
}
</script>
<style lang="less">
  // 边框颜色
  @bdr-color: #f5f5f5;
  //背景色
  @bg-default: #f5f5f5;
  @red-default: #ff2d4b;

  .ref-item {
    background-color: #fff;
    font-size: .6rem;
    font-weight: normal;
    color: #808080;
    height: 2rem;
    line-height: 2rem;
    padding-left: 0.6rem;
    border-bottom: 1px solid @bdr-color;
  }

.search-form {
  height: 0.4rem;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid @bdr-color;
  width: 100%;
  top: 0;
  padding: 0 0.2rem;
  &-wrap {
    width: 100%;
    overflow: hidden;
  }
  &-inner {
    transition: all 0.5s ease;
    &.active {
      margin-right: 0.1rem;
    }
  }
  &-input-wrap {
    height: 0.8rem;
    border-radius: 4px;
    position: relative;
    margin: 0;
    overflow: hidden;
    background: @bg-default;
  }
  &-input {
    border: none;
    outline: none;
    height: 0.8rem;
    width: 100%;
    height: 100%;
    padding-left: 0.2rem;
    font-size: 14px;
    background: @bg-default;
  }
  &-icon {
    position: absolute;
    background-image: url('./search.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 0.4rem;
    height: 0,4rem;
    background-color: @bg-default;
  }
  &-clear {
    height: 100%;
    width: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-image: url(./icon-close-dark.svg);
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  &-button {
    float: right;
    color: #fff;
    text-align: center;
    background: @red-default;
    border: none;
    font-size: 14px;
  }
}
</style>

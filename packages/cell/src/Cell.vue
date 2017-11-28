<template>
  <a class="wui-cell" :href="link">
    <span class="w-cell-mask" v-if="link"></span>
    <div class="w-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="w-cell-wrapper">
      <div class="w-cell-title">
        <slot name="icon">
          <i v-if="icon" class="wui" :class="'wui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="w-cell-text" v-text="title"></span>
          <span v-if="label" class="w-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="w-cell-value" :class="{ 'is-link' : link }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="w-cell-right">
      <slot name="right"></slot>
    </div>
    <i v-if="link" class="w-cell-allow-right"></i>
  </a>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('w-ui/packages/font/style.css');
}

/**
 * w-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <w-cell title="标题文字" icon="back" is-link value="描述文字"></w-cell>
 * <w-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </w-cell>
 */
export default {
  name: 'w-cell',

  props: {
    link: [String, Object],
    icon: String,
    title: String,
    label: String,
    value: {}
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
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="less-loader" scoped>

  .wui-cell {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 1rem;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;

    &:first-child {
      .w-cell-wrapper {
        background-origin: border-box;
      }
    }

    &:last-child {
      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
    }

    .w-cell-wrapper {
      background-image:linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
      background-size: 120% 1px;
      background-repeat: no-repeat;
      background-position: top left;
      background-origin: content-box;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      font-size: 0.32rem;
      line-height: 1;
      min-height: inherit;
      overflow: hidden;
      padding: 0 0.2rem;
      width: 100%;
      text-align: left;

      .w-cell-mask {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      .w-cell-left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }

      .w-cell-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }

      .w-cell-allow-right::after {
        border: solid 2px #c8c8cd;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        position: absolute 50% 20px auto auto;
        size: 5px;
        transform: translateY(-50%) rotate(45deg);
      }

      .w-cell-text {
        vertical-align: middle;
      }

      .w-cell-label {
        color: #888;
        display: block;
        font-size: 0.24rem;
        margin-top: 0.12rem;
      }

      .w-cell-img {
        vertical-align: middle;
      }

      .w-cell-title {
        flex: 1;
        img {
          vertical-align: middle;
          display: inline;
        }
      }

      .w-cell-value {
        color: #888;
        display: flex;
        align-items: center;
        link {
          margin-right: 0.48rem;
        }
      }
    }
  }
</style>

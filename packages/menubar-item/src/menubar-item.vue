<template>
    <router-link :to="link" class="wui-menubar-item" :class="classes" :style="styles">
        <span class="wui-menubar-icon">
            <slot name="icon"></slot>
            <span class="wui-menubar-badge">
                <slot name="badge"></slot>
            </span>
            <span class="wui-menubar-dot" v-if="dot"></span>
        </span>
        <span class="wui-menubar-txt">{{title}}</span>
    </router-link>
</template>

<script type="text/babel">
export default {
  name: 'w-menubar-item',
  props: {
    link: String,
    title: String,
    active: Boolean,
    dot: Boolean
  },
  computed: {
    classes() {
      return this.active ? 'menubar-active' : ''
    },
    styles() {
      return { color: this.active ? this.activeColor : '#979797' }
    }
  }
}
</script>

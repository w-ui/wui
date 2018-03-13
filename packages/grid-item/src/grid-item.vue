<template>
    <router-link class="wui-grid-item" :to="link || ''">
        <div class="wui-grid-icon" v-if="checkIcon">
            <slot name="icon"></slot>
        </div>
        <div class="wui-grid-txt" v-if="checkText">
            <slot name="text"></slot>
        </div>
        <slot></slot>
    </router-link>
</template>

<script type="text/babel">
export default {
  name: 'w-grid-item',
  props: {
    link: [String, Object]
  },
  computed: {
    checkIcon() {
      return !!this.$slots.icon
    },
    checkText() {
      return !!this.$slots.text
    }
  }
}
</script>

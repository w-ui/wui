<template>
    <div class="scroll-tab-content-item">
        <slot name="header">
            <strong class="scroll-tab-content-title">{{name}}</strong>
        </slot>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'w-scroll-tab-panel',
  props: {
    name: String,
    icon: String,
    active: Boolean
  }
}
</script>

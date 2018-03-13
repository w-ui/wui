<template>
    <li class="wui-step-item" :class="currentClass">
        <template v-if="theme == 'bottom'">
            <em :class="stepNumber < current ? 'wui-step-checkmark' : ''"><i>{{stepNumber >= current ? stepNumber : ''}}</i></em>
        </template>
        <template v-else>
            <em></em>
        </template>
        <div class="wui-step-item-top">
            <div class="wui-step-item-top-text"><span><slot name="top"></slot></span></div>
        </div>
        <div class="wui-step-item-bottom">
            <slot name="bottom"></slot>
        </div>
    </li>
</template>

<script type="text/babel">
export default {
  name: 'w-step-item',
  data() {
    return {
      stepNumber: '',
      current: '',
      theme: '',
      currentClass: ''
    }
  },
  methods: {
    setCurrentClass() {
      if (this.theme == 'down') {
        this.currentClass =
          this.stepNumber == this.current ? 'wui-step-item-current' : ''
        return
      }
      this.currentClass =
        this.stepNumber <= this.current ? 'wui-step-item-current' : ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.updateChildStatus()
    })
  }
}
</script>

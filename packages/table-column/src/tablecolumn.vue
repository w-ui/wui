<template>
    <div class="td">
        <slot :row="item">
            <span>{{item[prop]}}</span>
        </slot>
    </div>
</template>

<script>
export default {
  name: 'w-column',
  props: {
    name: String,
    prop: String,
    width: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object
    }
  },
  mounted() {}
}
</script>




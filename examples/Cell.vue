<template>
  <div>
    <w-cell title="标题文字"></w-cell>
    <w-cell title="标题文字" value="说明文字"></w-cell>
    <w-cell title="标题文字" to="//github.com" is-link value="带链接"></w-cell>
    <w-cell title="标题文字" icon="more" value="带 icon"></w-cell>
    <w-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon" src="/assets/wui.png" width="24" height="24">
    </w-cell>
    <w-cell title="标题文字" label="描述信息" is-link></w-cell>
  </div>
</template>
  
<script>
import Cell from 'packages/cell/src/Cell.vue'

export default {
  components: {
    'w-cell': Cell
  }
}
</script>



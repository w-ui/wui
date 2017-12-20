<template>
  <div>
    <div class="paragraph">
      <w-badge type="primary">22</w-badge>
      <w-badge type="danger">222</w-badge>
      <w-badge type="warning">222</w-badge>
      <w-badge type="hollow">2</w-badge>
      <w-badge bgcolor="#000" color="#FFF">22222</w-badge>
    </div>
  </div>
</template>


<script>
import Badge from 'packages/badge'

export default {
  components: {
    'w-badge': Badge
  }
}
</script>
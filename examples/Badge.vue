<template>
  <div>
    <div class="paragraph">
      <Badge type="primary">22</Badge>
      <Badge type="danger">222</Badge>
      <Badge type="warning">222</Badge>
      <Badge type="hollow">2</Badge>
      <Badge bgcolor="#000" color="#FFF">22222</Badge>
    </div>
  </div>
</template>


<script>
import { Badge } from 'packages/badge'

export default {
  components: {
    Badge
  }
}
</script>
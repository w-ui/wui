

<template>
  <div>
    <Tag :tags="tags"></Tag>

    <div :style="{'padding': '20px'}">
      tags: {{ tags.join(',') }}
      
    </div>
  </div>

</template>

<script>
import { Tag } from 'packages/tag'

export default {
  components: {
    Tag
  },
  data() {
    return {
      tags: ['米开朗基罗', '莫奈', '梵高', '达芬奇']
    }
  }
}
</script>
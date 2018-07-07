# Tag 标签编辑器 


### DEMO

```html

<template>
  <div>
    <Tag :tags="tags"></Tag>
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

```

###  Tag 属性介绍

| 参数      | 说明        | 类型       | 可选值        | 默认值     |
|----------|-------------|-----------|--------------|-----------|
| tags     | 标签数组     | Array     |              |           |
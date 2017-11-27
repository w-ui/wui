#  Textarea 文本框

### 概述

文本框组件

### Demo

```html
<template>
  <div style="border: 1px #f0f0f0 solid; padding: 10px;">
    <w-textarea  v-model="str" maxlength="300">
    </w-textarea>
  </div>
</template>

<script>
    import Textarea from 'packages/textarea'

    export default {
      components: {
        'w-textarea': Textarea
      },
      data() {
        return {
          str: 'hi,wui'
        }
      }
    }
</script>

```

###  Textarea 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| placeholder   | placeholder     | String    |            |           |
| maxlength     | 最大长度         | Number     |            |          |
| readonly      | 只读            | Boolean    |            |          |
| showCounter   | 显示计数         | Boolean    |            |          |


###  Textarea 事件介绍 Event

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| change        | 文本改变事件      |           |            |           |


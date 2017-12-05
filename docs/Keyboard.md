# Keyboard 安全键盘 

### demo
```html
<template>
  <div>
    <w-button size="large">支付</w-button>
    <w-keyboard v-model="show"></w-keyboard>
  </div>
</template>


<script>
import Keyboard from 'packages/keyboard'
import Button from 'packages/button'

export default {
  components: {
    'w-keyboard': Keyboard,
    'w-button': Button
  },
  data() {
    return {
      show: false;
    }
  }
}
</script>

```

###  Keyboard 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| inputDone     | Function         | String    |    |       |
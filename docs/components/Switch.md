#  Switch 开关

### Demo

```html
<template>
  <div>
    <w-switch v-model="switch1"></w-switch>
    <p>状态： {{switch1}}</p>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          switch1: false
        }
      }
    }
</script>

```

###  Switch 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| disabled      | 是否禁用         | Boolean   |            |  false    |
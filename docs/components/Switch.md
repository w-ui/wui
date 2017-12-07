#  Switch 开关

### 概述

两种相互对立的状态间的切换，多用于触发「开/关」

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

###  Audio 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| disabled      | 是否禁用         | Boolean   |            |  false    |
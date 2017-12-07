#  Radio 单选

### 概述

单选框组件


```html
<template>
  <div>
    <div class="paragraph">
      <w-radio-group v-model="radio1">
        <w-radio val="奔驰"></w-radio>
        <w-radio val="宝马"></w-radio>
        <w-radio val="奥迪"></w-radio>
      </w-radio-group>
    </div>

    <div class="paragraph">
      <w-radio-group v-model="radio2">
        <w-radio val="benz">奔驰</w-radio>
        <w-radio val="bmw宝马">宝马</w-radio>
        <w-radio val="audi">奥迪</w-radio>
      </w-radio-group>
    </div>


    <div class="paragraph">
      <w-radio-group v-model="radio3">
        <w-radio val="奔驰"></w-radio>
        <w-radio val="宝马"></w-radio>
        <w-radio val="奥迪" disabled></w-radio>
      </w-radio-group>
    </div>
  </div>
</template>

<script>
  import Checkbox from 'packages/checkbox'
  import CheckboxGroup from 'packages/checkbox-group'

  export default {
    data(){
      return {
        radio1: false,
        radio2: false,
        radio3: false
      }
    }
  }
</script>

```

###  Audio 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| disabled      | 是否禁用         | Boolean   |            |  false    |
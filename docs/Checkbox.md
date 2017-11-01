#  Checkbox 多选

### 概述

多选框组件


```html
<template>
  <div>
    <div class="paragraph">
      <w-checkbox-group v-model="radio1">
        <w-checkbox val="奔驰"></w-checkbox>
        <w-checkbox val="宝马"></w-checkbox>
        <w-checkbox val="奥迪"></w-checkbox>
      </w-checkbox-group>
    </div>

    <div class="paragraph">
      <w-checkbox-group v-model="radio2">
        <w-checkbox val="benz">奔驰</w-checkbox>
        <w-checkbox val="bmw宝马">宝马</w-checkbox>
        <w-checkbox val="audi">奥迪</w-checkbox>
      </w-checkbox-group>
    </div>


    <div class="paragraph">
      <w-checkbox-group v-model="radio3">
        <w-checkbox val="奔驰"></w-checkbox>
        <w-checkbox val="宝马"></w-checkbox>
        <w-checkbox val="奥迪" disabled></w-checkbox>
      </w-checkbox-group>
    </div>
  </div>
</template>

<script>
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
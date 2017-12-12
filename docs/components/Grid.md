#  Grid 布局栅格


### 概述

+ 类似于bootstrap的删格系统，最大列数为6
+ 复合组件，需要同grid-item一起使用



### Demo

```html
<template>
  <div>
    <w-grid :col="3">
      <w-grid-item v-for="n in 6">
          grids-3
      </w-grid-item>
    </w-grid>

    <div class="paragraph">
      <h3>slot</h3>
      <w-grid :col="2">
        <w-grid-item link="/doc/Button">
            <img slot="icon" src="https://cn.vuejs.org/images/logo.png">
            <span slot="text">image</span>
        </w-grid-item>
        <w-grid-item>
            <img slot="icon" src="https://cn.vuejs.org/images/logo.png">
            <span slot="text">iconfont</span>
        </w-grid-item>
      </w-grid>
    </div>

  </div>
</template>

<script>
import Grid from 'packages/grid'
import GridItem from 'packages/grid-item'

export default {
  components: {
    'w-grid': Grid,
    'w-grid-item': GridItem
  }
}
</script>

```

###  grid 属性介绍 props

| 参数     | 说明             | 类型       | 可选值        |  默认值    |
|---------|------------------|-----------|--------------|-----------|
| col     | 每行显示列数	     | Number    |  2, 3, 4, 5, 6  |   2      |



###  grid-item 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| link          | 单元格链接        |  String   |            |           |


###  grid-item 插槽介绍 slot

| 名称      |  描述   | 说明        | 
|----------|---------|-------------|
| icon     | 单元格 icon  |           | 
| text     | 单元格 文本  |            | 
| default  | 单元格内容   |            | 

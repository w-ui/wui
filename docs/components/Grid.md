#  Grid 布局栅格


### 概述


```html
<template>
    <w-grid :rows="3" title="等分3列">
        <w-grid-item v-for="n in 6">
            grids-3
        </w-grid-item>
    </w-grid>
</template>
```

### Demo

```html
<template>
  <div>
    <w-grid :rows="3">
      <w-grid-item v-for="n in 6">
          grids-3
      </w-grid-item>
    </w-grid>

    <div class="paragraph">
      <h3>slot</h3>
      <w-grid :rows="2">
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

###  grid 属性介绍 Attributes

| 参数     | 说明             | 类型       | 可选值        |  默认值    |
|---------|------------------|-----------|--------------|-----------|
| title   | 每组表格标题       | String    |              |           |
| col    | 每行显示列数	     | Number    |  2, 3, 4, 5, 6  |   2      |



###  grid-item 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| name    | 描述         | String   |                |      |
| slot    | slot内容     | String   |   icon / text  |      |
| link    | 跳转URL      | String   |   icon / text  |      |

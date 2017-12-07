#  Tab 选项卡

### 概述

选项卡组件

### Demo

```html
<template>
  <div>
    <w-tab>
        <w-tab-panel title="详情" active>
          详情内容
        </w-tab-panel>
        <w-tab-panel title="参数">
          参数内容
        </w-tab-panel>
        <w-tab-panel title="评价">
          评价内容
        </w-tab-panel>
        <w-tab-panel title="推荐">
          推荐内容
        </w-tab-panel>
    </w-tab>
  </div>
</template>

<script>
    import Tab from 'packages/tab'
    import TabPanel from 'packages/tab-panel'

    export default {
      components: {
        'w-tab': Tab,
        'w-tab-panel': TabPanel
      }
    }
</script>

```

###  Tab 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| 无      |          |      |            |      |


###  Tab 事件介绍 Event

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| change      | 事件         | Boolean   |            |  false    |


###  Tab-Panel 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| title      |   选项卡标题       |   String   |            |      |
| active      |   是否激活当前选项卡	       |   Boolean   |            |      |

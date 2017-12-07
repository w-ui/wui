#  Progressbar 进度条

### 概述

进度条组件

### Demo

```html
<template>
  <div>
    <div class="paragraph">
      <h3>线形进度条</h3>
      <w-progressbar type="line" :progress="progress1"></w-progressbar>
    </div>

    <div class="paragraph">
      <h3>圆形进度条</h3>
      <w-progressbar :progress="progress2" barWidth="4">{{progress2 * 100}}%</w-progressbar>
      <w-button size="large" @click.native="progress2 = 0.9">设置为90%</w-button>
    </div>

  </div>
</template>

<script>
    import ProgressBar from 'packages/progress-bar'
    import Button from 'packages/button'

    export default {
      components: {
        'w-button': ProgressBar,
        'w-progress-bar': Button
      }
    }
</script>

```

###  Tab 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| type          |  进度条类型       |  String    |   circle, line  |   circle   |
| progress      |  百分比          |  Number    |     |     |
| bgColor       |  进度条背景颜色    |  Number    |     |     |
| width         |  宽度／高度        |  Number    |     |     |
| barWidth      | 高亮进度条 宽度／高度  |  Number  |     |     |
| barColor      |  高亮进度条颜色   |  String    |     |     |



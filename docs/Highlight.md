#  Highlight 代码高亮

### 概述

代码高亮

### Demo

```html
<template>
  <div v-highlight>
    <code>
      <div class="paragraph">
        <h3>自动触发</h3>
        <w-countup endnum="1200" duration="3" decimals="2" separator="," prefix="$" suffix="美元"
  ></w-countup>
      </div>

      <div class="paragraph">
        <h3>手动触发</h3>
        <w-countup endnum="100" suffix="%" :start="start1"></w-countup>
        <w-button size="large" @click.native="start1 = true">启动</w-button>
      </div>
    </code>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Highlight from 'packages/highlight'
    Vue.use(Highlight)

    export default {
    }
</script>

```

###  Highlight 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| start      |  是否立即开始动画      |  Boolean    |            |  true    |


#  Countup 数字动画

### 概述

数字动画组件

### Demo

```html
<template>
  <div>
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

  </div>
</template>

<script>
    import Countup from 'packages/countup'
    import Button from 'packages/button'

    export default {
      components: {
        'w-countup': Countup,
        'w-button': Button
      },
      data(){
        return {
          start1: false
        }
      }
    }
</script>

```

###  Tab 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| start      |  是否立即开始动画      |  Boolean    |            |  true    |
| startnum      |  开始数值	      |  Number    |            |      |
| endnum      |  结束数值	      |  Number    |            |      |
| decimals      |  小数的位数	      |  Number    |            |  0    |
| duration      |  动画执行时间	      |  Number    |            |  2    |
| useEasing      |  是否使用easy动画效果	      |  Boolean    |            |  false    |
| separator      |  每隔三位的分隔符	      |  String    |            |      |
| prefix      |  数字前头标识	      |  String    |            |      |
| suffix      |  数字末尾标识	      |  String    |            |      |
| callback      |  动画执行完毕调用方法	      |  Function    |            |      |


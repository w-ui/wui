#  Step 步骤条

### 概述

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步

```html
<template>
  <div>
    <w-step :current="cur">
        <w-step-item>
            <span slot="bottom">步骤一</span>
        </w-step-item>
        <w-step-item>
            <span slot="bottom">步骤二</span>
        </w-step-item>
        <w-step-item>
            <span slot="bottom">步骤三</span>
        </w-step-item>
        <w-step-item>
            <span slot="bottom">步骤四</span>
        </w-step-item>
    </w-step>

    <w-button size="large">下一步</w-button>

  </div>
</template>

<script>
  import Step from 'packages/step'
  import StepItem from 'packages/step-item'
  import Button from 'packages/button'

    export default {
      components: {
        'w-step': Step,
        'w-step-item': StepItem,
        'w-button': Button
      },
      data(){
        return {
          cur: 1
        }
      }
    }
</script>

```

###  Audio 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| current      | 当前步骤         | Number   |            |      |
| theme      | 主题         | String   |  top，bottom          |  bottom    |
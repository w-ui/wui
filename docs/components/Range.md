# Range 滑动条 

### Demo
```javascript
<template>
  <div>
    <div class="paragraph">
      <h3>屏幕亮度</h3>
      <div class="range-wrapper">
        <w-icon name="light-bulb"></w-icon>
        <w-range v-model="brightness" :max="100" :min="0" :snaps="true" :step="10"></w-range>
      </div>
    </div>
    <div class="paragraph">
      <h3>音量</h3>
      <div class="range-wrapper">
        <w-icon name="volume"></w-icon>
        <w-range v-model="volumn" :max="10" :min="0"></w-range>
      </div>
    </div>
    <div class="paragraph">
      <h3>选择范围 [{{this.range}}]</h3>
      <div class="range-wrapper">
        <w-icon name="layout-sidebar-left"></w-icon>
        <w-range v-model="range" :max="100" :min="0" :multi="true"></w-range>
        <w-icon name="layout-sidebar-right"></w-icon>
      </div>
    </div>
  </div>
</template>


<script>
import Range from 'packages/range'
import Icon from 'packages/icon'

export default {
  components: {
    'w-range': Range,
    'w-icon': Icon
  },
  data () {
    return {
      brightness: 50,
      volumn: 2,
      range: {min: 10, max: 80},
    }
  }
}
</script>

<style lang="less">
  .paragraph{
    padding: 10px;
    border: 1px #f0f0f0 solid;
    border-radius: 4px;
    margin-bottom: 0.2rem;

    h3{
      border-bottom: 1px #f0f0f0 solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    .range-wrapper{
      display: flex;
      align-items: center;
    }
  }
</style>

```

###  Range 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| color         | 颜色         | String    | primary, danger, warning, light |   |
| disabled      | 是否禁用      | String    |              |          |
| multi         | 字体颜色      | String    |              |          | 
| max           | 字体颜色      | String    |              |          | 
| min           | 字体颜色      | String    |              |          | 
| pin           | 字体颜色      | String    |              |          | 
| snaps         | 字体颜色      | String    |              |          | 
| step          | 字体颜色      | String    |              |          | 
| value         | 字体颜色      | String    |              |          | 
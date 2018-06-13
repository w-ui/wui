# Backtop 返回顶部 

### 基本用法

```html
//slot
<template>
  <div>
    <Backtop>
      <img src=""/>
    </Backtop>
  </div>
</template>

//default
<template>
  <div>
    <Backtop></Backtop>
  </div>
</template>
```

### Demo
```html
<template>
  <div>
    <div style="height: 4000px; background: linear-gradient(lightgreen, green)"></div>
    <Backtop></Backtop>
  </div>
</template>


<script>
import { Backtop } from 'w-ui'

export default {
  components: {
    Backtop
  }
}
</script>
```

###  Backtop 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| default       |             |           |              |       |
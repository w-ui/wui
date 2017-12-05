# Backtop 返回顶部 

### 基本用法

```html
//slot
<template>
  <div>
    <w-backtop>
      <img src=""/>
    </w-backtop>
  </div>
</template>

//default
<template>
  <div>
    <w-backtop></w-backtop>
  </div>
</template>
```

### demo
```javascript
<template>
  <div>
    <div style="height: 4000px; background: linear-gradient(lightgreen, green)"></div>
    <w-backtop></w-backtop>
  </div>
</template>


<script>
import Backtop from 'packages/backtop'

export default {
  components: {
    'w-backtop': Backtop
  }
}
</script>

```

###  Backtop 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| default       |             |           |              |       |
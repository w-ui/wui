# Badge 角标 

### 基本用法

```javascript
<template>
  <div>
    <w-badge type="primary">22</w-badge>
    <w-badge type="danger">222</w-badge>
    <w-badge type="warning">222</w-badge>
    <w-badge type="hollow">2</w-badge>
    <w-badge bgcolor="#000" color="#FFF">22222</w-badge>
  </div>
</template>
```

### demo
```javascript
<template>
  <div>
    <w-badge type="primary">22</w-badge>
    <w-badge type="danger">222</w-badge>
    <w-badge type="warning">222</w-badge>
    <w-badge type="hollow">2</w-badge>
    <w-badge bgcolor="#000" color="#FFF">22222</w-badge>
  </div>
</template>


<script>
import Badge from 'packages/badge'

export default {
  components: {
    'w-badge': Badge
  }
}
</script>

```

###  Backtop 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| type          | 类型         | String    |  primary, danger, warning, hollow  |       |
| bgcolor       | 背景颜色      | String    |              |          |
| color         | 字体颜色      | String    |              |          | 
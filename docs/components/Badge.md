# Badge 角标 

### 基本用法

```html
<template>
  <div>
    <Badge type="primary">22</Badge>
    <Badge type="danger">222</Badge>
    <Badge type="warning">222</Badge>
    <Badge type="hollow">2</Badge>
    <Badge bgcolor="#000" color="#FFF">22222</Badge>
  </div>
</template>
```

### Demo
```html
<template>
  <div>
    <div class="paragraph">
      <Badge type="primary">22</Badge>
      <Badge type="danger">222</Badge>
      <Badge type="warning">222</Badge>
      <Badge type="hollow">2</Badge>
      <Badge bgcolor="#000" color="#FFF">22222</Badge>
    </div>
  </div>
</template>


<script>
import { Badge } from 'w-ui'

export default {
  components: {
    Badge
  }
}
</script>

```

###  Badge 属性介绍 props

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| type          | 类型         | String    |  primary, danger, warning, hollow  |       |
| bgcolor       | 背景颜色      | String    |              |          |
| color         | 字体颜色      | String    |              |          | 
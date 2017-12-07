# Rate 评分 


### demo
```html
<template>
  <div>
    <w-rate></w-rate>
  </div>
</template>


<script>
import Rate from 'packages/rate'

export default {
  components: {
    'w-rate': Rate
  }
}
</script>

```

###  Backtop 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| count         | 星个数       | Number    |              |  5         |
| color         | 为选中颜色    | String    |              |  #ccc        | 
| activeColor   | 选中颜色      | String    |              |  #FF5D50     | 
| showText      | 文字描述      | Array     |              |          | 
| readonly      | 只读         | Boolean    |              |          | 
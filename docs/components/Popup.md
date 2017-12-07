# Popup 弹出层 


### demo
```html
<template>
  <div>
    <w-button type="primary" size="large" @click.native="show = !show">打开弹出层</w-button>
    <w-popup v-model="show">
      <img src="https://orig00.deviantart.net/742a/f/2011/344/3/c/cold_facial_profile_by_cvet04ek-d4ioa6k.jpg"/>
    </w-popup>
  </div>
</template>


<script>
import Popup from 'packages/popup'
import Button from 'packages/button'

export default {
  name: 'page-popup',
  components: {
    'w-popup': Popup,
    'w-button': Popup
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

```

###  Popup 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| default       |          |     |              |       |
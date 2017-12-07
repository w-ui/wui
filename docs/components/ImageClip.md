# ImageClip 图片裁剪 


### demo
```html
<template>
  <div>
    <w-image-clip ref="imgclip"></w-image-clip>
    <w-button type="primary" size="large" @click.native="getImage">获取裁剪区图片</w-button>
  </div>
</template>


<script>
import ImageClip from 'packages/image-clip'
import Button from 'packages/button'

export default {
  components: {
    'w-image-clip': ImageClip,
    'w-button': Button
  },
  methods: {
    getImage(){
      let base64 = this.$refs.imgclip.getClipImage();
      console.log(base64);
    }
  }

}
</script>

```

###  ImageClip 方法介绍 methods

| 方法名             | 说明        | 参数       | 可选值        | 默认值     |
|-------------------|-------------|-----------|--------------|-----------|
| getClipImage(type)  | 获取裁剪区的图片base64字符串 |  type   |  png, jpeg   |  jpeg  |
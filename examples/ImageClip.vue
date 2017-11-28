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
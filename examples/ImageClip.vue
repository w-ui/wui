<template>
  <div>
    <w-image-clip ref="imgclip"></w-image-clip>
    <w-button type="primary" size="large" @click.native="getImage">上传</w-button>
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
      this.$refs.imgclip.getImageData().then(blob => {
        console.log(blob);
        let formData = new FormData();
        formData.append('img', blob);

        $.ajax('/path/to/upload', {
          method: "POST",
          data: formData,
          processData: false,
          contentType: false,
          success: function () {
            console.log('Upload success');
          },
          error: function () {
            console.log('Upload error');
          }
        })
      })
    }
  }

}
</script>
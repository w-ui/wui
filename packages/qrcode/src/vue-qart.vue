<template>
    <div>
        <div ref="qart"></div>
    </div>
</template>


<script>
import QArt from './qart.js';

export default {
  name: 'w-qrcode',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    url: {
      type: String,
      default: ''
    }, 
    image: {
      type: String,
      default: ''
    }, 
    filter: {
      type: String,
      default: 'threshold'
    }, 
    size: {
      type: Number,
      default: 64
    }
  },
  mounted(){
    this.renderQrcode()
  },
  methods: {
    renderQrcode(){
      this.qart =  new QArt({
        value: this.url,
        imagePath: this.image,
        filter: this.filter,
        size: this.size,
        type: this.type
      });
      this.qart.make(this.$refs.qart)
    },

    convertToImage(){
      const myCanvas = this.$refs.qart.children[0];
      const type = 'image/png';
      let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
      window.location.href = image; // it will save locally
    }
  }
}
</script>


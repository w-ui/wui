<template>
  <div class="wui-clip-modal">
    <div class="overlay"></div>

    <div class="modal">

      <div class="modal-content">
        <div class="container-bg">
          <div class="img-container">
            <img id="clip_src_img" @load="srcImgLoaded" :src="img">
            <div class="shadow-box"></div>
            <Select-Box ref="box" :srcSize="imgSize" :ratio="ratio" :img="img" @selectEnd="selectEnd"
                        @selectChange="selectChange"></Select-Box>
          </div>

          <div class="reset-img" v-if="!img">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
              <g>
                <path d="M57,6H1C0.448,6,0,6.447,0,7v44c0,0.553,0.448,1,1,1h56c0.552,0,1-0.447,1-1V7C58,6.447,57.552,6,57,6z M56,50H2V8h54V50z" fill="#CCCCCC"/>
                <path d="M16,28.138c3.071,0,5.569-2.498,5.569-5.568C21.569,19.498,19.071,17,16,17s-5.569,2.498-5.569,5.569
                  C10.431,25.64,12.929,28.138,16,28.138z M16,19c1.968,0,3.569,1.602,3.569,3.569S17.968,26.138,16,26.138s-3.569-1.601-3.569-3.568
                  S14.032,19,16,19z" fill="#CCCCCC"/>
                <path d="M7,46c0.234,0,0.47-0.082,0.66-0.249l16.313-14.362l10.302,10.301c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414
                  l-4.807-4.807l9.181-10.054l11.261,10.323c0.407,0.373,1.04,0.345,1.413-0.062c0.373-0.407,0.346-1.04-0.062-1.413l-12-11
                  c-0.196-0.179-0.457-0.268-0.72-0.262c-0.265,0.012-0.515,0.129-0.694,0.325l-9.794,10.727l-4.743-4.743
                  c-0.374-0.373-0.972-0.392-1.368-0.044L6.339,44.249c-0.415,0.365-0.455,0.997-0.09,1.412C6.447,45.886,6.723,46,7,46z" fill="#CCCCCC"/>
              </g>
            </svg>

            <i class="icon-reset"></i>
            <span>选择文件</span>
            <input type="file" id="file_input" accept="image/png,image/jpg,image/gif" @change="fileChange">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SelectBox from './SelectBox.vue'

  export default {
    components: {
      SelectBox
    },
    data () {
      return {
        img: null,
        $srcImg: null,
        $resImg: null,
        $input: null,
        $imgContainer: null,
        nw: 0,
        nh: 0,
        clipData: null,
        ratio: 16 / 10, // equal to SelectBox's width / height
        imgSize: {w: 0, h: 0},
        containerTop: 0
      }
    },
    mounted () {
      this.$input = this.$el.querySelectorAll('#file_input')[0]
      this.$srcImg = this.$el.querySelectorAll('#clip_src_img')[0]
      this.$resImg = this.$el.querySelectorAll('#clip_res_img')[0]
      this.$imgContainer = this.$el.querySelectorAll('.img-container')[0]
      this.$containerBox = this.$el.querySelectorAll('.container-bg')[0]
    },
    methods: {
      selectChange () {
        const rec = this.$refs.box.rec
      },
      selectEnd () {
        const rec = this.$refs.box.rec
        if (rec.w > 0 && rec.h > 0) {
          this.clip()
        }
      },
      fileChange () {
        const me = this
        const fd = new FileReader()
        fd.onloadend = function () {
          me.img = fd.result
        };
        if (this.$input.files && this.$input.files[0]) {
          fd.readAsDataURL(this.$input.files[0])
        }
      },
      srcImgLoaded () {
        this.nw = this.$srcImg.naturalWidth
        this.nh = this.$srcImg.naturalHeight
        this.clearSelect()
        this.setImgSize()
        // this.updatePreview()
        this.clip()
      },
      clearSelect () {
        const box = this.$refs.box
        box.clearRec()
        this.clipData = null
      },
      setImgSize () {
        // image's naturalWidth naturalHeight ratio
        const nr = this.nw / this.nh
        const scw = this.$containerBox.offsetWidth
        const sch = this.$containerBox.offsetHeight
        let rw = 0  // select box width
        let rh = 0  // select box height
        if (nr >= this.ratio) {
          this.imgSize.w = scw
          this.imgSize.h = scw / nr
          this.containerTop = (sch - this.imgSize.h) / 2
          rh = this.imgSize.h
          rw = rh * this.ratio
        } else {
          this.imgSize.w = scw - 20
          this.imgSize.h = (scw - 20) / nr
          this.containerTop = 0
          rw = this.imgSize.w
          rh = rw / this.ratio
        }
        this.$srcImg.setAttribute('style', `width:${this.imgSize.w}px;height:${this.imgSize.h}px;`)
        this.$imgContainer.setAttribute('style',
          `width:${this.imgSize.w}px;height:${this.imgSize.h}px;top:${this.containerTop}px;`)
        this.$refs.box.rec = {w: rw, h: rh, l: 0, t: 0}
      },
      getComputedRec (r) {
        const cw = this.$imgContainer.offsetWidth
        const ch = this.$imgContainer.offsetHeight
        const wr = cw / this.nw
        const hr = ch / this.nh
        return {
          l: r.l / wr, t: r.t / hr,
          w: r.w / wr, h: r.h / hr
        }
      },
      clip (imgType) {
        let rec = this.$refs.box.rec
        if (!rec.w || !rec.h) {
          return
        }
        let type = 'image/jpeg';
        if(imgType){
          type = 'image/png'
        }
        const bufferCanvas = document.createElement('canvas')
        const bfx = bufferCanvas.getContext('2d')
        const computedRec = this.getComputedRec(rec)
        bufferCanvas.width = computedRec.w
        bufferCanvas.height = computedRec.h
        bfx.drawImage(this.$srcImg, -computedRec.l, -computedRec.t, this.nw, this.nh)
        this.clipData = bufferCanvas.toDataURL(type, 1)
      },
      getClipImage (imgType) {
        if(this.clipData && (!imgType || imgType == 'jpeg')){
          return this.clipData;
        } else {
          this.clip(imgType)
          return this.clipData
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import './imageclip.less';
</style>

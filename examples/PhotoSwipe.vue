<template>
  <div>
    <div class="paragraph">
      <h3>PhotoSwipe</h3>
      <div>
        <img @click="showPhotoSwipe(0)" src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" alt="">
        <img @click="showPhotoSwipe(1)" src="https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg" alt="">
      </div>
    </div>
    <div class="paragraph">
      <h3>PhotoSwipe Gallery</h3>
      <div>
        <w-photoswipe-gallery :isOpen="isOpenGallery" :options="optionsGallery" :items="items">
          <img slot-scope="props" :src="props.item.src" alt="picture"/>
        </w-photoswipe-gallery>
      </div>
    </div>
    <w-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></w-photoswipe>
  </div>
</template>

<script>
import { PhotoSwipe, PhotoSwipeGallery } from 'packages/photoswipe'
export default {
  components: {
    'w-photoswipe': PhotoSwipe,
    'w-photoswipe-gallery': PhotoSwipeGallery
  },
  data () {
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      items: [
        {
          src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
          w: 1600,
          h: 1600,
          title: 'This is dummy caption.'
        }, {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          w: 1600,
          h: 1066,
          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.'
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="less">
  img {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 12px;
  }
</style>

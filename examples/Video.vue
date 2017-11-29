<template>
  <div>
    <w-video :sources="source" :option="option"></w-video>
  </div>
</template>


<script>
import Video from 'packages/video'

export default {
  components: {
    'w-video': Video
  },
  data() {
    return {
      source: [
        {
          src: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'video/mp4'
        },
        {
          src: 'http://techslides.com/demos/sample-videos/small.webm',
          type: 'video/webm'
        },
        {
          src: 'http://techslides.com/demos/sample-videos/small.ogv',
          type: 'video/ogv'
        }
      ],
      option: {
        autoplay: true,
        volume: 0.9,
        poster: ''
      }
    }
  }
}
</script>
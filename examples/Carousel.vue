<template>
  <div :style="{width: '300px', height: '120px'}">
    <carousel :auto="3000" :responsive="40" :indicators="true">
      <div :style="{backgroundColor: 'red', width: '300px', height: '120px'}" >
        1
      </div><div :style="{backgroundColor: 'yellow', width: '300px', height: '120px'}">
        2
      </div><div :style="{backgroundColor: 'grey', width: '300px', height: '120px'}" >
        3
      </div><div :style="{backgroundColor: 'blue', width: '300px', height: '120px'}">
        4
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'packages/carousel/src/Carousel.js'

export default {
  components: {
    carousel
  }
}
</script>



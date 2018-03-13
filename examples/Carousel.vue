<template>
  <div :style="{width: '300px', height: '120px'}">
    <Carousel :auto="3000" :responsive="40" :indicators="true">
      <div :style="{backgroundColor: 'red', width: '300px', height: '120px'}" >
        1
      </div><div :style="{backgroundColor: 'yellow', width: '300px', height: '120px'}">
        2
      </div><div :style="{backgroundColor: 'grey', width: '300px', height: '120px'}" >
        3
      </div><div :style="{backgroundColor: 'blue', width: '300px', height: '120px'}">
        4
      </div>
    </Carousel>
  </div>
</template>

<script>
import { Carousel } from 'packages/carousel'

export default {
  components: {
    Carousel
  }
}
</script>



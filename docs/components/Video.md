# Video 视频播放器 


### demo

```html

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

```

###  Backtop 插槽介绍 slot

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| sources       | 视频地址     | String    |              |           |
| option        | autoplay 是否自动播放, volume 音量, poster 视频显示图片 | Object    |              |          |
#  Audio 音频播放器

### 概述

播放音频

```html
<template>
  <div>
    <Audio autoplay mutex theme="#42b983" preload="metadata" mode="circulation" :music="{
            title: '下雨了',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://ip.h5.rf03.sycdn.kuwo.cn/745a5a3e726cf3723084ea14d46f0870/5a5d7393/resource/a2/2/92/49421008.aac',
            pic: 'http://qukufile2.qianqian.com/data2/pic/49e6161afb13e3eda9d1cb4e304561a2/267709272/267709272.jpg@s_1,w_300,h_300'
        }"></Audio>
  </div>
</template>

<script>
import { Audio, Toast } from 'w-ui'

export default {
  components: {
    Audio
  },
  methods: {
    play() {
      Toast({ content: 'play' })
    },
    pause() {
      Toast({ content: 'pause' })
    },
    canplay() {
      Toast({ content: 'canplay' })
    },
    playiing() {
      Toast({ content: 'playiing' })
    },
    ended() {
      Toast({ content: 'ended' })
    },
    error() {
      Toast({ content: 'error' })
    }
  }
}
</script>
```

###  Audio 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| narrow        | 是否使用窄窗体模式 | Boolean   |            |    false  |
| autoplay      | 是否自动播放      | Boolean   |            |    true   |
| showlrc       | 显示歌词         | Number  |            |           |
| mutex         | 是否互斥（一个播放器播放时，停止其他播放器 | Boolean  |     |  true |
| theme         | 主题颜色         | String    |            |  #b7daff  |
| mode          | 播放顺序模式      | String  | random，single，circulation | circulation |
| preload       | 预加载           | String  |   none，metadata，auto   | auto |
| listmaxheight | 列表最大高度      | Number  |   Number   |       |
| music         | 音乐选项         | Object  |   {title: '标题', author: '艺术家', url: '音频地址', pic: '图片', lrc: '歌词'}   |       |
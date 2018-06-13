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
import Vue from 'vue'
import { Audio } from 'packages/audio'
import { Toast } from 'packages/dialog'

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



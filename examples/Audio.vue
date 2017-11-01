<template>
  <div>
    <w-audio autoplay mutex theme="#42b983" preload="metadata" mode="circulation" :music="{
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg'
        }"></w-audio>
  </div>
</template>

<script>
import Vue from 'vue'
import Audio from 'packages/audio'
import {Toast} from 'packages/dialog'

export default {
  components: {
    'w-audio': Audio
  },
  methods: {
    play(){
      Toast({content: 'play'})
    },
    pause(){
      Toast({content: 'pause'})
    },
    canplay(){
      Toast({content: 'canplay'})
    },
    playiing(){
      Toast({content: 'playiing'})
    },
    ended(){
      Toast({content: 'ended'})
    },
    error(){
      Toast({content: 'error'})
    }
  }
}
</script>



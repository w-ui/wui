#  Audio 音频播放器

### 概述

播放音频

```html
<template>
    <div>
        <w-audio autoplay mutex theme="#42b983" preload="metadata" mode="circulation" :music="{
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg'
        }" @play="play" @pause="pause" @canplay="canplay" @playing="playiing" @ended="ended" @error="error"></w-audio>
    </div>
</template>

<script>
    export default {
        name: 'wui-audio',
      methods: {
        play(){

        },
        pause(){

        },
        canplay(){

        },
        playiing(){

        },
        ended(){

        },
        error(){

        }
      }
    }
</script>

```

###  Audio 属性介绍 Attributes

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
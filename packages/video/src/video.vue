<template>
    <div class="wui-video">
        <div class="container">
            <div class="wui-video-container" @mouseenter="mouseEnterVideo" @mouseleave="mouseLeaveVideo">
                <video :class="{ 'hide-cursor': !state.contrlShow }" class="wui-video" :poster="options.poster">
                    <source v-for="(source, i) in sources" :key="'source-' + i" :src="source.src" :type="source.type"></source>
                </video>
                <button class="wui-contrl-play-btn2" @click="play" v-show="!state.playing || state.contrlShow">
                    <svg class="wui-contrl-play-btn-icon" v-show="!state.playing" viewBox="0 0 47 57" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>Triangle 1</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon id="Triangle-1" stroke="#FFFFFF" fill="#000000" points="1 56 1 1 47 28.5"></polygon>
                        </g>
                    </svg>
                    <svg class="wui-contrl-play-btn-icon" v-show="state.playing" viewBox="0 0 15 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>Combined Shape</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <path d="M0,0.979149244 L5,0.979149244 L5,22 L0,22 L0,0.979149244 Z M10,0.979149244 L15,0.979149244 L15,22 L10,22 L10,0.979149244 Z" id="path-1"></path>
                            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="15" height="21.0208508" fill="white">
                                <use xlink:href="#path-1"></use>
                            </mask>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <use id="Combined-Shape" stroke="#FFFFFF" mask="url(#mask-2)" stroke-width="2" fill="#000000" xlink:href="#path-1"></use>
                        </g>
                    </svg>
                </button>
                <div class="wui-contrl-content" transition="fade" v-show="state.contrlShow">
                    <div class="wui-contrl-video-slider" @click="slideClick" @mousedown="videoMove">
                        <div class="wui-contrl-video-inner" :style="{ 'transform': `translate3d(${video.pos.current}px, 0, 0)`}"></div>
                        <div class="wui-contrl-video-rail">
                            <div class="wui-contrl-video-rail-inner" :style="{ 'transform': 'translate3d(' +video.loaded + '%, 0, 0)'}"></div>
                        </div>
                    </div>
                    <div class="wui-contrl-video-time">
                        <span class="wui-contrl-video-time-text">{{video.displayTime}}</span>
                    </div>
                    <div class="wui-contrl-vol-box">
                    <button class="wui-contrl-play-btn" @click="volMuted">
                        <svg class="wui-contrl-vol-btn-icon" viewBox="0 0 41 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                                <title>vol</title>
                                <desc>Created with Sketch.</desc>
                                <defs>
                                    <path d="M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z" id="cov-vol"></path>
                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd">
                                    <g id="vol" transform="translate(2.000000, 3.000000)">
                                        <g id="cov-vol-icon">
                                            <g id="Combined-Shape-Clipped">
                                                <path v-show="volume.percent > 1 && !volume.muted" d="M25,29.5538997 C28.4589093,27.6757536 31.2629093,23.2984641 31.2629093,19.7769499 C31.2629093,16.2554357 28.4589093,11.8781461 25,10" id="vol-range-2" stroke="#FFFFFF"></path>
                                                <path v-show="volume.percent > 70 && !volume.muted" d="M28,35.5538997 C33.5816016,32.5231573 38.1063837,25.4595762 38.1063837,19.7769499 C38.1063837,14.0943235 33.5816016,7.03074247 28,4" id="vol-range-2" stroke="#FFFFFF"></path>
                                                <mask id="mask-2" fill="white">
                                                    <use xlink:href="#cov-vol"></use>
                                                </mask>
                                                <use id="vol-path" stroke="#FFFFFF" stroke-width="3" xlink:href="#cov-vol"></use>
                                                <g id="Combined-Shape" mask="url(#mask-2)" stroke="#FFFFFF" stroke-width="2" fill="#FFFFFF">
                                                    <path d="M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z" id="cov-vol"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <div class="wui-contrl-vol-slider" @click="volSlideClick" @mousedown="volMove">
                            <div class="wui-contrl-vol-inner" :style="{ 'transform': `translate3d(${volume.pos.current}px, 0, 0)`}"></div>
                            <div class="wui-contrl-vol-rail"></div>
                        </div>
                    </div>
                    <button class="wui-contrl-play-btn" @click="fullScreen">
                        <svg class="wui-contrl-vol-btn-icon" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M31.1682064,22 L31.1682064,31.0073537 L22,31.0073537 M22,1 L31.0073537,1 L31.0073537,10.1682064 M1,10.0073537 L1,1 L10.1682064,1 M10.0073537,31.1682064 L1,31.1682064 L1,22" id="Combined-Shape" stroke="#FFFFFF" stroke-width="2"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const getMousePosition = function(e, type = 'x') {
  if (type === 'x') {
    return e.pageX
  }
  return e.pageY
}
const pad = val => {
  val = Math.floor(val)
  if (val < 10) {
    return '0' + val
  }
  return val + ''
}
const timeParse = sec => {
  let min = 0
  min = Math.floor(sec / 60)
  sec = sec - min * 60
  return pad(min) + ':' + pad(sec)
}

export default {
  name: 'w-video',
  props: {
    sources: Array,
    options: {
      type: Object,
      default() {
        return {
          autoplay: false,
          volume: 0.9,
          poster: ''
        }
      }
    }
  },
  data() {
    return {
      $video: null,
      video: {
        $videoSlider: null,
        len: 0,
        current: 0,
        loaded: 0,
        moving: false,
        displayTime: '00:00',
        pos: {
          start: 0,
          width: 0,
          innerWidth: 0,
          current: 0
        }
      },
      volume: {
        $volBox: null,
        muted: false,
        percent: 60,
        moving: false,
        pos: {
          start: 0,
          width: 0,
          innerWidth: 0,
          current: 0
        }
      },
      player: {
        $player: null,
        pos: null
      },
      tmp: {
        contrlHideTimer: null
      },
      state: {
        contrlShow: true,
        vol: 0.5,
        currentTime: 0,
        fullScreen: false,
        playing: false
      }
    }
  },
  ready() {
    this.init()
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    document.body.removeEventListener('mousemove', this.mouseMoveAction)
    document.body.removeEventListener('mouseup', this.mouseUpAction)
  },
  methods: {
    init() {
      this.$video = this.$el.getElementsByTagName('video')[0]
      this.initCore()
      if (this.options.autoplay) {
        this.play()
      }
      document.body.addEventListener('mousemove', this.mouseMoveAction, false)
      document.body.addEventListener('mouseup', this.mouseUpAction, false)
    },
    initCore() {
      this.initVol()
      this.initVideo()
      this.initPlayer()
      const vol = this.options.volume || 0.9
      this.setVol(vol)
    },
    initPlayer() {
      const $player = this.$el.getElementsByClassName('wui-video-container')[0]
      this.player.pos = $player.getBoundingClientRect()
      this.player.$player = $player
    },
    initVol() {
      const $volBox = this.$el.getElementsByClassName(
        'wui-contrl-vol-slider'
      )[0]
      const $volInner = $volBox.getElementsByClassName(
        'wui-contrl-vol-inner'
      )[0]
      this.volume.$volBox = $volBox
      this.volume.pos.innerWidth = $volInner.getBoundingClientRect().width
      this.volume.pos.start = $volBox.getBoundingClientRect().left
      this.volume.pos.width =
        $volBox.getBoundingClientRect().width - this.volume.pos.innerWidth
    },
    initVideo() {
      const $videoSlider = this.$el.getElementsByClassName(
        'wui-contrl-video-slider'
      )[0]
      const $videoInner = $videoSlider.getElementsByClassName(
        'wui-contrl-video-inner'
      )[0]
      this.$videoSlider = $videoSlider
      this.video.pos.start = $videoSlider.getBoundingClientRect().left
      this.video.pos.innerWidth = $videoInner.getBoundingClientRect().width
      this.video.pos.width =
        $videoSlider.getBoundingClientRect().width - this.video.pos.innerWidth
      this.getTime()
    },
    mouseEnterVideo() {
      if (this.tmp.contrlHideTimer) {
        clearTimeout(this.tmp.contrlHideTimer)
        this.tmp.contrlHideTimer = null
      }
      this.state.contrlShow = true
    },
    mouseLeaveVideo(e) {
      if (this.tmp.contrlHideTimer) {
        clearTimeout(this.tmp.contrlHideTimer)
      }
      this.tmp.contrlHideTimer = setTimeout(() => {
        this.state.contrlShow = false
        this.tmp.contrlHideTimer = null
      }, 600)
    },
    toggleContrlShow() {
      this.state.contrlShow = !this.state.contrlShow
    },
    getTime() {
      this.$video.addEventListener('durationchange', e => {
        // console.log(e)
      })
      this.$video.addEventListener('progress', e => {
        if (this.$video.buffered.length != 0) {
          this.video.loaded =
            (-1 + this.$video.buffered.end(0) / this.$video.duration) * 100
        }
      })
      this.video.len = this.$video.duration
    },
    setVideoByTime(percent) {
      this.$video.currentTime = Math.floor(percent * this.video.len)
    },
    play() {
      this.state.playing = !this.state.playing
      if (this.$video) {
        if (this.state.playing) {
          this.$video.play()
          this.mouseLeaveVideo()
          this.$video.addEventListener('timeupdate', this.timeline)
          this.$video.addEventListener('ended', e => {
            this.state.playing = false
            this.video.pos.current = 0
            this.$video.currentTime = 0
          })
        } else {
          this.$video.pause()
        }
      }
    },
    timeline() {
      const percent = this.$video.currentTime / this.$video.duration
      this.video.pos.current = (this.video.pos.width * percent).toFixed(3)
      this.video.displayTime = timeParse(
        this.$video.duration - this.$video.currentTime
      )
    },
    volMove(e) {
      this.initVol()
      this.volume.moving = true
    },
    videoMove(e) {
      this.initVideo()
      this.video.moving = true
    },
    slideClick(e) {
      this.videoSlideMove(e)
    },
    volSlideClick(e) {
      this.volSlideMove(e)
    },
    volMuted() {
      this.$video.muted = !this.$video.muted
      this.volume.muted = this.$video.muted
    },
    setVol(val) {
      if (this.$video) {
        this.volume.pos.current = val * this.volume.pos.width
        this.volume.percent = val * 100
        this.$video.volume = val
      }
    },
    fullScreen() {
      if (!this.state.fullScreen) {
        this.state.fullScreen = true
        this.$video.webkitRequestFullScreen()
      } else {
        this.state.fullScreen = false
        document.webkitCancelFullScreen()
      }
      setTimeout(this.initVideo, 200)
    },
    mouseMoveAction(e) {
      if (this.volume.moving) {
        this.volSlideMove(e)
      }
      if (this.video.moving) {
        this.videoSlideMove(e)
      }
      this.contrlHider(e)
    },
    contrlHider(e) {
      const x = getMousePosition(e, 'x')
      const y = getMousePosition(e, 'y')
      if (!this.player.pos) return
      if (
        x > this.player.pos.left &&
        x < this.player.pos.left + this.player.pos.width
      ) {
        if (
          y > this.player.pos.top + this.player.pos.height * 0.6 &&
          y < this.player.pos.top + this.player.pos.height
        ) {
          return this.mouseEnterVideo()
        }
      }
      return this.mouseLeaveVideo()
    },
    volSlideMove(e) {
      const x = getMousePosition(e) - this.volume.pos.start
      if (x > 0 && x < this.volume.pos.width) {
        this.setVol(x / this.volume.pos.width)
      }
    },
    videoSlideMove(e) {
      const x = getMousePosition(e) - this.video.pos.start
      if (x > 0 && x < this.video.pos.width) {
        this.video.pos.current = x
        this.setVideoByTime(x / this.video.pos.width)
      }
    },
    mouseUpAction(e) {
      this.volume.moving = false
      this.video.moving = false
    }
  }
}
</script>

<style>
.wui-video-container {
  position: relative;
  width: 100%;
  background-color: #000;
}

.wui-video {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}

.wui-contrl-content {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.41);
  height: 0.6rem;
  width: 100%;
  z-index: 2147483647;
}
.wui-contrl-play-btn {
  position: relative;
  height: 100%;
  background: none;
  border: none;
  height: 0.4rem;
  width: 0.8rem;
  outline: none;
  vertical-align: top;
}
.wui-contrl-play-btn:hover {
  background-color: rgba(255, 255, 255, 0.27);
}
.wui-contrl-play-btn-icon {
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  top: 50%;
  left: 50%;
  margin-top: -0.2rem;
  margin-left: -0.2rem;
}
.wui-contrl-play-btn2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  width: 1rem;
  height: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 100%;
}
.wui-contrl-play-btn2:hover {
  background-color: rgba(255, 255, 255, 1);
}
.wui-contrl-play-btn2-icon {
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  top: 50%;
  left: 50%;
  margin-top: -0.2rem;
  margin-left: -0.2rem;
}
.wui-contrl-vol-btn-icon {
  position: absolute;
  height: 0.4rem;
  width: 0.4rem;
  top: 50%;
  left: 50%;
  margin-top: -0.2rem;
  margin-left: -0.2rem;
}
.wui-contrl-vol-slider {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 1rem;
  height: 0.3rem;
  overflow: hidden;
  transition: all 0.2s ease-in;
  display: none;
}
.wui-contrl-vol-rail {
  position: absolute;
  top: 50%;
  width: 1rem;
  height: 0.1rem;
  margin-top: -0.05rem;
  background: #fff;
}
.wui-contrl-vol-inner {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 50%;
  background: #fff;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-top: -0.25rem;
  z-index: 2;
  cursor: pointer;
}
.wui-contrl-vol-box {
  display: flex;
  display: none;
}
.wui-contrl-video-slider {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0 0.1rem;
  transition: all 0.2s ease-in;
}
.wui-contrl-video-rail {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 0.1rem;
  margin-top: -0.05rem;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
}
.wui-contrl-video-rail-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.1rem;
  background: rgb(255, 255, 255);
  transition: transform 0.2s;
}
.wui-contrl-video-inner {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 50%;
  background: #fff;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  margin-top: -0.15rem;
  z-index: 2;
  cursor: pointer;
  transition: all 16ms;
}
.wui-contrl-video-time {
  padding: 0 0.1rem;
}
.wui-contrl-video-time-text {
  color: #fff;
  font-size: 0.3rem;
}
::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls-enclosure {
  display: none !important;
}
.fade-transition {
  transition: opacity 0.3s ease;
}
.fade-enter {
  opacity: 1;
}
.fade-leave {
  opacity: 0;
}
.hide-cursor {
  cursor: none;
}
</style>

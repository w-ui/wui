<template>
  <div class="wm-loading">
    <div class="spinner">
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="length" fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-loading'
}
</script>

<style lang="less">
.wm-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  /*width: 100%;*/
  /*height: 100%;*/
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  -webkit-display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  -webkit-align-items: center;
}

.spinner {
  width: 66px;
  height: 66px;
  -webkit-animation: contanim 2s linear infinite;
          animation: contanim 2s linear infinite;
}
svg {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
svg:nth-child(1) circle {
  stroke: #84EBBD;
  stroke-dasharray: 1, 300;
  stroke-dashoffset: 0;
  -webkit-animation: strokeanim 3s calc(.2s * (1)) ease infinite;
          animation: strokeanim 3s calc(.2s * (1)) ease infinite;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}
svg:nth-child(2) circle {
  stroke: #4977EC;
  stroke-dasharray: 1, 300;
  stroke-dashoffset: 0;
  -webkit-animation: strokeanim 3s calc(.2s * (2)) ease infinite;
          animation: strokeanim 3s calc(.2s * (2)) ease infinite;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}
svg:nth-child(3) circle {
  stroke: #F6BB67;
  stroke-dasharray: 1, 300;
  stroke-dashoffset: 0;
  -webkit-animation: strokeanim 3s calc(.2s * (3)) ease infinite;
          animation: strokeanim 3s calc(.2s * (3)) ease infinite;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}
svg:nth-child(4) circle {
  stroke: #333841;
  stroke-dasharray: 1, 300;
  stroke-dashoffset: 0;
  -webkit-animation: strokeanim 3s calc(.2s * (4)) ease infinite;
          animation: strokeanim 3s calc(.2s * (4)) ease infinite;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

@-webkit-keyframes strokeanim {
  0% {
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -58.548324585;
  }
  100% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -175.6449737549;
  }
}

@keyframes strokeanim {
  0% {
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -58.548324585;
  }
  100% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -175.6449737549;
  }
}
@-webkit-keyframes contanim {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes contanim {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>

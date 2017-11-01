<template>
  <div class="wm-loading">
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'wm-loading'
  }
</script>

<style>
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
  -webkit-align-items: center;
}
.wm-loading span {
    background: url('./loading.svg') no-repeat center center;
    background-size: 100%;
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
  }
</style>

<template>
  <div class="app">
    <section class="app-body">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.component('App', {
  name: 'app'
})
</script>

<style lang="less-loader">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul,li{list-style: none}
  a{text-decoration: none}

  .icon{
    display: inline-block;
    vertical-align: middle;
    width: 96px;
    height: 96px;
    background-size: 100% 100%;
  }
  .icon-start{
    background-image: url(./static/images/start.png);
  }
  .icon-component{
    width: 128px;
    height: 85px;
    background-image: url(./static/images/component.png);
  }
  .icon-resource{
    background-image: url(./static/images/resource.png);
  }

  .top-header{
    background-color: #fff;
    position: relative;
    width: 100vw;
    border-bottom: 2px solid dodgerblue;

    a{
      color: #333;
    }

    .logo{
      color: #fff;
      font-size: 30px;
      padding: 10px;
      img{
        width: 64px;
        vertical-align: middle;
        margin-top: -8px;
        margin-right: 10px;
      }
    }

    .top-menu{
      position: absolute;
      left: 25vw;
      top: 25px;
      z-index: 10;
      display: flex;
      color: #ccc;
      text-align: center;
      font-size: 18px;
      li{
        width: 6vw;
      }
      li:hover{
        color: #fff;
        cursor: pointer;
      }
    }
  }

</style>
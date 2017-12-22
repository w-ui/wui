<template>

  <div class="index-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      <a href="https://github.com/w-ui/wui"><img src="https://img.shields.io/github/stars/w-ui/wui.svg?style=social&amp;label=Star"></a>
    </div>

    <div class="middle-page">
      <div class="banner">
        <img src="../static/images/oval.svg"/>
        <div class="slogan">
          高性能的移动端UI组件库
          <p>
            <a href="">demo</a>
            <a href="">可视化工具</a>
          </p>
        </div>
      </div>

      <ul class="side-menu">
        <li><a href="#/guide"><i class="icon icon-start"></i><p>5分钟入门</p></a></li>
        <li><a href="#/doc"><i class="icon icon-component"></i><p>组件</p></a></li>
        <li><a href="#/visual"><i class="icon icon-resource"></i><p>可视化</p></a></li>
      </ul>

    </div>

    <footer>
      ©️All rights reserved, 2017
    </footer>

  </div>
</template>

<script> 
export default {
  name: 'index'
}
</script>

<style lang="less-loader">

  .index-page {
    position: relative;

    .middle-page{
      position: relative;
      width: 100vw;
      height: 600px;
      background-color: #0c1f51;
      font-size: 18px;
      overflow: hidden;

      .side-menu{
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(255,255,255, 0.05);
        text-align: center;
        width: 20vw;
        height: 100%;
        font-size: 20px;

        li{
          height: 33.333%;
          color: #ffffff;
          padding-top: 25px;
          i{
            margin-bottom: 20px;
          }
        }
        li:first-child{
          // background-color: #2255ce;
          border-bottom: 1px #0c1f31 solid;
        }
        li:last-child{
          // background-color: #153684;
          border-top: 1px #0c1f31 solid;
        }
        a{
          color: #fff;
        }
      }

      .banner{
        position: relative;
        img{
          position: relative;
          width: 1000px;
          top: -50px;
        }
        .slogan{
          position: absolute;
          left: 9%;
          top: 35%;
          color: #fff;
          font-size: 44px;
          p{
            padding: 30px 0;
            display: flex;
            a{
              border: 1px #ccc solid;
              border-radius: 50px;
              padding: 10px 50px;
              color: #fff;
              text-decoration: none;
              font-size: 16px;
              margin: 10px;
            }
            a:hover{
              background-color: #fff;
              color: #1b45a7;
            }
          }
        }
      }
      
    }
  }
  
</style>
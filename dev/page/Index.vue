<template>

  <div class="index-page">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="../static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/doc">组件</router-link></li>
        <li><router-link to="/project">案例</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      <a class="github" href="https://github.com/w-ui/wui"><img src="https://img.shields.io/github/stars/w-ui/wui.svg?style=social&amp;label=Star"></a>
    </div>

    <div class="middle-page">
    </div>

    <div class="navigate">
      <div class="navigate-item">
        <img src="../static/images/rocket.svg"/>
        <p class="title">快速入门</p>
        <p class="slogan">5分钟就够</p>
      </div>
      <div class="navigate-item">
        <img src="../static/images/file.svg"/>
        <p class="title">文档</p>
        <p class="slogan">有好文档不心慌</p>
      </div>
      <div class="navigate-item">
        <img src="../static/images/demo.svg"/>
        <p class="title">案例</p>
        <p class="slogan">案例更精彩</p>
      </div>
      <div class="navigate-item">
        <img src="../static/images/mouse.svg"/>
        <p class="title">可视化</p>
        <p class="slogan">能用鼠标搞定的就不要再敲了</p>
      </div>
    </div>

    <div class="feature-head">
      特性
    </div>

    <div class="features">
      <div class="feature-item">
        <img src="../static/images/component.svg"/>
        <p class="title">覆盖范围广</p>
        <p class="slogan">60+组件</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/chart.svg"/>
        <p class="title">测试覆盖率高</p>
        <p class="slogan">90%测试覆盖率</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/easy.svg"/>
        <p class="title">可视化辅助开发</p>
        <p class="slogan">所见即所得可视编辑</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/edit.svg"/> 
        <p class="title">支持自定义样式</p>
        <p class="slogan">组件样式任意定制</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/optimise.svg"/>
        <p class="title">体积极致优化</p>
        <p class="slogan">严格按需加载</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/performance.svg"/>
        <p class="title">高性能</p>
        <p class="slogan">百万级数据检验</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/quality.svg"/>
        <p class="title">实践检验</p>
        <p class="slogan">千万级业务支撑</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/document.svg"/>
        <p class="title">丰富文档和社区</p>
        <p class="slogan">同时提供离线文档</p>
      </div>
      <div class="feature-item">
        <img src="../static/images/team.svg"/>
        <p class="title">专业团队维护</p>
        <p class="slogan">反馈快速响应</p>
      </div>
    </div>

    <footer>
      ©️All rights reserved, 百度外卖, 2018
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
      background-color: #eef;
      font-size: 18px;
      overflow: hidden;

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

    .navigate{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .navigate-item{
        flex: 0 0 25%;
        padding: 40px;
        font-size: 40px;
        text-align: center;
        border-right: 1px #f0f0f0 solid;
        cursor: pointer;
        img{
          width: 50%;
        }
        .title{
          color: dodgerblue;
          font-size: 0.24rem;
        }
        .slogan{
          color: #bbb;
          font-size: 0.18rem;
        }
      }
      .navigate-item:hover{
        background-color: #f5f5f5;
      }
    }


    .feature-head{
      font-size: 0.2rem;
      color: #999;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .features{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .feature-item{
        flex: 0 0 33.33%;
        padding: 100px 40px;
        font-size: 40px;
        text-align: center;
        border-right: 1px #f0f0f0 solid;
        border-bottom: 1px #f0f0f0 solid;
        img{
          width: 50%;
        }
        .title{
          color: dodgerblue;
          font-size: 0.24rem;
        }
        .slogan{
          color: #bbb;
          font-size: 0.18rem;
        }
      }

      .feature-item:hover{
        background-color: #f5f5f5;
      }
    }
  }
  
</style>
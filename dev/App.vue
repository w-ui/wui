<template>
  <div class="app">
    <section class="app-body">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  mounted() {
    let w = Math.max(window.innerWidth, 800)
    document.documentElement.style.fontSize = w * 100 / 750 + 'px'
  }
}
</script>

<style lang="less-loader">
html {
  touch-action: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  width: 96px;
  height: 96px;
  background-size: 100% 100%;
}
.icon-start {
  background-image: url(./static/images/start.png);
}
.icon-component {
  width: 128px;
  height: 85px;
  background-image: url(./static/images/component.png);
}
.icon-resource {
  background-image: url(./static/images/resource.png);
}

.top-header {
  background-color: #fff;
  position: relative;
  width: 100%;
  border-bottom: 2px solid dodgerblue;
  display: flex;
  align-items: center;

  a {
    color: #333;
  }

  .logo {
    color: #fff;
    font-size: 30px;
    padding: 10px;
    flex: 0 1 300px;

    img {
      width: 64px;
      vertical-align: middle;
      margin-top: -8px;
      margin-right: 10px;
    }
  }

  .top-menu {
    display: flex;
    color: #ccc;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    li {
      padding: 10px 15px;
    }
    li:hover {
      a {
        color: dodgerblue;
      }
      cursor: pointer;
    }
  }
  .github {
    padding-left: 1rem;
    display: flex;
  }
}

#error {
  position: absolute;
  width: 100%;
  max-height: 80%;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  display: none;
  background-color: #fff;
  box-shadow: 0 0 20px #2f2e2e;
  opacity: 0.9;

  p {
    padding: 10px;
    font-size: 12px;
  }
}

footer {
  padding: 30px;
  background-color: #f0f0f0;
  border-top: 2px solid dodgerblue;
  font-size: 18px;
  text-align: center;
}
</style>
#  Waterfall  瀑布流

### 概述

Waterfall

```html
<template>
  <w-waterfall :items="items" :columns='2' enter-class="item-enter">
    <div class="image-item" v-for="item in items">
        <img :src="item.url"/>
        <div class="item-title" v-html="item.title">
        </div>
    </div>
  </w-waterfall>
</template>

<script>
  import Waterfall from 'packages/waterfall'
  export default {
    components: {
      'w-waterfall': Waterfall
    },
    data() {
      return {
        items: [
          {
            'url': 'https://pre00.deviantart.net/eff7/th/pre/i/2017/301/5/0/_last_unicorn__lilac_forest__by_larienne-dbrzego.png',
            'title': 'Lilac Forest'
          },
          {
            'url': 'https://orig00.deviantart.net/e1e0/f/2007/274/d/a/naruto___think_before_you_say_by_dannex009.png',
            'title': 'Lilac Forest'
          },
          {
            'url': 'https://pre00.deviantart.net/05cb/th/pre/f/2016/239/5/c/tifa_tribute_by_wen_jr-dafgeg3.jpg',
            'title': 'Black Canary'
          }
        ]
      }
    }
  }
</script>

<style>
  .item-enter {
    transition: all .5s cubic-bezier(.55,0,.1,1);
    -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
  }
</style>

```

###  Waterfall 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| items         | 数据             | Array     |     v/h       |  v    |
| columns       | 列数             | Number    |            |          |
| enter-class   | 自定义展示动画     | String    |            |          |
| slot          |                  | String    |            |          |

#  PhotoSwipe 图片查看器


### Demo

```html
<template>
  <div>
    <div class="paragraph">
      <h3>PhotoSwipe</h3>
      <div>
        <img @click="showPhotoSwipe(0)" src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" alt="">
        <img @click="showPhotoSwipe(1)" src="https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg" alt="">
      </div>
    </div>
    <div class="paragraph">
      <h3>PhotoSwipe Gallery</h3>
      <div>
        <w-photoswipe-gallery :isOpen="isOpenGallery" :options="optionsGallery" :items="items">
          <img slot-scope="props" :src="props.item.src" alt="picture"/>
        </w-photoswipe-gallery>
      </div>
    </div>
    <w-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></w-photoswipe>
  </div>
</template>

<script>
import { PhotoSwipe, PhotoSwipeGallery } from 'packages/photoswipe'
export default {
  components: {
    'w-photoswipe': PhotoSwipe,
    'w-photoswipe-gallery': PhotoSwipeGallery
  },
  data () {
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      items: [
        {
          src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
          w: 1600,
          h: 1600,
          title: 'This is dummy caption.'
        }, {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          w: 1600,
          h: 1066,
          title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.'
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="less">
  img {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 12px;
  }
</style>

```

###  PhotoSwipe 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| isOpen        |  是否打开查看器   |  Boolean  | true,false |   false   |
| items         |  图片资源        |  Array    | [文档](http://photoswipe.com/documentation/getting-started.html)           |   []      |
| options       |  配置项          |  Object   | [文档](http://photoswipe.com/documentation/options.html) |   {}   |


###  PhotoSwipe 事件介绍 Event

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| beforeChange  |                 | Function  |            |           |
| afterChange   |                 | Function  |            |           |
| imageLoadComplete  |                 | Function  |            |           |
| resize        |                 | Function  |            |           |
| gettingData   |                 | Function  |            |           |
| mouseUsed     |                 | Function  |            |           |
| initialZoomIn |                 | Function  |            |           |
| initialZoomInEnd  |                 | Function  |            |           |
| initialZoomOut|                 | Function  |            |           |
| initialZoomOutEnd  |                 | Function  |            |           |
| parseVerticalMargin  |                 | Function  |            |           |
| close         |                 | Function  |            |           |
| unbindEvents  |                 | Function  |            |           |
| destroy       |                 | Function  |            |           |
| updateScrollOffset  |                 | Function  |            |           |
| preventDragEvent  |                 | Function  |            |           |
| shareLinkClick|                 | Function  |            |           |
详细文档参见[API](http://photoswipe.com/documentation/api.html)

###  PhotoSwipeGallery 属性介绍 props

同 PhotoSwipe


###  PhotoSwipeGallery 事件介绍 Event

同 PhotoSwipe


### PhotoSwipeGallery 插槽介绍 slot

默认插槽，缩略图渲染模板，可选
| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| item          | 图片数据         | Object    |            |           |

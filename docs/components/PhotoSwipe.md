#  PhotoSwipe 图片查看器


### Demo

```html


```

###  PhotoSwipe 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| isOpen        |  是否打开查看器   |  Boolean  | true,false |   false   |
| items         |  图片资源        |  Array    | [文档](http://photoswipe.com/documentation/getting-started.html)           |   []      |
| options       |  配置项          |  Object   | [文档](http://photoswipe.com/documentation/options.html) |   {}   |


###  PhotoSwipe 事件介绍 Event

| 事件           | 说明            | 类型       | 可选值      |   默认值   |
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
详细文档参见[API](http://photoswipe.com/documentation/api.html)，所有事件回调函数接收参数在PhotoSwipe原有参数前插入组件实例对象

###  PhotoSwipeGallery 属性介绍 props

同 PhotoSwipe


###  PhotoSwipeGallery 事件介绍 Event

同 PhotoSwipe


### PhotoSwipeGallery 插槽介绍 slot

默认插槽，缩略图渲染模板，可选
| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| item          | 图片数据         | Object    |            |           |

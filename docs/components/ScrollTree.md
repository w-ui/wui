# ScrollTree 滑动树 

### 概述

+ ScrollTree 和 ScrollCard 很相似，唯一的区别是ScrollTree支持层级
+ ScrollCard 更为灵活，支持自定义内部结构和样式

### Demo
```html
<template>
  <div class="tree-wrapper">
    <w-scroll-tree :data="category" :centerActivedItem="false"></w-scroll-tree>
  </div>
</template>


<script>
import ScrollTree from 'packages/scroll-tree'
import Icon from 'packages/icon'

export default {
  components: {
    'w-scroll-tree': ScrollTree,
    'w-icon': Icon
  },
  data(){
    return {
      category: [
          {
            name: '特价专区',
            id: 1003001,
            icon: 'medall',
            children: [
              {
                name: '满69减30',
                id: 1003001,
                icon: 'camera',
                children: []
              },
              {
                name: '优惠',
                id: 1003001,
                icon: 'announcement',
                children: []
              },
              {
                name: '热销',
                id: 1003001,
                icon: 'magnet',
                children: []
              }
            ]
          },
          {
            name: '新鲜水果',
            id: 1003001,
            icon: 'apple',
            children: []
          },
          {
            name: '冰淇淋',
            id: 1003001,
            icon: 'id-badge',
            children: []
          },
          {
            name: '特价专区',
            id: 1003001,
            icon: 'shield',
            children: [
              {
                name: '饮料/水',
                id: 1003001,
                icon: 'package',
                children: []
              },
              {
                name: '酒类饮品',
                id: 1003001,
                icon: 'world',
                children: []
              },
              {
                name: '牛奶乳类',
                id: 1003001,
                icon: 'brush-alt',
                children: []
              }
            ]
          },
          {
            name: '休闲零食',
            id: 1003001,
            icon: 'palette',
            children: [
              {
                name: '卤味鲜食',
                id: 1003001,
                icon: 'envira',
                children: []
              },
              {
                name: '糖巧饼干',
                id: 1003001,
                icon: 'modx',
                children: []
              },
              {
                name: '方便速食',
                id: 1003001,
                icon: 'mouse',
                children: []
              }
            ]
          },
          {
            name: '营养冲调',
            id: 1003001,
            icon: 'shine',
            children: []
          },
          {
            name: '计生用品',
            id: 1003001,
            icon: 'ticket',
            children: []
          },
          {
            name: '个人护理',
            id: 1003001,
            icon: 'brush',
            children: []
          },
          {
            name: '日用百货',
            id: 1003001,
            icon: 'notepad',
            children: []
          },
          {
            name: '进口食品',
            id: 1003001,
            icon: 'hummer',
            children: [
              {
                name: '百草味',
                id: 1003001,
                icon: 'video-clapper',
                children: []
              }
            ]
          },
          {
            name: '网红新品',
            id: 1003001,
            icon: 'pin2',
            children: []
          },
          {
            name: '休闲食品',
            id: 1003001,
            icon: 'gallery',
            children: []
          }
      ]
    }
  },
  methods: {
    cardClick(item, e){

    }
  }
}
</script>

<style lang="less">
  .tree-wrapper{
    width: 160px;
    height: 300px;
    overflow: hidden;
  }
</style>

```



###  ScrollCard 属性介绍 Attribute

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| direction     | 滚动方向     |  String   |  h 水平，v 垂直 | h        |
| centerActivedItem     | 选中项是否居中对齐     |  Boolean   |   | true   |


###  ScrollCard 事件介绍 event

| 事件名称        | 参数           |    说明         | 类型         | 
|---------------|----------------|----------------|--------------|
| change        |  currentIndex  |  当前激活项索引   | Number       |
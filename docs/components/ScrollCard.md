# ScrollCard 滑动卡片 


+ 实例中循环元素的class为card-item，可以添加一个.card-item.active定义激活项的样式

### demo
```html
<template>
  <div>
    <w-scroll-card>
      <a class="card-item" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
        <template v-if="item.icon">
          <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
        </template>
        <p v-text="item.name"></p>
      </a>
    </w-scroll-card>

    <div style="height:40px"></div>

    <w-scroll-card>
      <a class="card-item2" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
        <div>
          <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
        </div>
        <div v-text="item.name">
        </div>
      </a>
    </w-scroll-card>

    <div style="height:40px"></div>

    <div class="v-container">
      <w-scroll-card direction="v">
        <a class="card-item3" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
          <div>
            <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
          </div>
          <div v-text="item.name">
          </div>
        </a>
      </w-scroll-card>
    </div>
  </div>
</template>


<script>
import ScrollCard from 'packages/scroll-card'
import Icon from 'packages/icon'

export default {
  components: {
    'w-scroll-card': ScrollCard,
    'w-icon': Icon
  },
  data(){
    return {
      category: [
        {
          name: '特价专区',
          id: 1003001,
          icon: 'chart',
        },
        {
          name: '满69减30',
          id: 1003001,
          icon: 'price-tag'
        },
        {
          name: '优惠',
          id: 1003001,
          icon: 'ticket'
        },
        {
          name: '热销',
          id: 1003001,
          icon: 'cart'
        },
        {
          name: '新鲜水果',
          id: 1003001,
          icon: 'appleinc'
        },
        {
          name: '冰淇淋',
          id: 1003001,
          icon: 'cutlery'
        },
        {
          name: '特价专区',
          id: 1003001,
          icon: 'bell2'
        },
        {
          name: '饮料/水',
          id: 1003001,
          icon: 'coffee'
        },
        {
          name: '酒类饮品',
          id: 1003001,
          icon: 'beer'
        },
        {
          name: '牛奶乳类',
          id: 1003001,
          icon: 'spotify'
        },
        {
          name: '休闲零食',
          id: 1003001,
          icon: 'bullseye'
        },
        {
          name: '卤味鲜食',
          id: 1003001,
          icon: 'envira'
        },
        {
          name: '糖巧饼干',
          id: 1003001,
          icon: 'modx'
        },
        {
          name: '方便速食',
          id: 1003001,
          icon: 'wpbeginner'
        },
        {
          name: '营养冲调',
          id: 1003001,
          icon: 'heart'
        },
        {
          name: '计生用品',
          id: 1003001,
          icon: 'man-woman'
        },
        {
          name: '个人护理',
          id: 1003001,
          icon: 'bandcamp'
        },
        {
          name: '日用百货',
          id: 1003001,
          icon: ''
        },
        {
          name: '进口食品',
          id: 1003001,
          icon: ''
        },
        {
          name: '百草味',
          id: 1003001,
          icon: ''
        },
        {
          name: '网红新品',
          id: 1003001,
          icon: ''
        },
        {
          name: '休闲食品',
          id: 1003001,
          icon: ''
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
  .card-item{
    padding: 0.1rem 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: #f0f0f0;
    border-bottom: 2px #fff solid;
  }
  .card-item.active{
    border-bottom: 2px coral solid;
  }

  .card-item2{
    text-align: center;
    border: 1px #f0f0f0 solid;
    padding: 10px;
    border-radius: 4px;
    margin-right: 10px;
  }
  .card-item2.active{
    border: 1px coral solid;
  }

  .v-container{
    width: 50%;
    height: 300px;

    .card-item3{
      display: flex;
      border: 1px #f0f0f0 solid;
      align-items: center;
      padding: 10px;
    }
    .card-item3.active{
      border-left: 2px coral solid;
    }
  }
  
</style>
```



###  ScrollCard 属性介绍 Attribute

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| direction     | 滚动方向     |  String   |  h 水平，v 垂直 | h        |


###  ScrollCard 事件介绍 event

| 事件名称        | 参数           |    说明         | 类型         | 
|---------------|----------------|----------------|--------------|
| change        |  currentIndex  |  当前激活项索引   | Number       |
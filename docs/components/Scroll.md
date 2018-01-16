## Scroll 滚动组件


### Demo
```html
<template>
  <div>
    <div class="paragraph">
      <div class="demo-scroll">
          <w-scroll :scrollBounce="false">
              <a v-for="(item, index) in category" :key="'ws-h-' + index" class="scroll-item">
                  <div>
                  </div>
                  <div>{{item.name}}</div>
              </a>
          </w-scroll>
      </div>

      <div class="demo-scroll2">
          <w-scroll direction="v" :scrollBounce="true">
              <a v-for="(item, index) in category" :key="'ws-v-' + index" class="scroll-item">
                  <div>
                  </div>
                  <div>{{item.name}}</div>
              </a>
          </w-scroll>
      </div>
    </div>
  </div>
</template>

<script>
    import Scroll from 'packages/scroll'
    import Icon from 'packages/icon'

    export default {
        data() {
        return {
            category: [
            {
              name: '特价专区',
              id: 1003001,
              icon: ''
            },
            {
              name: '满69减30',
              id: 1003001,
              icon: ''
            },
            {
              name: '优惠',
              id: 1003001,
              icon: ''
            },
            {
              name: '热销',
              id: 1003001,
              icon: ''
            },
            {
              name: '新鲜水果',
              id: 1003001,
              icon: ''
            },
            {
              name: '冰淇淋',
              id: 1003001,
              icon: ''
            },
            {
              name: '特价专区',
              id: 1003001,
              icon: ''
            },
            {
              name: '饮料/水',
              id: 1003001,
              icon: ''
            },
            {
              name: '酒类饮品',
              id: 1003001,
              icon: ''
            },
            {
              name: '牛奶乳类',
              id: 1003001,
              icon: ''
            },
            {
              name: '休闲零食',
              id: 1003001,
              icon: ''
            },
            {
              name: '卤味鲜食',
              id: 1003001,
              icon: ''
            },
            {
              name: '糖巧饼干',
              id: 1003001,
              icon: ''
            },
            {
              name: '方便速食',
              id: 1003001,
              icon: ''
            },
            {
              name: '营养冲调',
              id: 1003001,
              icon: ''
            },
            {
              name: '计生用品',
              id: 1003001,
              icon: ''
            },
            {
              name: '个人护理',
              id: 1003001,
              icon: ''
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
        };
    },
    components: {
        'w-scroll': Scroll,
        'w-icon': Icon
    },
    methods: {
    }
}

</script>

<style lang="less">
  .demo-scroll{
    height: 100px;
    
    .scroll-item {
      display: inline-block;
      height: 100px;
      padding: 10px;
      text-align: center;
      color: #567;
      background-color: #f0f0f0;
      margin-right: 10px;
      div{
        height: 50%;
      }
      i{
        font-size: 40px;
      }
    }
  }

  .demo-scroll2{
    margin-top: 20px;
    width: 100%;
    height: 300px;
    
    .scroll-item {
      display: inline-block;
      width: 100%;
      height: 100px;
      padding: 10px;
      text-align: center;
      color: #567;
      background-color: #f0f0f0;
      border-bottom: 1px #ccc solid;
      div{
        height: 50%;
      }
      i{
        font-size: 40px;
      }
    }
  }
</style>
```


### Scroll 属性介绍 Props:

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| direction     | 滚动方向     | String     |   v 垂直，h 水平  |   h    |
| scrollBounce  | 滚动回弹效果  | Boolean    |             |  true      |

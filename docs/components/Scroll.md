## scroll 滚动组件


### 基本用法
```html
<template>
    <div class="example-wrap">
        <w-scroll>
            <a v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
                <template v-if="item.icon">
                <w-icon :name="item.icon"></w-icon>
                </template>
                <span v-text="item.name"></span>
            </a>
        </w-scroll>
    </div>
</template>

<script>
    import Scroll from 'packages/scroll'
    import Icon from 'packages/icon'

    export default {
        components: {
            'w-scroll': Scroll,
            'w-icon': Icon
        },
        data(){
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
        }
      },
      methods: {
        cardClick(item, e){

        }
      }
    }
```

### 使用示例

### 属性介绍 Attributes:
name            |           type |  default   |                        description
--------------- | :-------------: | :--------: | :--------------------------------------------------------:
scrollDirection |         string | horizontal |                 滚动方向(horizontal/vertical)
refreshStatus   |Boolean, Number |            |                 判断是否需要重新更新组件
scrollToEle     | HTMLDivElement | undefined  |             滚动列表特定元素的domevent(activeEvent： '')
activeTargetPos |         String |   center   | 所传入的滚动DOM的位置(水平滚动center/left/right, 垂直滚动center/top/bottom)
moveCallback    |       Function |   i => 0   |                         滚动过程中的回调函数
moveEndback     |       Function |   i => 0   |                         滚动过程中的回调函数
afterRelease    |       Function |   i => 0   |                    列表尾部滚动完成释放touch的回调函数
beforeRelease   |       Function |   i => 0   |                    列表头部滚动完成释放touch的回调函数
beyondFn        |       Function |   i => 0   |                         滚动时超出更多时回调
cancelBeyondFn  |       Function |   i => 0   |                        滚动时取消超出更多时回调
moreShadow      |        Boolean |   false    |                  滚动至尾部是否展示阴影效果（仅对水平滑动有效）

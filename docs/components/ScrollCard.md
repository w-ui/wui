# ScrollCard 滑动卡片 


### demo
```html
<tempate>
  <div>
    <w-scroll-card>
      <a v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
         <template v-if="item.icon">
          <w-icon :name="item.icon"></w-icon>
        </template>
        <span v-bind="item.name"></span>
      </a>
    </w-scroll-card>

    <w-scroll-card>
      <a v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
        <div>
          <w-icon :name="item.icon"></w-icon>
        </div>
        <div v-bind="item.name">
        </div>
      </a>
    </w-scroll-card>
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
      }
    }
    </script>
```



###  ScrollCard 属性介绍 Attribute

| 参数           | 说明        | 类型       | 可选值        | 默认值     |
|---------------|-------------|-----------|--------------|-----------|
| 无            |             |           |              |           |
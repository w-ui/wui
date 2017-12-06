
<template>
    <div class="demo-scroll">
        <w-scroll :scrollToEle="scrollToEle" :moreShadow="moreShadow" :afterRelease="afterRelease" :beforeRelease="beforeRelease">
            <a v-for="item in category" :key="item.id" @click="cardClick(item, $event)" class="scroll-item">
                <div>
                </div>
                <div>{{item.name}}</div>
            </a>
        </w-scroll>
    </div>
</template>

<script>
    import Scroll from 'packages/scroll'
    import Icon from 'packages/icon'

    export default {
        data() {
        return {
            scrollToEle: undefined,
            moreShadow: true, //滚动至尾部是否展示阴影效果（仅对水平滑动有效）
            scrollDirection: 'horizontal', // (horizontal/vertical, 默认horizontal)
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
        scrollToActivedElement() {
            // 确保激活的分类在可视区域
            Vue.nextTick(() => {
                this.scrollToEle = this.$el.querySelector('.active');
            });
        },
        afterRelease() {
            console.log('afterRelease');
            // TODO: afterRelease
        },
        beforeRelease() {
            console.log('beforeRelease');
            // TODO: beforeRelease
        },
        cardClick(item, e){

        }
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
</style>
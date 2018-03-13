<template>
  <div>
    <div class="paragraph">
      <div class="scroll-tab-wrapper">
        <w-scroll-tab>
          <w-scroll-tab-panel v-for="(item,index) in category" :key="'s-t-p-' + index" :name="item.name" :icon="item.icon">
            <div class="product-item" v-for="pro of products" :key=" 'body-item-' + pro">
              <div class="img"></div>
              <div class="info">
                <div class="title">{{pro}}</div>
                <div class="tag"></div>
                <div class="price"></div>
              </div>
            </div>
          </w-scroll-tab-panel>
        </w-scroll-tab>
      </div>
    </div>
  </div>
</template>


<script>
import { ScrollTab } from 'packages/scroll-tab'
import { ScrollTabPanel } from 'packages/scroll-tab-panel'
import { Icon } from 'packages/icon'

export default {
  components: {
    'w-scroll-tab': ScrollTab,
    'w-scroll-tab-panel': ScrollTabPanel,
    'w-icon': Icon
  },
  data() {
    return {
      category: [
        {
          name: '特价专区',
          id: 1003001,
          icon: 'medall'
        },
        {
          name: '满69减30',
          id: 1003001,
          icon: 'camera'
        },
        {
          name: '优惠',
          id: 1003001,
          icon: 'announcement'
        },
        {
          name: '热销',
          id: 1003001,
          icon: 'magnet'
        },
        {
          name: '新鲜水果',
          id: 1003001,
          icon: 'apple'
        },
        {
          name: '冰淇淋',
          id: 1003001,
          icon: 'id-badge'
        },
        {
          name: '特价专区',
          id: 1003001,
          icon: 'shield'
        },
        {
          name: '饮料/水',
          id: 1003001,
          icon: 'package'
        },
        {
          name: '酒类饮品',
          id: 1003001,
          icon: 'world'
        },
        {
          name: '牛奶乳类',
          id: 1003001,
          icon: 'brush-alt'
        },
        {
          name: '休闲零食',
          id: 1003001,
          icon: 'palette'
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
          icon: 'mouse'
        },
        {
          name: '营养冲调',
          id: 1003001,
          icon: 'shine'
        },
        {
          name: '计生用品',
          id: 1003001,
          icon: 'ticket'
        },
        {
          name: '个人护理',
          id: 1003001,
          icon: 'brush'
        },
        {
          name: '日用百货',
          id: 1003001,
          icon: 'notepad'
        },
        {
          name: '进口食品',
          id: 1003001,
          icon: 'hummer'
        },
        {
          name: '百草味',
          id: 1003001,
          icon: 'video-clapper'
        },
        {
          name: '网红新品',
          id: 1003001,
          icon: 'pin2'
        },
        {
          name: '休闲食品',
          id: 1003001,
          icon: 'gallery'
        }
      ],
      products: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    cardClick(item, e) {}
  }
}
</script>

<style lang="less">
.scroll-tab-wrapper {
  width: 100%;
  height: 400px;

  .product-item {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .img {
      flex: 0 0 90px;
      height: 90px;
      background-color: #eee;
    }
    .info {
      flex: 1 1 100%;
      padding: 0 10px;
      .title {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #eee;
        margin-bottom: 5px;
      }
      .tag {
        width: 40%;
        height: 20px;
        background-color: #eee;
        margin-bottom: 5px;
      }
      .price {
        width: 60%;
        height: 30px;
        background-color: #eee;
      }
    }
  }
}
</style>

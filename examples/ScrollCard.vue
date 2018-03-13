<template>
  <div>
    <div class="paragraph">
      <w-scroll-card>
        <a class="card-item" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
          <template v-if="item.icon">
            <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
          </template>
          {{item.name}}
        </a>
      </w-scroll-card>
    </div>

    <div class="paragraph">
      <w-scroll-card>
        <div class="card-item">
          <div>
            <w-icon size="0.4rem" color="coral" name="ticket"></w-icon>
            满69减30
          </div>
        </div>
        <div class="card-item">
          <div>
            <w-icon size="0.4rem" color="coral" name="apple"></w-icon>
            新鲜水果
          </div>
        </div>
      </w-scroll-card>
    </div>

    <div class="paragraph">
      <w-scroll-card>
        <a class="card-item2" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
          <div>
            <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
          </div>
          <div>
            {{item.name}}
          </div>
        </a>
      </w-scroll-card>
    </div>

    <div class="v-container">
      <w-scroll-card direction="v" :centerActivedItem="false">
        <a class="card-item3" v-for="item in category" :key="item.id" @click="cardClick(item, $event)">
          <div>
            <w-icon size="0.4rem" color="coral" :name="item.icon"></w-icon>
          </div>
          <div>
            {{item.name}}
          </div>
        </a>
      </w-scroll-card>
    </div>
  </div>
</template>


<script>
import { ScrollCard } from 'packages/scroll-card'
import { Icon } from 'packages/icon'

export default {
  components: {
    'w-scroll-card': ScrollCard,
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
      ]
    }
  },
  methods: {
    cardClick(item, e) {}
  }
}
</script>

<style lang="less">
.card-item {
  padding: 0.1rem 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: #f0f0f0;
  border-bottom: 2px #fff solid;
}
.card-item.active {
  border-bottom: 2px coral solid;
}

.card-item2 {
  text-align: center;
  border: 1px #f0f0f0 solid;
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;
}
.card-item2.active {
  border: 1px coral solid;
}

.v-container {
  width: 50%;
  height: 300px;
  background-color: #fff;
  border-radius: 4px;

  .card-item3 {
    display: flex;
    border: 1px #f0f0f0 solid;
    align-items: center;
    padding: 10px;
  }
  .card-item3.active {
    border-left: 2px coral solid;
  }
}
</style>

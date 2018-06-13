<template>
  <div>
    <div class="paragraph">
      <div class="title">选择年龄</div>
      <div class="title">▼</div>
      <w-scroll-picker v-model="current">
        <a class="card-item" v-for="(item, index) in category" :key="index">
          {{item}}
        </a>
      </w-scroll-picker>
      <div class="title">
        <br>当前选中索引：{{current}}
        <br>当前选中值：{{selectedValue}}
      </div>
    </div>

    <div class="paragraph">
      <div class="vertical">
        <div class="title">选择年龄</div>
        <div class="title">►</div>  
        <w-scroll-picker direction="v" v-model="currentY">
          <a class="card-item" v-for="(item, index) in category" :key="index">
            {{item}}
          </a>
        </w-scroll-picker>
        <div class="title">
          <br>当前选中索引：{{currentY}}
          <br>当前选中值：{{selectedValueY}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ScrollPicker } from 'packages/scroll-picker'
import { Icon } from 'packages/icon'

export default {
  components: {
    'w-scroll-picker': ScrollPicker,
    'w-icon': Icon
  },
  data() {
    return {
      category: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18
      ],
      current: 3,
      currentY: 2
    }
  },
  computed: {
    selectedValue() {
      return this.category[this.current]
    },
    selectedValueY() {
      return this.category[this.currentY]
    }
  },
  methods: {
    cardClick(item, e) {}
  }
}
</script>

<style lang="less">
.title {
  text-align: center;
}
.card-item {
  padding: 10px;
  width: 50px;
  background-color: #f5f5f5;
  border: 1px #ccc solid;
  text-align: center;
}
.vertical {
  display: flex;
  justify-content: strench;
  align-items: center;
  height: 200px;
}
</style>


<template>
    <div class="example-wrap">
        <scroll :scrollToEle="scrollToEle" :moreShadow="moreShadow" :afterRelease="afterRelease" :beforeRelease="beforeRelease">
            <div v-for="(v, i) in category" :key="v" :class="['example-item', { active: v === 1 }]">
                {{ v }}
            </div>
        </scroll>
    </div>
</template>

<script>
    // * 引入
    import Scroll from 'packages/scroll/src/Scroll'
    export default {
    data() {
        return {
            scrollToEle: undefined,
            moreShadow: true, //滚动至尾部是否展示阴影效果（仅对水平滑动有效）
            scrollDirection: 'horizontal', // (horizontal/vertical, 默认horizontal)
            category: [1, 2, 3, 4, 5, 6]
        };
    },
    components: {
        Scroll
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
        }
    }
}

</script>

<style scoped>
  .example-wrap {
      background: #fe5900;
      width: 700px;
  }
  .example-item {
      width: 200px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
  }
</style>
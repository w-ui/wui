<template>
  <div>
    <w-grid :rows="3" title="等分3列">
      <w-grid-item v-for="n in 6" :key="n">
          grids-3
      </w-grid-item>
    </w-grid>


    <div class="paragraph">
      <h3>slot</h3>
      <w-grid :rows="2">
        <w-grid-item>
            <img slot="icon" src="https://cn.vuejs.org/images/logo.png">
            <span slot="text">image</span>
        </w-grid-item>
        <w-grid-item>
            <img slot="icon" src="https://cn.vuejs.org/images/logo.png">
            <span slot="text">iconfont</span>
        </w-grid-item>
      </w-grid>
    </div>

  </div>
</template>

<script>
import Grid from 'packages/grid'
import GridItem from 'packages/grid-item'

export default {
  components: {
    'w-grid': Grid,
    'w-grid-item': GridItem
  }
}
</script>


<style lang="less">
  .paragraph{
    padding: 10px;
    border: 1px #f0f0f0 solid;
    border-radius: 4px;
    margin-bottom: 0.2rem;
    margin-top: 20px;

    h3{
      border-bottom: 1px #f0f0f0 solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
</style>


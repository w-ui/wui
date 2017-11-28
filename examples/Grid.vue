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
            <w-icon slot="icon" name="home" color="lightgreen"></w-icon>
            <span slot="text">主页</span>
        </w-grid-item>
        <w-grid-item>
            <w-icon slot="icon" name="user" color="lightgreen"></w-icon>
            <span slot="text">我的</span>
        </w-grid-item>
      </w-grid>
    </div>

  </div>
</template>

<script>
import Grid from 'packages/grid'
import GridItem from 'packages/grid-item'
import Icon from 'packages/icon'

export default {
  components: {
    'w-grid': Grid,
    'w-grid-item': GridItem,
    'w-icon': Icon
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


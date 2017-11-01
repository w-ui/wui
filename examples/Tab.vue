<template>
  <div>
    <w-tab>
        <w-tab-panel title="详情" active>
           详情内容
        </w-tab-panel>
        <w-tab-panel title="参数">
           参数内容
        </w-tab-panel>
        <w-tab-panel title="评价">
           评价内容
        </w-tab-panel>
        <w-tab-panel title="推荐">
           推荐内容
        </w-tab-panel>
    </w-tab>
  </div>
</template>

<script>
    import Tab from 'packages/tab'
    import TabPanel from 'packages/tab-panel'

    export default {
      components: {
        'w-tab': Tab,
        'w-tab-panel': TabPanel
      }
    }
</script>
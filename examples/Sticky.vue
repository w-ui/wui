<template>
  <div>
    <div style="height: 200px; background-color: lightgreen"></div>
    <w-sticky>
        <div style="height: 50px; width: 100%; background-color: dodgerblue">sticky</div>
    </w-sticky>
    <div style="height: 800px; background-color: lightgreen"></div>
  </div>
</template>

<script>
    import Sticky from 'packages/sticky'
    export default {
        components: {
            'w-sticky': Sticky
        }
    }
</script>
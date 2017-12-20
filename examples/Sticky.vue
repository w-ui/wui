<template>
  <div>
    <div style="height: 200px; background-color: lightgreen">
        是否支持原生sticky属性：{{this.support}}
    </div>
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
        },
        data () {
            return {
                support: false
            }
        },
        mounted () {
            let computedStyle = window.getComputedStyle(this.$el)
            let position = computedStyle.position
            this.support = position.indexOf('sticky') > -1
        }
    }
</script>
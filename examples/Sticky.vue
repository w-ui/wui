<template>
  <div>
    <div style="height: 200px; background-color: lightgreen">
        是否支持原生sticky属性：{{this.support}}
    </div>
    <w-sticky>
        <div style="height: 50px; width: 100%; background-color: dodgerblue">sticky1</div>
    </w-sticky>
    <div style="height: 180px; background-color: lightgreen"></div>
    <w-sticky>
        <div style="height: 50px; width: 100%; background-color: dodgerblue">sticky2</div>
    </w-sticky>
    <div style="height: 300px; background-color: lightgreen"></div>
    <w-sticky>
        <div style="height: 50px; width: 100%; background-color: dodgerblue">sticky3</div>
    </w-sticky>
    <div style="height: 430px; background-color: lightgreen"></div>
    <w-sticky>
        <div style="height: 50px; width: 100%; background-color: dodgerblue">sticky4</div>
    </w-sticky>
    <div style="height: 600px; background-color: lightgreen"></div>
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
            let el = document.createElement('a')
            let mStyle = el.style
            mStyle.cssText = 'position:sticky; position:-webkit-sticky;'
            this.support = mStyle.position.indexOf('sticky') !== -1
        }
    }
</script>
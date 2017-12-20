# 41组件


### 手机扫码查看示例


<template>
  <w-qrcode :text="url" :size="256" image="/img/wui.png"></w-qrcode>
</template>

<script>
  import Qrcode from 'packages/qrcode'
  export default {
    components: {
      'w-qrcode': Qrcode
    },
    data () {
      return {
        url: location.href
      }
    }
  }
</script>
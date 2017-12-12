# 41组件


### 手机扫码查看示例


<template>
  <w-qrcode url="https://w-ui.github.io/#/demo/index" :size="256"></w-qrcode>
</template>

<script>
  import Qrcode from 'packages/qrcode'
  export default {
    components: {
      'w-qrcode': Qrcode
    }
  }
</script>
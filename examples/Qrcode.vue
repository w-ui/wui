<template>
  <div>
    <div class="paragraph">
      url: 'https://github.com/w-ui'
    </div>
    <div class="paragraph">
      <h3>默认</h3>
      <w-qrcode url="https://github.com/w-ui" :size="128"></w-qrcode>
    </div>
    <div class="paragraph">
      <h3>混合模式</h3>
      <w-qrcode url="https://github.com/w-ui" :size="256" type="mix"></w-qrcode>
    </div>
  </div>
</template>

<script>
    import Qrcode from 'packages/qrcode'

    export default {
      components: {
        'w-qrcode': Qrcode
      }
    }
</script>
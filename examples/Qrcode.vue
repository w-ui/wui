<template>
  <div>
    <div class="paragraph">
      url: 'https://w-ui.github.io'
    </div>
    <div class="paragraph">
      <h3>默认</h3>
      <w-qrcode text="https://w-ui.github.io" :size="128"></w-qrcode>
    </div>
    <div class="paragraph">
      <h3>带logo</h3>
      <w-qrcode text="https://github.com/w-ui" :size="200" image="/img/wui.png"></w-qrcode>
    </div>
  </div>
</template>

<script>
import { Qrcode } from 'packages/qrcode'

export default {
  components: {
    'w-qrcode': Qrcode
  }
}
</script>
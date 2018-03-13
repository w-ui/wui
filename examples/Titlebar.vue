<template>

  <div>
    <w-titlebar>
      WUI
      <w-icon slot="icon2" size="16px" color="#ccc" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>


    <w-titlebar bgColor="dodgerblue">
      <p slot="back"></p>
      <p style="color: #444">
        <w-icon slot="icon2" size="16px" color="#ccc" name="heart"></w-icon>WUI
      </p>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>


    <w-titlebar home="/#/demo/Index" bgColor="transparent">
      <p slot="back">
        <w-icon slot="icon2" size="22px" color="#666" name="arrow-circle-left" @click.native="doBack"></w-icon>
      </p>
      <p style="color: #444">WUI</p>
      <w-icon slot="icon2" size="16px" color="#666" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#666" name="share" @click.native="doShare"></w-icon>
    </w-titlebar>

  </div>
    
</template>

<script>
import { Titlebar } from 'packages/titlebar'
import { Icon } from 'packages/icon'
import { Alert } from 'packages/dialog'

export default {
  name: 'wui-title-bar-demo',
  components: {
    'w-titlebar': Titlebar,
    'w-icon': Icon
  },
  methods: {
    doLike() {
      Alert('Like')
    },
    doShare() {
      Alert('Share')
    },
    doBack() {
      Alert('Back')
    }
  }
}
</script>
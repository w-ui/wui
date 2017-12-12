<template>

  <div>
    <w-title-bar>
      WUI
      <w-icon slot="icon2" size="16px" color="#ccc" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-title-bar>


    <w-title-bar bgColor="dodgerblue">
      <p slot="back"></p>
      <p style="color: #444">
        <w-icon slot="icon2" size="16px" color="#ccc" name="heart"></w-icon>WUI
      </p>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-title-bar>


    <w-title-bar home="/#/demo/Index" bgColor="transparent">
      <p slot="back">
        <w-icon slot="icon2" size="22px" color="#ccc" name="circle-left" @click.native="doBack"></w-icon>
      </p>
      <p style="color: #444">WUI</p>
      <w-icon slot="icon2" size="16px" color="#ccc" name="heart" @click.native="doLike"></w-icon>
      <w-icon slot="icon1" size="16px" color="#ccc" name="share" @click.native="doShare"></w-icon>
    </w-title-bar>

  </div>
    
</template>

<script type="text/babel">
  import Ttitlebar from 'packages/titlebar'
  import Icon from 'packages/icon'
  import {Alert} from 'packages/dialog'

  export default {
    name: 'wui-title-bar-demo',
    components: {
      'w-title-bar': Ttitlebar,
      'w-icon': Icon
    },
    methods: {
      doLike () {
        Alert('Like')
      },
      doShare () {
        Alert('Share')
      },
      doBack () {
        Alert('Back')
      }
    }
  }
</script>